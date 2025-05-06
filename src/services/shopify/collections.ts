import { shopifyUrls } from './urls';
import { env } from '@/config/env';
import { CollectionType } from '@/types/collection';

export const getCollections = async () => {
  const response = await fetch(shopifyUrls.collections.all, {
    headers: new Headers({
      'X-Shopify-Access-Token': env.SHOPIFY_API_KEY,
    }),
  });
  const { smart_collections } = await response.json();
  const transformedCollections = smart_collections.map((collection: CollectionType) => {
    return {
      id: collection.id,
      title: collection.title,
      handle: collection.handle,
    };
  });
  return transformedCollections;
};

export const getCollectionProducts = async (id: string) => {
  try {
    const response = await fetch(shopifyUrls.collections.products(id), {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_API_KEY,
      }),
    });
    const { products } = await response.json();
    return products || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
