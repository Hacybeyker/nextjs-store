import { GraphQLClientSingleton } from '@/graphql';
import { getOrdersQuery } from '@/graphql/queries/getOrders';
import { cookies } from 'next/headers';
import type { CustomerOrdersResponse, GraphQLOrdersResponse } from '@/types/orders';

export const getCustomerOrders = async (): Promise<CustomerOrdersResponse> => {
  const cookiesStorage = await cookies();
  const accessToken = cookiesStorage.get('accessToken')?.value || '';
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const variables = {
    customerAccessToken: accessToken,
  };

  const response = await graphqlClient.request<GraphQLOrdersResponse>(getOrdersQuery, variables);
  const orders = response.customer?.orders?.edges.map((edge) => edge.node) || [];
  return {
    totalOrders: response.customer?.orders?.totalCount || 0,
    orders,
  };
};
