import Image from 'next/image';
import styles from './MainProducts.module.sass';

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

const getProducts = async () => {
  const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2025-04/products.json`, {
    headers: new Headers({
      'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || '',
    }),
  });
  const { products } = await response.json();
  return products || [];
};

export const MainProducts = async () => {
  console.log(process.env.SHOPIFY_HOSTNAME);
  const products = await getProducts();
  console.log(products);
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
