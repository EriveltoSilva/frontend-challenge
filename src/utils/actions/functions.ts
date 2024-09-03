import { FilterType } from "@/types/filter-types"
import { PriorityType } from "@/types/priority-types"
import { PER_PAGE } from "@/constants/constants"


function getFieldByPriority(priority: PriorityType){
    if(priority === PriorityType.NEWEST) return {field: "created_at", order: "ASC"}
    if(priority === PriorityType.PRICE_HIGH_TO_LOW)  return {field: "price_in_cents", order: "DSC"}
    if(priority === PriorityType.PRICE_LOW_TO_HIGH) return {field: "price_in_cents", order: "ASC"}
    return {field: "sales", order: "DSC"}
}

export const makeQuery = (filterType:FilterType, priority:PriorityType, page:number):string =>{
    if(filterType === FilterType.ALL && priority === PriorityType.POPULARITY)
        return `query {
            allProducts(page:${page}, perPage:${PER_PAGE}, sortField: "sales", sortOrder: "DSC") {
                id
                name
                category
                description
                price_in_cents
                sales
                image_url     
                created_at
            }
            _allProductsMeta {
                count
            }
        }`
    const sortConfig = getFieldByPriority(priority);
    return `query{
        allProducts(page:${page}, perPage:${PER_PAGE}, sortField:"${sortConfig.field}", sortOrder:"${sortConfig.order}", ${filterType===FilterType.ALL ?'': `filter: { category: "${filterType}"}`}){
          id
          name
          description
          price_in_cents
          image_url
          sales
          created_at
          category
        }
        _allProductsMeta {
            count
        }
      }`;
}