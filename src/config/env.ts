export const env = {
  SHOPIFY_HOSTNAME: process.env.SHOPIFY_HOSTNAME || '',
  SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY || '',
  CACHE_TOKEN: process.env.CACHE_TOKEN || '',
  SHOPIFY_GRAPHQL_ENDPOINT: process.env.SHOPIFY_GRAPHQL_ENDPOINT as string,
  SHOPIFY_STOREFRONT_TOKEN: process.env.SHOPIFY_STOREFRONT_TOKEN as string,
  // Variables públicas para el cliente (prefijo NEXT_PUBLIC_)
  NEXT_PUBLIC_SHOPIFY_HOSTNAME: process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME || '',
};
