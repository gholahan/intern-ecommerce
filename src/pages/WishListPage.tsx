import { useFavoritesProducts } from "../feautures/favorites/useFavorites"
import ProductGrid from "../feautures/products/components/ProductGrid"

const Wishlist = () => {
   const{ favorites, likedProducts, isLoading, isError } = useFavoritesProducts();
         if (isError) {
          return (
              <p className="flex justify-center items-center h-64">
                Error Loading your wishlist items
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
          <ProductGrid product={likedProducts} explore={false} loading={isLoading}/>
        </div>
      </div>
    </div>
  )
}

export default Wishlist