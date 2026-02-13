import CartProductRow from "../components/CartProductRow"
import Spinner from "../components/Spinner"
import { useCartStore } from "../store/cart.store"
import { useQueries } from "@tanstack/react-query"
import type { Product } from "../types/product.type"
import { eachProduct } from "../services/products/product.service"
import { Link } from "react-router-dom"

const CartPage = () => {

    const {cart} = useCartStore()
    const cart_Products = cart.map(items=> items.id);
    
    const cartProduct = useQueries({
            queries: cart_Products.map((id:number)=>({
                queryKey:['cartProduct' , id],
                queryFn:()=>eachProduct(id),
                enabled: !!id,
            }))
        });
        
        const cartProducts = cartProduct
        .map((q) => q.data)
        .filter(Boolean) as Product[];
        const isLoading = cartProduct.some((q) => q.isLoading || q.isFetching); //loading state
        const isError = cartProduct.some((q => q.isError )) // error state 


        const subtotal = cart.reduce((acc, p) => {
          const prod  = cartProducts.find(items => items.id === p.id)
          if (!prod) return acc
          const price =  Math.round(prod.price  - (prod.price * (prod.discountPercentage/100)));
          return acc + price * p.quantity 
        }, 0)

        const shipping = 0;
        const total = subtotal + shipping
    
        if (isLoading) {
          return (
            <>
              <p className="my-18">
                Home / <span className="text-gray-500">cart</span>
              </p>
              <div className="flex justify-center items-center h-64">
                <Spinner loading={isLoading} />
              </div>
            </>
          )
        }
         if (isError) {
          return (
            <>
              <p className="my-18">
                Home / <span className="text-gray-500">cart</span>
              </p>
              <div className="flex justify-center items-center h-64">
                Error Loading your cart items
              </div>
            </>
          )
        }

  return (
    <> 
    <p className="my-18">
      <Link to='/'>Home</Link> / <span  className="text-gray-500">cart</span>
    </p>

     <header className="grid grid-cols-4 font-semibold text-black py-6 px-5 bg-white shadow-sm rounded-sm">
      <div>Product</div>
      <div>Price</div>
      <div>Quantity</div>
      <div>Subtotal</div>
     </header>
    {
        cartProducts.length > 0 ? (
          <CartProductRow products={ cartProducts} />
        ) : (
          <p  className="text-center">You have no products. <Link to='/' className="underline text-red-400 hover:text-red-700 cursor-pointer">Move to home</Link></p>
        )
    }

    <div className="flex justify-between mt-8">
      <button className="text-black font-medium py-3.5 px-8 border border-gray-300 rounded">
       Return to shop
      </button>
      
      <button className="text-black font-medium py-3.5 px-9 border border-gray-300 rounded">
        Add to cart
      </button>
    </div >
<div className="flex justify-between items-start mt-24">

  <div className="flex gap-3 ">
    <input
      type="text"
      placeholder="coupon code"
      className="text-gray-600 py-3.5 px-6 border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-gray-800"
    />
    <button className="text-white bg-[#DB4444] hover:bg-[#E07575] py-3.5 px-6 rounded">
      Apply coupon
    </button>
  </div>

  <div className="ml-auto w-120 rounded-lg border border-gray-500 p-7">
    
    <h2 className="text-3xl font-semibold text-black mb-10">
      Cart Total
    </h2>

    <div className="flex justify-between text-xl mb-4">
      <span>Subtotal:</span>
      <span>{`$${subtotal.toFixed(2)}`}</span>
    </div>

    <hr className="border-gray-400 mb-6" />

    <div className="flex justify-between text-xl mb-4">
      <span>Shipping:</span>
      <span>{shipping === 0 ? "Free" :''}</span>
    </div>

    <hr className="border-gray-400 mb-6" />

    <div className="flex justify-between text-xl font-medium mb-8">
      <span>Total:</span>
      <span>{`$${total.toFixed(2)}`}</span>
    </div>

    <div className="flex justify-center">
      <Link to={'*'} className="bg-red-500 hover:bg-red-600 text-white px-14 py-4 rounded-md text-lg font-medium transition active:scale-95">
        Procees to checkout
      </Link>
    </div>

  </div>
</div>


    </>
  )
}

export default CartPage