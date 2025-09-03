import Image from 'next/image';
import styles from './MainProducts.module.sass';
import { getMainProducts } from '@/services/shopify/products';

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: {
    src: string;
    alt: string | null;
    width: number;
    height: number;
  };
}

export const MainProducts = async () => {
  const products = await getMainProducts();
  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product: Product) => {
          const imageSrc = product.image.src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imageSrc} fill alt={product.title} loading="eager" />
            </article>
          );
        })}
      </div>
    </section>
  );
};
