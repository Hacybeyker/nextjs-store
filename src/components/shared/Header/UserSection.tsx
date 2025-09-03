'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Customer = {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
};

export const UserSection = () => {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateAccessToken = async () => {
      try {
        // Usar la misma API route que creamos pero que internamente usa validateAccessToken
        const response = await fetch('/api/validate-token', {
          method: 'GET', // Cambiar a GET ya que no necesitamos enviar el token
        });

        if (response.ok) {
          const data = await response.json();
          setCustomer(data.customer);
        }
      } catch (error) {
        console.error('Error validating token:', error);
      } finally {
        setLoading(false);
      }
    };

    validateAccessToken();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      {customer?.firstName ? <p>Hola! {customer.firstName}</p> : <Link href="/login">Login</Link>}
    </>
  );
};
