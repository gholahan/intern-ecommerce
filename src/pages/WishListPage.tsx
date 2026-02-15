import { useFavoritesProducts } from "../feautures/favorites/useFavorites"
import ProductGrid from "../feautures/products/components/ProductGrid"
import Spinner from "../shared/components/Spinner"

const Wishlist = () => {
   const{ favorites, likedProducts, isLoading, isError } = useFavoritesProducts();

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
          <ProductGrid product={likedProducts} explore={false}/>
        </div>
      </div>
    </div>
  )
}

export default Wishlist