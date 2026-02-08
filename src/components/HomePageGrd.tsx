import topImage from '../assets/images/top-image.jpg';
import ProductGrid from "../components/ProductGrid";
import { fetchAllProduct } from "../services/products/product.service";
import { useQuery} from "@tanstack/react-query";
import type { fetchAllProductRes } from '../types/product.type';
import Spinner from "../components/Spinner";
import { useState } from 'react';
import Pagination from './Pagination';

const HomePageGrd = () => {
  const limit = 24;
  const [page, setPage] = useState(1);
  
  const { data , isLoading, error } = useQuery<fetchAllProductRes>({
    queryKey: ['products', page],
    queryFn: () => fetchAllProduct((page - 1) * limit, limit),
  });

  const totalPages = data?.products ? Math.ceil(data.total / limit) : 1;

  if (isLoading) return <Spinner loading={isLoading} />;
  if (error) return <p>Something went wrong</p>;

  return (
    <div>
      <div className="mt-6 ml-6">
        <img
          src={topImage}
          alt="Top showcase"
          className="w-full h-auto object-cover shadow-md"
        />
      </div>

      <ProductGrid product={data?.products ?? []} explore={false} />

      {data?.products && data.products.length > 0 && (
        <Pagination
          page={page}
          setPage={setPage}
          hasNextPage={data.products.length === 24}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default HomePageGrd;
