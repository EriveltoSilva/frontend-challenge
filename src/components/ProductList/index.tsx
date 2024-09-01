import React from "react";
import { ProductItem } from "./ProductItem";

interface ProductListProps {
    products: any[];
}



export const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <>
            <section className="grid grid-cols-4 gap-4">
                {products.map((product) => {
                    // const image = require(`@/assets/images/${product.id}.png`);
                    return (
                        <ProductItem
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        />
                    );
                })}
            </section>
        </>
    );
};
