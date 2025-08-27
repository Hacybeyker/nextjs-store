'use server';

import { GraphQLClientSingleton } from '@/graphql';
import { createUserMutation } from '@/graphql/mutations/createUserMutation';
import { createAccessToken } from '@/utils/auth/createAccessToken';
import { redirect } from 'next/navigation';

type CustomerCreateResponse = {
  customerCreate: {
    customerUserErrors: {
      field: string;
      message: string;
      code: string;
    }[];
    customer: {
      firstName: string;
    } | null;
  };
};

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  delete formDataObject['password_confirmation'];
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const variables = {
    input: {
      ...formDataObject,
      phone: '+51' + formDataObject.phone,
    },
  };
  const { customerCreate } = await graphqlClient.request<CustomerCreateResponse>(
    createUserMutation,
    variables
  );
  const { customer } = customerCreate;
  console.log('handleCreateUser', formData);
  console.log('data', customer);
  if (customer?.firstName) {
    await createAccessToken(formDataObject.email as string, formDataObject.password as string);
    redirect('/store');
  }
};

export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  const accesToken = await createAccessToken(
    formDataObject.email as string,
    formDataObject.password as string
  );
  console.log('accesToken', accesToken);
  if (accesToken) {
    redirect('/store');
  }
};
