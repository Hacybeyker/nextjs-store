import { shopifyUrls } from './urls';
import { env } from '@/config/env';
import { ProductType } from '@/types/product';
import { ShopifyProduct } from '@/types/shopify';

export const getProducts = async (id?: string): Promise<ProductType[]> => {
  const apiUrl = id ? `${shopifyUrls.products.all}?ids=${id}` : shopifyUrls.products.all;
  const response = await fetch(apiUrl, {
    headers: new Headers({
      'X-Shopify-Access-Token': env.SHOPIFY_API_KEY,
    }),
  });

  const { products } = await response.json();

  const transformedProducts = products.map((product: ShopifyProduct) => {
    return {
      id: product.id,
      gql_id: product.variants[0].admin_graphql_api_id,
      title: product.title,
      description: product.body_html,
      price: product.variants[0].price,
      image: product.images[0].src,
      quantity: product.variants[0].inventory_quantity,
      handle: product.handle,
      tags: product.tags,
    };
  });
  return transformedProducts;
};

export const getMainProducts = async () => {
  const response = await fetch(shopifyUrls.products.mainProducts, {
    headers: new Headers({
      'X-Shopify-Access-Token': env.SHOPIFY_API_KEY,
    }),
    cache: 'no-cache',
  });

  const { products } = await response.json();

  return products;
};
