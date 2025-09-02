'use client';

import { useState } from 'react';
import styles from './Chat.module.sass';

interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export const Chat = (props: { agent: string }) => {
  const initialMessages: Message[] = [{ id: '1', role: 'system', content: props.agent }];
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!response.ok) throw new Error('Failed to get response');
      if (!response.body) throw new Error('No response body');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '',
      };

      setMessages(prev => [...prev, assistantMessage]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        assistantContent += chunk;

        setMessages(prev =>
          prev.map(msg =>
            msg.id === assistantMessage.id ? { ...msg, content: assistantContent } : msg
          )
        );
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, something went wrong. Please try again.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.Chat}>
      <section>
        {messages
          .filter(m => m.role !== 'system')
          .map(m => (
            <div key={m.id}>
              <strong>{m.role === 'user' ? 'User: ' : 'AI: '}</strong>
              <span>{m.content}</span>
            </div>
          ))}
        {isLoading && (
          <div className="mb-4">
            <strong>AI: </strong>
            <span>Thinking...</span>
          </div>
        )}
        {messages.filter(m => m.role !== 'system').length === 0 && (
          <div>Start a conversation with the AI!</div>
        )}
      </section>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Say something..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading || !input.trim()}>
          Send
        </button>
      </form>
    </main>
  );
};
