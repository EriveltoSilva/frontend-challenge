import { Product } from "./product-types";

export type ProductsFetchResponse = {
    data: {
        allProducts: Product[];
    }
}