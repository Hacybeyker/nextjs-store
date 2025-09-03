import { shopifyUrls } from './urls';
import { env } from '@/config/env';
import { CollectionType } from '@/types/collection';

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_API_KEY,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch collections: ${response.status} ${response.statusText}`);
    }

    const { smart_collections } = await response.json();

    if (!smart_collections || !Array.isArray(smart_collections)) {
      return [];
    }

    const transformedCollections = smart_collections.map((collection: CollectionType) => {
      return {
        id: collection.id,
        title: collection.title || 'Sin título',
        handle: collection.handle || '',
      };
    });
    return transformedCollections;
  } catch (error) {
    console.error('Error fetching collections:', error);
    return [];
  }
};

export const getCollectionProducts = async (id: string) => {
  try {
    const response = await fetch(shopifyUrls.collections.products(id), {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_API_KEY,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch collection products: ${response.status} ${response.statusText}`
      );
    }

    const { products } = await response.json();
    return products || [];
  } catch (error) {
    console.error('Error fetching collection products:', error);
    return [];
  }
};
