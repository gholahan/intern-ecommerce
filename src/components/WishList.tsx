import { useQueries } from "@tanstack/react-query"
import { useFavoritesStore } from "../store/favourite.store"
import ProductCard from "./ProuctCard"
import type { Product } from "../services/products/product.type"
import { eachProduct } from "../services/products/product.service"
import Spinner from "./Spinner"
import ProductGrid from "./ProductGrid"

const Wishlist = () => {
      const favorites: number[] = useFavoritesStore(s=>s.favorites);
      console.log(favorites.length)

    const likedProducts = useQueries({
        queries: favorites.map((id:number)=>({
            queryKey:['likedProduct' , id],
            queryFn:()=>eachProduct(id),
            enabled: !!id,
        }))
    });
    const products = likedProducts
    .map((q) => q.data)
    .filter(Boolean) as Product[];

  return (
    <div className="sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-16">
        <div className="relative flex justify-between">
           <p className="">Wishlist ({favorites.length})</p>
           <button className="absolute top-0 right-0 inline-flex items-center justify-center shadow-md px-12 py-4">
               Add all to bag
           </button>
        </div>
        <div>
          <ProductGrid product={products} explore={false}/>
        </div>
    </div>
  )
}

export default Wishlist