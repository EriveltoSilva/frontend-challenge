import React from "react";
import { ProductItem } from "./ProductItem";

interface ProductListProps {
    products: any[];
}



export const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <>
            <section className="grid grid-cols-4 gap-4">
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price_in_cents={product.price_in_cents}
                        image_url={product.image_url}
                    />
                )
                )}
            </section>
        </>
    );
};
