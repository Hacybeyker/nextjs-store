export interface ShopifyProduct {
  id: string;
  title: string;
  body_html: string;
  handle: string;
  tags: string;
  variants: Array<{
    admin_graphql_api_id: string;
    price: string;
    inventory_quantity: number;
  }>;
  images: Array<{
    src: string;
  }>;
}
