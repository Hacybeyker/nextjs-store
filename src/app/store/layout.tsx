import { getCollections } from '@/services/shopify/collections';
import Link from 'next/link';
import { CollectionType } from '@/types/collection';
import styles from './StoreLayout.module.sass';

export default async function Layout({ children }: { children: React.ReactNode }) {
  console.log('variable de entorno: ', process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME);
  const collections = await getCollections();
  return (
    <main className={styles.StoreLayout}>
      <h1>Explore</h1>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {collections.map((collection: CollectionType) => (
            <Link
              key={collection.id}
              href={'/store/' + collection.handle}
              className={styles.StoreLayout__chip}
            >
              {collection.title}
            </Link>
          ))}
        </ul>
      </nav>
      {children}
    </main>
  );
}
