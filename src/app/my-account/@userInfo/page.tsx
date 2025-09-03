import { validateAccessToken } from '@/utils/auth/validateAccessToken';
import { redirect } from 'next/navigation';

export default async function MyAccountPage() {
  const customer = await validateAccessToken();

  // Si no hay customer válido, redirigir al login
  if (!customer) {
    redirect('/login');
  }

  return (
    <div>
      <section>
        <h2>Your info</h2>
        <h1>Bienvenido {customer.firstName || 'Usuario'}</h1>
        <p>email: {customer.email || 'No disponible'}</p>
      </section>
    </div>
  );
}
