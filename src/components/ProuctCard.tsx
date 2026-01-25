import type { Product } from "../services/products/product.type";
import {CiHeart} from 'react-icons/ci'
import {Eye, ShoppingCart} from 'lucide-react'
import { useFavoritesStore } from "../store/favourite.store";
import { Apple } from 'lucide-react';
import { Star } from 'lucide-react';


interface ProductCardProps {
  product: Product;

}

const ProductCard: React.FC<ProductCardProps>= ({ product }) => {

  const discountPrice = Math.round(product.price  - (product.price * (product.discountPercentage/100)));

  const {addFavorite,removeFavorite,isFavorite} = useFavoritesStore();
  const liked = isFavorite(product.id);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      >
        <Star/>
      </span>
    ));
  };

  const favourite = useFavoritesStore(s=>s.favorites)
  console.log(favourite)

  return (
    
    <div className="rounded-lg p-4 group mt-7">
     <div className="relative bg-gray-100 mb-5 rounded-sm group">
      {/* Action Icons */}
       <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
        <button
         onClick={()=>liked ? removeFavorite(product.id) :addFavorite(product.id) }
         className="bg-white rounded-full p-2 hover:bg-gray-100 transition ">
          {liked ? <Apple/> : <CiHeart size={25}/> }
        </button>
        <button  className="bg-white rounded-full p-2 hover:bg-gray-100 transition ">
            <Eye size={25}/>
          </button>
      </div>
      <div className="absolute top-3 left-3 z-10 bg-[#DB4444] text-white px-2 py-2 rounded-md text-xs">
        -{product.discountPercentage}%
      </div>

      {/* Product Image Area */}
      <div className="w-full h-auto rounded-lg mb-4 flex items-center justify-center">
        <div className="text-gray-400 text-sm">
          <img src={product.thumbnail} alt="" />
        </div>
      </div>
      {/* add to cart button */}
      <button
          //  onClick={()=>}
            className="bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0: w-full text-center hover:bg- text-white px-4 py-2 rounded-lg flex justify-center items-center gap-2 transition-all duration-200"
          >
            <ShoppingCart size={18} />
            <span className="text-sm font-medium">Add To Cart</span>
        </button>
      {/* Product Name */}
     </div>
      <h3 className="font-medium text-base mb-2">{product.title}</h3>

      {/* Price and Rating */}
      {/* <div className="flex items-center gap-2 mb-2"> */}
       <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-destructive text-[#DB4444]">${discountPrice}</span>
          <span className="text-sm text-muted-foreground line-through">
           ${product.price}
          </span>
        </div>
        <div className="flex items-center">
          {renderStars(product.rating)}
        </div>
        {/* <span className="text-gray-500 text-sm">({product.reviews})</span> */}
      {/* </div> */}
    </div>
  );
};

export default ProductCard;