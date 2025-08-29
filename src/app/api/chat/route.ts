import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Ask OpenAI for a streaming chat completion given the prompt
  const result = await streamText({
    model: openai('gpt-4.1-nano'),
    messages,
  });

  // Respond with the stream
  return result.toTextStreamResponse();
}
