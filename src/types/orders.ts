export interface LineItem {
  currentQuantity: number;
  quantity: number;
  title: string;
}

export interface Order {
  cancelReason?: string | null;
  canceledAt?: string | null;
  currencyCode: string;
  customerLocale: string;
  customerUrl: string;
  edited: boolean;
  email: string;
  financialStatus: string;
  fulfillmentStatus: string;
  id: string;
  name: string;
  orderNumber: number;
  phone?: string | null;
  processedAt: string;
  statusUrl: string;
  lineItems: {
    edges: {
      cursor: string;
      node: LineItem;
    }[];
  };
}

export interface CustomerOrdersResponse {
  totalOrders: number;
  orders: Order[];
}

export interface GraphQLOrdersResponse {
  customer: {
    orders: {
      totalCount: number;
      edges: {
        node: Order;
      }[];
    };
  } | null;
}
