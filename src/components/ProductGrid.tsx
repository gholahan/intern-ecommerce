import { useQuery } from "@tanstack/react-query";
import { fetchAllProduct } from "../services/products/product.service";
import type { Product } from "../services/products/product.type";
import ProductCard from "./ProuctCard";
import Spinner from "./Spinner";

interface ProductGridProp{
    product: Product[],
    explore:boolean
}

const ProductGrid = ({product,explore}:ProductGridProp) => {

    // if(isLoading) return <Spinner/>;
    // if(error) return <div>we encountered an error...</div>;
  return (
    <div className="min-h-screen bg-white p-8 mt-20">
      {/* Header */}
      {/* <div className="mt-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-red-500 rounded"></div>
          <span className="text-red-500 font-semibold">Our Products</span>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Explore Our Products</h1>
          <div className="flex gap-2">
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <span className="text-xl">←</span>
            </button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div> */}

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 w-full">
        {product?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Button */}
      {explore ?<div className="flex justify-center">
        <button className="bg-red-500 text-white px-12 py-4 rounded hover:bg-red-600 transition font-medium">
          View All Products
        </button>
      </div> : ''
      }
    </div>
  );
}

export default ProductGrid