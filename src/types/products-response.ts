import { Product } from "./product";

export type ProductsFetchResponse = {
    data: {
        allProducts: Product[];
    }
}