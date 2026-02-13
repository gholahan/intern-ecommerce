import { useQueries } from "@tanstack/react-query"
import { useFavoritesStore } from "../store/favourite.store"
import type { Product } from "../types/product.type"
import { eachProduct } from "../services/products/product.service"
import ProductGrid from "../components/ProductGrid"
import Spinner from "../components/Spinner"

const Wishlist = () => {
      const favorites: number[] = useFavoritesStore(s=>s.favorites);

  const likedProduct = useQueries({
        queries: favorites.map((id:number)=>({
            queryKey:['likedProduct' , id],
            queryFn:()=>eachProduct(id),
            enabled: !!id,
        }))
    });
    const likeProducts = likedProduct
    .map((q) => q.data)
    .filter(Boolean) as Product[];

    const isLoading = likedProduct.some((q) => q.isLoading || q.isFetching); //loading state
    const isError = likedProduct.some((q => q.isError )) // error state

     if (isLoading) {
          return (
              <div className="flex justify-center items-center h-64">
                <Spinner loading={isLoading} />
              </div>
          )
        }
         if (isError) {
          return (
              <p className="flex justify-center items-center h-64">
                Error Loading your cart items
              </p>
          )
        }
  
  return (
    <div className="mt-6">
      <div>
          <div className="relative flex justify-between">
           <p className="">Wishlist ({favorites.length})</p>
           <button className="absolute top-0 right-0 inline-flex items-center justify-center shadow-md px-12 py-4">
               Add all to bag
           </button>
          </div>
        <div>
          <ProductGrid product={likeProducts} explore={false}/>
        </div>
      </div>
    </div>
  )
}

export default Wishlist