import axios from "axios";
import type { Product } from "./product.type"

const API_URL:string = 'https://dummyjson.com/products'

export const fetchAllProduct = async ():Promise<Product[]>=>{
  const res =await axios.get<{products:Product[]}>(API_URL)
  return res.data.products
};

export const eachProduct = async (id:number):Promise<Product> => {
  const res = await axios.get<Product>(`${API_URL}/${id}`);
  return res.data
}
