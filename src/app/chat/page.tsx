import { Chat } from '@/components/chat';
import { getProducts } from '@/services/shopify/products';
import { createAgent } from '@/utils/openai/createAgent';

export default async function ChatPage() {
  const products = await getProducts();
  const productTitles = products.map(product => product.title).join(', ');
  const agentPrompt = createAgent(productTitles);

  return (
    <>
      <h1>Chatbot</h1>
      <Chat agent={agentPrompt} />
    </>
  );
}
