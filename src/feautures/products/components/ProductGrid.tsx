import type { Product } from "../types/product";
import ProductCard from "./ProuctCard";
import ProductCardSkeleton from "../skeleton/productCardskelton";

interface ProductGridProp{
    product: Product[],
    explore:boolean,
    loading:boolean
}

const ProductGrid = ({product,explore,loading}:ProductGridProp) => {
  return (
    <div className="min-h-screen bg-white p-8 mt-13">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : product?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>

      {/* View All Button */}
      {explore ? <div className="flex justify-center">
        <button className="bg-red-500 text-white px-12 py-4 rounded hover:bg-red-600 transition font-medium">
          View All Products
        </button>
      </div> : ''
      }
    </div>
  );
}

export default ProductGrid