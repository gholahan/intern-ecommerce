import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { categorySearch } from '../services/products/product.service';
import ProductGrid from '../components/ProductGrid';
import Pagination from '../components/Pagination';
import { useState } from 'react';
import Spinner from '../components/Spinner';
 

const CategoryPage = () => {

     const limit = 24;
    const [page, setPage] = useState(1)

    const {categoryName} = useParams();

     const{data, isLoading} = useQuery({
     queryKey: ['category', categoryName],
     queryFn: () => categorySearch(categoryName as string, (page - 1) * limit, limit),
     enabled: !!categoryName,
  });

  const totalPages = data ? Math.ceil(data.total / data.limit) : 1;

  if(isLoading) return <Spinner loading={isLoading}/>
  return (
    <>
      <div className="text-center pt-6">
        <h1 className="text-3xl font-bold text-gray-800 capitalize">{categoryName}</h1>
        <p className="text-gray-600 mt-2">Explore products in this category</p>
      </div>

      <ProductGrid product={data?.products ?? []} explore={true} />

      {data?.products && data.products.length > 0 && (
        <Pagination
          page={page}
          setPage={setPage}
          hasNextPage={data.products.length === limit}
          totalPages={totalPages}
        />
      )}
    </>
  )
}

export default CategoryPage