"use client";

import { Dropdown } from "@/components/Buttons/Dropdown";
import { FilterType } from "@/types/filter-types";
import { PriorityType } from "@/types/priority-types";
import { useRouter } from "next/navigation";
import { FilterItem } from "./FilterItem";


interface FilterAreaProps {
    currentFilter: FilterType;
    currentPriority: PriorityType;
}

const matcher = (text: string): PriorityType => {
    switch (text) {
        case 'Novidades':
            return PriorityType.NEWEST;
        case 'Preço Maior - menor':
            return PriorityType.PRICE_HIGH_TO_LOW;
        case 'Preço Menor - maior':
            return PriorityType.PRICE_LOW_TO_HIGH;
        case 'Mais vendidos':
            return PriorityType.MOST_SOLD;
        default:
            return PriorityType.NEWEST;
    }
}



export const FilterBar = ({ currentFilter, currentPriority }: FilterAreaProps) => {
    const router = useRouter();

    const handleFilterChange = (filter: FilterType) => {
        router.push(`/?filter=${filter}&priority=${currentPriority}`, { scroll: false });
    }

    const handleDropdownSelection = (selection: string) => {
        const selectedPriority = matcher(selection);
        router.push(`/?filter=${currentFilter}&priority=${selectedPriority}`, { scroll: false });
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
                handleDropdownSelection={handleDropdownSelection}
                title="Organizar por"
                options={['Novidades', 'Preço Maior - menor', 'Preço Menor - maior', 'Mais vendidos']}
            />
        </div>
    );
};
