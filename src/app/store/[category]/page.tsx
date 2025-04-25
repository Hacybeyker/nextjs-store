interface StoreCategoryPageProps {
  params: {
    category: string;
  };
}

function StoreCategoryPage(props: StoreCategoryPageProps) {
  const { category } = props.params;

  return <div>Categoria dinamica: {category}</div>;
}

export default StoreCategoryPage;
