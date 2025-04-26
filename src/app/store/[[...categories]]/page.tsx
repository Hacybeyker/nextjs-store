interface StoreCategoryPageProps {
  params: {
    categories?: string[];
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

async function StoreCategoryPage(props: StoreCategoryPageProps) {
  const { categories = [] } = await props.params;
  const searchParams = await Promise.resolve(props.searchParams);

  return (
    <div>
      {categories.length > 0 ? (
        <div>Categoria dinamica: {categories.join('/')}</div>
      ) : (
        <div>Todas las categorias</div>
      )}
      <div>
        <h3>Parámetros de búsqueda:</h3>
        <pre>{JSON.stringify(searchParams, null, 2)}</pre>
      </div>
    </div>
  );
}

export default StoreCategoryPage;
