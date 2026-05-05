import axios from "axios";
import type { OrderPayload, checkoutRes } from "../types";

export const checkoutApi = axios.create({
  baseURL: "https://e-commerce-webapp-uui3.onrender.com" // or payments URL if separate
});

export const postCheckout = async (payload:OrderPayload): Promise<checkoutRes> => {
    const {data} = await checkoutApi.post<checkoutRes>("/initialize-payment", payload)
    return data
}