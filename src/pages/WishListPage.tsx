import { useQueries } from "@tanstack/react-query"
import { useFavoritesStore } from "../store/favourite.store"
import type { Product } from "../types/product.type"
import { eachProduct } from "../services/products/product.service"
import ProductGrid from "../components/ProductGrid"

const Wishlist = () => {
      const favorites: number[] = useFavoritesStore(s=>s.favorites);

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
    <div className="mt-6">
        <div>
          <div className="relative flex justify-between">
           <p className="">Wishlist ({favorites.length})</p>
           <button className="absolute top-0 right-0 inline-flex items-center justify-center shadow-md px-12 py-4">
               Add all to bag
           </button>
        </div>
        <div>
          <ProductGrid product={products} explore={false}/>
          {/* {data?.products && data.products.length > 0 && (
          <Pagination
          page={page}
          setPage={setPage}
          hasNextPage={data.products.length === 24}
          totalPages={totalPages}
        />
        )} */}
        </div>
        </div>
    </div>
  )
}

export default Wishlist