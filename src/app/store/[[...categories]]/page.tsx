import { getProducts } from '@/services/shopify';
import { ProductsWrapper } from '@/components/Store/ProductsWrapper';

interface StoreCategoryPageProps {
  params: {
    categories?: string[];
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

async function StoreCategoryPage(props: StoreCategoryPageProps) {
  const products = await getProducts();
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
      <ProductsWrapper products={products} />
    </div>
  );
}

export default StoreCategoryPage;
