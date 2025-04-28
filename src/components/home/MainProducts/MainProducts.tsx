interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
}

const getProducts = async () => {
  const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2025-04/products.json`, {
    headers: new Headers({
      'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || '',
    }),
  });
  const { products } = await response.json();
  return products || [];
};

export const MainProducts = async () => {
  console.log(process.env.SHOPIFY_HOSTNAME);
  const products = await getProducts();
  console.log(products);
  return (
    <section>
      <h1>MainProducts</h1>
      <div>
        {products.map((product: Product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
