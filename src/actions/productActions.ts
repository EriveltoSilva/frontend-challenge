import { FilterType } from "@/types/filter-types";
import axios from "axios";
import { API_URL } from "@/constants/api";
import { Product } from "@/types/product-types";
import { PriorityType } from "@/types/priority-types";


function getFieldByPriority(priority: PriorityType){
    if(priority === PriorityType.NEWEST) return {field: "created_at", order: "ASC"}
    if(priority === PriorityType.PRICE_HIGH_TO_LOW)  return {field: "price_in_cents", order: "DSC"}
    if(priority === PriorityType.PRICE_LOW_TO_HIGH) return {field: "price_in_cents", order: "ASC"}
    return {field: "sales", order: "DSC"}
}

const makeQuery = (filterType:FilterType, priority:PriorityType):string =>{
    if(filterType === FilterType.ALL && priority === PriorityType.POPULARITY)
        return `query {
            allProducts(sortField: "sales", sortOrder: "DSC") {
                id
                name
                category
                description
                price_in_cents
                sales
                image_url     
                created_at
                }
        }`
    const sortConfig = getFieldByPriority(priority);
    return `query{
        allProducts(sortField:"${sortConfig.field}", sortOrder:"${sortConfig.order}", ${filterType===FilterType.ALL ?'': `filter: { category: "${filterType}"}`}){
          id
          name
          description
          price_in_cents
          image_url
          sales
          created_at
          category
        }
      }`;
}


export const getFilteredProducts = async (filterType: FilterType, priority:PriorityType, search:string):Promise<Product[]> => {
    try {
        const data = await axios.post(API_URL, { query: makeQuery(filterType, priority) } );
        if (search)
            return data?.data.data.allProducts.filter((product:Product) => product.name.toLowerCase().includes(search.toLowerCase()));
        return data?.data?.data?.allProducts;
    } catch (error) {
        throw error;
    }
}