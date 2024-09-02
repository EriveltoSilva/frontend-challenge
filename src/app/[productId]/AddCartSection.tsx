"use client";
import { ShoppingIcon } from "@/assets/icons/ShoppingIcon";
import { Button } from "@/components/Buttons/Button";
import { useCartStore } from "@/stores/cartStores";
import { Product } from "@/types/product-types";
import { useEffect } from "react";

interface AddCartSectionProps {
    product: Product
}

export const AddCartSection = ({ product }: AddCartSectionProps) => {
    const { loadCart, addToCart } = useCartStore();

    useEffect(() => {
        loadCart();
    }, []);

    const handleAddCart = () => {
        addToCart(product);
    }

    return (
        <Button
            className="uppercase"
            onClick={handleAddCart}
        >
            <span>Adicionar ao Carrinho</span>
            <ShoppingIcon fill="#fff" />
        </Button>
    )
}
