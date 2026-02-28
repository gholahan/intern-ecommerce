import { toast } from "react-toastify";
import api from "../app/axios"
import { useAuthStore } from "./auth.store"
import type { AuthRes } from "./type";
import axios from "axios";

//login
export const login = async (username: string, password: string) => {
  const store = useAuthStore.getState();

  try {
    const { data } = await api.post("/auth/login", { username, password });

    store.setTokens(data.accessToken, data.refreshToken);

    const { data: user } = await api.get("/auth/me");
    store.setUser(user);

    return data;

  } catch (error: any) {
    store.setTokens(null, null);
    const message =
      error.code === "ERR_NETWORK"
        ? "Connect to internet"
        : error.response?.data?.message || "Login failed";
    toast.error(message);
    throw error;
  }
};


// refresh
export const refresh = async (refreshToken:string):Promise<AuthRes> => {
    const { data } = await axios.post<AuthRes>("https://dummyjson.com/auth/refresh", { refreshToken });
  return data
}