export default function Layout({ children }: { children: React.ReactNode }) {
  console.log('variable de entorno: ', process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME);
  return (
    <main>
      <nav>Navigacion de las categorias</nav>
      {children}
    </main>
  );
}
