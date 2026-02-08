import ProductGrid from "../components/ProductGrid";
import Pagination from '../components/Pagination';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchSearch } from '../services/products/product.service';
import type { fetchAllProductRes } from '../types/product.type';
import { useState } from 'react';
import Spinner from "../components/Spinner";

const SearchPage = () => {
  const limit = 24;
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const query = searchParams.get('q') ?? '';

  const { data, isLoading, isError } = useQuery<fetchAllProductRes>({
    queryKey: ['search', query, page],
    queryFn: () => fetchSearch(query, (page - 1) * limit, limit),
    enabled: query.length > 0,
  });

  const totalPages = data?.products ? Math.ceil(data.products.length / limit) : 1;

  if (!query) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No search query provided</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <Spinner loading={isLoading}/>
      </div>
    );
  }

  if (isError || !data?.products) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Error loading search results</p>
      </div>
    );
  }

  return (
    <div> 
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Search Results for "<span className="text-blue-600">{query}</span>"
        </h2>
        {data.products.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">No products found</p>
            <p className="text-sm mt-2">Try searching with different keywords</p>
          </div>
        ) : (
          <>
            <ProductGrid product={data.products} explore={false} />
            
            {data.products.length > 0 && (
              <Pagination
                page={page}
                setPage={setPage}
                hasNextPage={data.products.length === 24}
                totalPages={totalPages}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;