import { getProducts } from "@/actions/get-products";
import { FilterArea } from "@/components/Home/FilterArea";
import { Paginator } from "@/components/Home/Paginator";
import { ProductList } from "@/components/ProductList";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="px-40 py-8">
      <div className="space-y-6 w-full">
        <FilterArea />
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
