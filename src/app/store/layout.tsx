export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>Navigacion de las categorias</nav>
      {children}
    </main>
  );
}
