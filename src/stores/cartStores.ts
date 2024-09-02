import { Product } from '@/types/product-types';
import { create } from 'zustand'

type State = {
  cart: Product[];
}

type Action = {
    addToCart: (product: Product) => void;
    deleteFromCart: (productId: string) => void;
    loadCart: () => void;
}


export const useCartStore = create<State & Action>((set) => ({
    cart: [],
    loadCart: () => {
        const storedCart = window.localStorage.getItem('cart');
        set({ cart: storedCart ? JSON.parse(storedCart) : [] });
    },
    addToCart: (product: Product) => {
        set((state) => {
            const updatedCart = [...state.cart, product];
            window.localStorage.setItem('cart', JSON.stringify(updatedCart));
            return { cart: updatedCart };
        });
    },
    deleteFromCart: (productId: string) => {
        set((state) => {
            const updatedCart = state.cart.filter((cartItem) => cartItem.id!== productId);
            window.localStorage.setItem('cart', JSON.stringify(updatedCart));
            return { cart: updatedCart };
        });
    },
  }));