import { ProductsFetchResponse } from "@/types/products-response";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const getProducts = async () => {
    try {
        const data = await axios.post(API_URL,
            {
                query:`query{
                        allProducts{
                            id
                            name
                            description
                            price_in_cents
                            image_url
                        }
                    }`
        });
        return data?.data?.data?.allProducts;
    } catch (error) {
        throw error;
    }
}