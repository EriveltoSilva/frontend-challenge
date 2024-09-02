"use client";

import { Dropdown } from "@/components/Buttons/Dropdown";
import { FilterType } from "@/types/filter-types";
import { PriorityType } from "@/types/priority-types";
import { filterMatcher } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { FilterItem } from "./FilterItem";


interface FilterAreaProps {
    currentFilter: FilterType;
    currentPriority: PriorityType;
}



export const FilterBar = ({ currentFilter, currentPriority }: FilterAreaProps) => {
    const router = useRouter();

    const handleFilterChange = (filter: FilterType) => {
        router.push(`/?filter=${filter}&priority=${currentPriority}`, { scroll: false });
    }

    const handleDropdownSelection = (selection: string) => {
        const selectedPriority = filterMatcher(selection);
        router.push(`/?filter=${currentFilter}&priority=${selectedPriority}`, { scroll: false });
    }

    return (
        <div className="flex justify-between lg:gap-0 gap-4 items-center">
            <ul className="flex items-center flex-grow gap-6 lg:gap-10 text-xs lg:text-base text-[#737380] uppercase">
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
                handleDropdownSelection={handleDropdownSelection}
                title="Organizar por"
                options={['Novidades', 'Preço Maior - menor', 'Preço Menor - maior', 'Mais vendidos']}
            />
        </div>
    );
};
