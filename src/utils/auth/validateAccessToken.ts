import { GraphQLClientSingleton } from '@/graphql';
import { customerName } from '@/graphql/queries/customerName';
import { cookies } from 'next/headers';

type Customer = {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
};

type CustomerNameResponse = {
  customer: Customer | null;
};

export const validateAccessToken = async () => {
  const cookiesStore = await cookies();
  const accessToken = cookiesStore.get('accessToken')?.value || null;
  if (!accessToken) {
    // Si no hay accessToken, no hagas la petición y retorna null
    return null;
  }
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const response = await graphqlClient.request<CustomerNameResponse>(customerName, {
    customerAccessToken: accessToken,
  });
  return response.customer;
};
