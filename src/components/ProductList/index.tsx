import { Product } from "@/types/product";
import React from "react";
import { ProductItem } from "./ProductItem";

interface ProductListProps {
    products: any[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product: Product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        category={product.category}
                        price_in_cents={product.price_in_cents}
                        sales={product.sales}
                        image_url={product.image_url}
                        created_at={product.created_at}
                    />
                )
                )}
            </section>
        </>
    );
};
