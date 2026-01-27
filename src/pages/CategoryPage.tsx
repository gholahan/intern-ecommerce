import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { categorySearch } from '../services/products/product.service';
import ProductGrid from '../components/ProductGrid';
import Pagination from '../components/Pagination';
import { useState } from 'react';
 

const CategoryPage = () => {

     const limit = 24;
    const [page, setPage] = useState(1)

    const {categoryName} = useParams();

     const{data ,isLoading,error} = useQuery({
     queryKey: ['category', categoryName],
     queryFn: () => categorySearch(categoryName as string, (page - 1) * limit, limit),
     enabled: !!categoryName,
  });

  const totalPages = data ? Math.ceil(data.total / data.limit) : 0
  return (
    <>
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