import { getFilteredProducts } from "@/actions/productActions";
import { FilterBar } from "@/components/Home/FilterBar";
import { Paginator } from "@/components/Home/Paginator";
import { ProductList } from "@/components/ProductList";
import { FilterType } from "@/types/filter-types";
import { PriorityType } from "@/types/priority-types";

interface HomeProps {
  searchParams: {
    filter: FilterType;
    priority: PriorityType;
    search: string;
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const filterType = searchParams.filter || FilterType.ALL;
  const priorityType = searchParams.priority || PriorityType.POPULARITY;
  const search = searchParams.search || "";

  // Obtém os produtos de acordo com o filtro escolhido
  const products = await getFilteredProducts(filterType, priorityType, search);

  return (
    <main className="lg:px-40 lg:py-8 px-6 py-3">
      <div className="space-y-6 w-full">
        <FilterBar currentFilter={filterType} currentPriority={priorityType} />
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
