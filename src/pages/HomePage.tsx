import ProductGrid from "../components/ProductGrid"
import { fetchAllProduct } from "../services/products/product.service";
import { useQuery} from "@tanstack/react-query";
import type { Product } from "../services/products/product.type";
import Spinner from "../components/Spinner";

const HomePage = () => {
  const {data,isLoading, error} = useQuery<Product[]>({
    queryKey:['products'],
    queryFn: fetchAllProduct
    });
    if(isLoading) return <Spinner/>
    if(error) return <p>..ahahah</p>
  return (
    <>
     <ProductGrid product={data} />
    </>
  )
}

export default HomePage