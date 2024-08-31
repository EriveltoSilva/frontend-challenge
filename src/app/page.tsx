import { FilterArea } from "@/components/Home/FilterArea";
import { Paginator } from "@/components/Home/Paginator";
import { ProductList } from "@/components/ProductList";

export default async function Home() {
  const products = [
    { id: 1, title: "Caneca de cerâmica rústica", price: 40 },
    { id: 2, title: "Camiseta not today", price: 60 },
    { id: 3, title: "Caneca Black Ring", price: 45 },
    { id: 4, title: "Camiseta Broken Saints", price: 70 },
    { id: 5, title: "Camiseta Outcast", price: 55 },
    { id: 6, title: "Caneca The Grounds", price: 50 },
    { id: 7, title: "Camiseta evening", price: 65 },
    { id: 8, title: "Caneca preto fosco", price: 40 },
    { id: 9, title: "Caneca Never settle", price: 45 },
    { id: 10, title: "Camiseta DREAMER", price: 75 },
    { id: 11, title: "Caneca Decaf! P & Co", price: 50 },
    { id: 12, title: "Camiseta Ramones", price: 80 },
  ];

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
