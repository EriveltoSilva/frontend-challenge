"use client"
import { Dropdown } from "@/components/Buttons/Dropdown";
import { useFilterStore } from "@/stores/filterStore";
import { FilterType } from "@/types/filter-types";
import { useEffect } from "react";
import { FilterItem } from "./FilterItem";

type Props = {};


export const FilterArea = (props: Props) => {
    const { filter, updateFilter } = useFilterStore();

    useEffect(() => {
        // getFilteredProducts();
    }, [filter]);

    return (
        <div className="flex justify-between items-center">
            <ul className="flex gap-10 text-base text-[#737380] uppercase ">
                <FilterItem
                    text="Todos os produtos"
                    selected={filter == FilterType.ALL}
                    onClick={() => updateFilter(FilterType.ALL)}
                />
                <FilterItem
                    text="Camisetas"
                    selected={filter == FilterType.SHIRTS}
                    onClick={() => updateFilter(FilterType.SHIRTS)}
                />
                <FilterItem
                    text="Canecas"
                    selected={filter == FilterType.MUGS}
                    onClick={() => updateFilter(FilterType.MUGS)}
                />
            </ul>

            <Dropdown
                title="Organizar por"
                options={['Novidades', 'Preço Maior - menor', 'Preço Menor - maior', 'Mais vendidos']}
            />
        </div>
    );
};
