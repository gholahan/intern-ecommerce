import axios from "axios";
import type { Product } from "./types/product";
import type { ProductRes } from "./types/productRes";

const API_URL:string = 'https://dummyjson.com/products'

export const fetchAllProduct = async (skip:number, limit:number):Promise<ProductRes>=>{
  const res =await axios.get<ProductRes>(`${API_URL}?skip=${skip}&limit=${limit}`)
  return res.data
};

export const eachProduct = async (id:number):Promise<Product> => {
  const res = await axios.get<Product>(`${API_URL}/${id}`);
  return res.data
}
export const getSearch = async (search:string,skip:number, limit:number):Promise<ProductRes> => {
   const res =await axios.get<ProductRes>(`https://dummyjson.com/products/search?q=${search}&skip=${skip}&limit=${limit}`)
   return res.data
}
export const getProductByCategory = async (category:string,skip:number, limit:number):Promise<ProductRes> => {
   const res =await axios.get<ProductRes>(`https://dummyjson.com/products/category/${category}?skip=${skip}&limit=${limit}`)
   return res.data
}

export const getCategories = async (): Promise<string[]> => {
  const res = await axios.get<string[]>("https://dummyjson.com/products/category-list");
  return res.data; // directly the array of strings
};