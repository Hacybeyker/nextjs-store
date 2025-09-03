import { shopifyUrls } from './urls';
import { env } from '@/config/env';
import { ProductType } from '@/types/product';
import { ShopifyProduct } from '@/types/shopify';

export const getProducts = async (id?: string): Promise<ProductType[]> => {
  try {
    const apiUrl = id ? `${shopifyUrls.products.all}?ids=${id}` : shopifyUrls.products.all;
    const response = await fetch(apiUrl, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_API_KEY,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
    }

    const { products } = await response.json();

    if (!products || !Array.isArray(products)) {
      return [];
    }

    const transformedProducts = products.map((product: ShopifyProduct) => {
      return {
        id: product.id,
        gql_id: product.variants?.[0]?.admin_graphql_api_id || '',
        title: product.title || 'Sin título',
        description: product.body_html || '',
        price: parseFloat(product.variants?.[0]?.price || '0'),
        image: product.images?.[0]?.src || '',
        quantity: product.variants?.[0]?.inventory_quantity || 0,
        handle: product.handle || '',
        tags: product.tags || '',
      };
    });
    return transformedProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getMainProducts = async () => {
  try {
    const response = await fetch(shopifyUrls.products.mainProducts, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_API_KEY,
      }),
      cache: 'force-cache',
      next: {
        tags: ['main-products'],
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch main products: ${response.status} ${response.statusText}`);
    }

    const { products } = await response.json();
    return products || [];
  } catch (error) {
    console.error('Error fetching main products:', error);
    return [];
  }
};
