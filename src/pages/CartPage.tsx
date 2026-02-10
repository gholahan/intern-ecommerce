import CartProductRow from "../components/CartProductRow"
import { useCartStore } from "../store/cart.store"
import { useQueries } from "@tanstack/react-query"
import type { Product } from "../types/product.type"
import { eachProduct } from "../services/products/product.service"

const CartPage = () => {

    const {cart} = useCartStore()
    const cart_Products = cart.map(items=> items.id);
    
    const cartProducts = useQueries({
            queries: cart_Products.map((id:number)=>({
                queryKey:['cartProduct' , id],
                queryFn:()=>eachProduct(id),
                enabled: !!id,
            }))
        });
        const products = cartProducts
        .map((q) => q.data)
        .filter(Boolean) as Product[];
    
  return (
    <> 
    <p className="my-18">
      Home / <span className="text-gray-500">cart</span>
    </p>

     <header className="grid grid-cols-4 font-semibold text-black py-6 px-5 bg-white shadow-sm rounded-sm">
      <div>Product</div>
      <div>Price</div>
      <div>Quantity</div>
      <div>Subtotal</div>
     </header>
    {
        products.length > 0 ? (
          <CartProductRow products={products} />
        ) : (
          <p className="text-center">You have no products. <span className="underline text-red-400 hover:text-red-700 cursor-pointer">Move to home</span></p>
        )
    }

    <div className="flex justify-between mt-8">
      <button className="text-black font-medium py-3.5 px-8 border border-gray-300">
       Return to shop
      </button>
      
      <button className="text-black font-medium py-3.5 px-9 border border-gray-300">
        Add to cart
      </button>
    </div >

    <div className="flex items-center justify-center ">
      <p className="w-8 h-0.5 md:w-11 bg-[#b20f0f]"></p>
    </div>

    </>
  )
}

export default CartPage