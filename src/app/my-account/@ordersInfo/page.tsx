import { getCustomerOrders } from '@/services/shopify/graphql/customer';
import type { Order } from '@/types/orders';

// Força dynamic rendering para esta página que requiere autenticación
export const dynamic = 'force-dynamic';

export default async function MyAccountPage() {
  const ordersInfo = await getCustomerOrders();
  
  return (
    <div>
      <section>
        <h2>Orders</h2>
        {ordersInfo.orders?.map((order: Order) => (
          <p key={order.orderNumber}>{order.orderNumber}</p>
        ))}
      </section>
    </div>
  );
}
