import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { categorySearch } from '../services/products/product.service';
import ProductGrid from '../components/ProductGrid';
import type { Product } from '../services/products/product.type';
 

const CategoryPage = () => {

    const {categoryName} = useParams()

     const{data ,isLoading,error} = useQuery({
     queryKey: ['category', categoryName],
     queryFn: () => categorySearch(categoryName as string),
     enabled: !!categoryName,
  });
  return (
    <>
     <ProductGrid product={data as Product[]} explore={true} />
    </>
  )
}

export default CategoryPage