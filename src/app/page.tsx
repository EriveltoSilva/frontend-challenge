import { FilterArea } from "@/components/Home/FilterArea";
import { Paginator } from "@/components/Home/Paginator";

export default async function Home() {
  return (
    <main className="px-40 py-8">
      <div className="space-y-6 w-full">
        <FilterArea />
        <Paginator currentPage={1} totalPages={6} />

      </div>

    </main>
  );
}
