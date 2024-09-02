import { getFilteredProducts } from "@/actions/productActions";
import { FilterBar } from "@/components/Home/FilterBar";
import { Paginator } from "@/components/Home/Paginator";
import { ProductList } from "@/components/ProductList";
import { FilterType } from "@/types/filter-types";

interface HomeProps {
  searchParams: {
    filter: FilterType;
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const filterType = searchParams.filter || FilterType.ALL;

  // Obtém os produtos de acordo com o filtro escolhido
  const products = await getFilteredProducts(filterType);

  return (
    <main className="px-40 py-8">
      <div className="space-y-6 w-full">
        <FilterBar currentFilter={filterType} />
        <Paginator currentPage={1} totalPages={6} />

        <div className="space-y-44">
          {/* Lista de produtos */}
          <ProductList products={products} />
          <Paginator currentPage={1} totalPages={6} />
        </div>
      </div>
    </main>
  );
}
