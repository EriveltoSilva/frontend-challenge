import { FilterType } from '@/types/filter-types'
import { PriorityType } from '@/types/priority-types'
import { Product } from '@/types/product'
import { create } from 'zustand'

type State = {
    filter: FilterType,
    page: number,
    priority:PriorityType,
    searchText: string
}

type Action = {
    updateFilter: (filter:FilterType) => void,
    getFilter: () => FilterType,


    updatePage: (page: number) => void,
    getPage: () => number,

    updatePriority: (priority: PriorityType) => void,
    getPriority: () => PriorityType,

    updateSearchText: (searchText: string) => void,
}

export const useFilterStore = create<State & Action>((set, get) => ({
    filter:FilterType.ALL,
    updateFilter: (filter) => set(() => ({ filter: filter })),
    getFilter: () => get().filter,
    
    page: 1,
    updatePage: (page) => set((state) => ({ page: page })),
    getPage: () => get().page,
    
    priority: PriorityType.NEWS,
    updatePriority: (priority) => set(() => ({ priority: priority })),
    getPriority: () => get().priority,

    searchText: "",
    updateSearchText: (searchText) => set((state) => ({searchText: searchText })),
}))