import { Product } from '@/types/product-types'
import { create } from 'zustand'

type State = {
    products: Product[],
}

type Action = {
    updateProducts: (products:Product[]) => void,
    getProducts: () => Product[],
}

export const useProductStore = create<State & Action>((set, get) => ({
    products:[],
    updateProducts: (products) => set(() => ({ products: products })),
    getProducts: () => get().products,
}))