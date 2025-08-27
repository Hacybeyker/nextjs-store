import { GraphQLClientSingleton } from '@/graphql';
import { customerAccessTokenCreateMutation } from '@/graphql/mutations/customerAccessTokenCreate';
import { cookies } from 'next/headers';

type CustomerAccessTokenResponse = {
  customerAccessTokenCreate: {
    customerAccessToken: {
      accessToken: string;
      expiresAt: string;
    };
  };
};

export const createAccessToken = async (email: string, password: string): Promise<string> => {
  const cookiesStore = await cookies();
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const { customerAccessTokenCreate } = await graphqlClient.request<CustomerAccessTokenResponse>(
    customerAccessTokenCreateMutation,
    {
      email: email,
      password: password,
    }
  );

  const customerAccessToken = customerAccessTokenCreate?.customerAccessToken;
  console.log('createAccessToken', customerAccessToken);
  if (customerAccessToken && customerAccessToken.accessToken) {
    const { accessToken, expiresAt } = customerAccessToken;

    cookiesStore.set('accessToken', accessToken, {
      path: '/',
      httpOnly: true,
      expires: new Date(expiresAt),
      sameSite: 'strict',
    });
    return accessToken;
  }
  return '';
};
