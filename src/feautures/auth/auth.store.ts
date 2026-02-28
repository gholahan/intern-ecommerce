import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Authstore {
    user: string |null;
    accessToken: string |null;
    refreshToken: string |null;
    setTokens: (accessToken :string | null, refreshToken :string | null )=>void;
    setUser: (userData :string | null )=>void;
    logout:() => void;
}


export const useAuthStore = create<Authstore>()(
persist((set) => ({
   user: null,
   accessToken: null,
   refreshToken: null,
   setUser: (userData)=>set({user:userData}),
   setTokens: (accessToken, refreshToken) => set({ accessToken: accessToken, refreshToken:refreshToken }),
   logout: () => set({accessToken:null, refreshToken:null, user:null})
}),{
    name: 'refreshToken'
   }
 )
);