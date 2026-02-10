import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: number;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  increaseCount : (id:number) => void;
  decreaseCount : (id:number) => void;
  setQuantity : (i:number, quantity:number) => void;
  added: (id: number) => boolean;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (id) =>
        set((state) => {
          toast.info("Added to cart");
          return {
            cart: [...state.cart, { id, quantity: 1 }],
          };
        }),

      removeFromCart: (id) =>
        set((state) => {
          toast.info("Removed from cart");
          return {
            cart: state.cart.filter(item => item.id !== id),
          };
        }),

        increaseCount: (id) => set((state)=>{
          return{
            cart: state.cart.map(items => items.id === id ? {...items, quantity:items.quantity + 1} : items)
          }  
        }),

        decreaseCount: (id) => set((state)=>{
         return{
            cart: state.cart.map(items => items.id === id ? {...items, quantity:items.quantity - 1} : items)
          }
        }),

        setQuantity: (id , quantity) => set((state)=>{
         const cart = state.cart.map(items => items.id === id ? {...items, quantity} : items);
         return {cart: cart}
        }),

      added: (id) =>
        get().cart.some(item => item.id === id),
    }),
    {
      name: "cart",
    }
  )
);
