import { env } from '@/config/env';

export const shopifyUrls = {
  products: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2025-04/products.json`,
  },
  collections: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2025-04/smart_collections.json`,
    products: (id: string) =>
      `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/${id}/products.json`,
  },
};
