"use client";

import { Dropdown } from "@/components/Buttons/Dropdown";
import { FilterType } from "@/types/filter-types";
import { useRouter } from "next/navigation";
import { FilterItem } from "./FilterItem";


interface FilterAreaProps {
    currentFilter: string;
}


export const FilterBar = ({ currentFilter }: FilterAreaProps) => {
    const router = useRouter();

    const handleFilterChange = (filter: FilterType) => {
        // Atualiza o filtro na URL e não na tela para não perder o estado(não rola a tela)
        router.push(`/?filter=${filter}`, { scroll: false });
    }

    return (
        <div className="flex justify-between items-center">
            <ul className="flex gap-10 text-base text-[#737380] uppercase ">
                <FilterItem
                    text="Todos os produtos"
                    selected={currentFilter == FilterType.ALL}
                    onClick={() => handleFilterChange(FilterType.ALL)}
                />
                <FilterItem
                    text="Camisetas"
                    selected={currentFilter == FilterType.SHIRTS}
                    onClick={() => handleFilterChange(FilterType.SHIRTS)}
                />
                <FilterItem
                    text="Canecas"
                    selected={currentFilter == FilterType.MUGS}
                    onClick={() => handleFilterChange(FilterType.MUGS)}
                />
            </ul>

            <Dropdown
                title="Organizar por"
                options={['Novidades', 'Preço Maior - menor', 'Preço Menor - maior', 'Mais vendidos']}
            />
        </div>
    );
};
