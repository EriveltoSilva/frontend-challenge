import { FilterType } from "@/types/filter-types";
import axios from "axios";
import { API_URL } from "@/constants/api";
import { Product } from "@/types/product-types";
import { PriorityType } from "@/types/priority-types";
import { makeQuery } from "@/utils/actions/functions";
import { PER_PAGE } from "@/constants/constants";


export const getFilteredProducts = async (filterType: FilterType, priority:PriorityType, search:string, page:number):Promise<Product[]> => {
    try {
        const data = await axios.post(API_URL, { query: makeQuery(filterType, priority,page) } );
        if (search)
            return data?.data.data.allProducts.filter((product:Product) => product.name.toLowerCase().includes(search.toLowerCase()));
        return data?.data?.data?.allProducts;
    } catch (error) {
        throw error;
    }
}


interface GetFilteredProductsResponse {
    products: Product[];
    totalPages: number;
}
export const getFilteredProducts2 = async (filterType: FilterType, priority:PriorityType, search:string, page:number):Promise<GetFilteredProductsResponse> => {
    try {
        const response = await axios.post(API_URL, { query: makeQuery(filterType, priority,page) });
        const data = response?.data?.data;

        // Filtragem por termo de pesquisa
        let filteredProducts = data.allProducts;
        if (search) {
            return data?.data.data.allProducts.filter((product:Product) => product.name.toLowerCase().includes(search.toLowerCase()));
        }

        // Calcula o número total de páginas
        const totalItems = data._allProductsMeta.count;
        const totalPages = Math.ceil(totalItems / PER_PAGE)-1;

        return { 
            products: filteredProducts, 
            totalPages 
        };
    
    
    } catch (error) {
        throw error;
    }
        
}



export const getProductById = async (id:string):Promise<Product> => {
    try {
        const data = await axios.post(API_URL, { 
            query: `
            {
                Product(id: "${id}") {
                    id
                    name
                    description
                    price_in_cents
                    image_url
                    sales
                    created_at
                    category
                }
            }` 
        });
        return data?.data?.data?.Product;
    } catch (error) {
        throw error;
    }
}