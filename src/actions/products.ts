import { FilterType } from "@/types/filter-types";
import axios from "axios";
import { API_URL } from "@/constants/api";


const makeQuery = (filterType:FilterType):string =>{
    
    if(filterType== FilterType.ALL)
        return `query{
                        allProducts{
                            id
                            name
                            category
                            description
                            price_in_cents
                            sales
                            image_url     
                            created_at
                        }
        }`;
    return `query {
                allProducts(filter: {category:"${filterType}"}) {
                    id
                    name
                    category
                    description
                    price_in_cents
                    sales
                    image_url     
                    created_at
                }
    }`;
}
export const getProducts = async () => {
    try {
        const data = await axios.post(API_URL, { query: makeQuery(FilterType.ALL) } );
        return data?.data?.data?.allProducts;
    } catch (error) {
        throw error;
    }
}

export const getFilteredProducts = async (filterType: FilterType) => {
    try {
        const data = await axios.post(API_URL, { query: makeQuery(filterType) } );
        return data?.data?.data?.allProducts;
    } catch (error) {
        throw error;
    }
}