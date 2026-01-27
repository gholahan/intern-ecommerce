import topImage from '../assets/images/top-image.jpg';
import ProductGrid from "../components/ProductGrid";
import { fetchAllProduct } from "../services/products/product.service";
import { useQuery} from "@tanstack/react-query";
import type { Product } from "../services/products/product.type";
import Spinner from "../components/Spinner";
import { useState } from 'react';

const HomePageGrd = () => {
    const limit = 24;
    const [page,setPage] = useState(1);

    const {data,isLoading, error} = useQuery<Product[]>({
    queryKey:['products',page],
    queryFn: ()=> fetchAllProduct((page - 1) * limit,limit),
    // keepPreviousData: true,
    });

    if(isLoading) return <Spinner/>
    if (error) return <p>Something went wrong</p>

  return (
    <div>
         <div className="mt-6 ml-6">
          <img
            src={topImage}
            alt="Top showcase"
            className="w-full h-auto object-cover shadow-md"
          />
        </div>

        <ProductGrid product={data} explore={false}/>

        {data && data.length > 0 && (
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={() => setPage(1)}
              className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded shadow-md hover:shadow-lg hover:bg-gray-200"
            >
              Reset
            </button>
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded shadow-md hover:shadow-lg hover:bg-gray-200 disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {Array.from({ length: 9 }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={`px-4 py-2 rounded border shadow-md hover:shadow-lg ${
                  page === pageNum
                    ? 'bg-gray-300 text-gray-900 border-gray-400'
                    : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'
                }`}
              >
                {pageNum}
              </button>
            ))}
            <button
              onClick={() => setPage(page + 1)}
              disabled={data.length < limit}
              className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded shadow-md hover:shadow-lg hover:bg-gray-200 disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}

    </div>
  )
}

export default HomePageGrd