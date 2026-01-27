import axios from "axios";
import type { Product } from "./product.type"

const API_URL:string = 'https://dummyjson.com/products'

export const fetchAllProduct = async (skip:number, limit:number):Promise<Product[]>=>{
  const res =await axios.get<{products:Product[]}>(`${API_URL}?skip=${skip}&limit=${limit}`)
  return res.data.products
};

export const eachProduct = async (id:number):Promise<Product> => {
  const res = await axios.get<Product>(`${API_URL}/${id}`);
  return res.data
}
export const fetchSearch = async (search:string):Promise<Product | Product[]> => {
   const res =await axios.get<{products:Product| Product[]}>(`https://dummyjson.com/products/search?q=${search}`)
   return res.data.products
}
export const categorySearch = async (category:string):Promise<Product[]> => {
   const res =await axios.get<{products:Product[]}>(`https://dummyjson.com/products/category/${category}`)
   return res.data.products
}

export const fetchCategoriesList = async (): Promise<string[]> => {
  const res = await axios.get<string[]>("https://dummyjson.com/products/category-list");
  return res.data; // directly the array of strings
};