import { MainProducts } from '@/components/home/MainProducts';

export const metadata = {
  title: 'Future world',
  description: 'Welcome to the future world, an ecommerce from other century',
  keywords: ['future world', 'ecommerce', 'future', 'world'],
};

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
