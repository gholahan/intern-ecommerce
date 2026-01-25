// import React from 'react';
// import { Heart, Eye } from 'lucide-react';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   rating: number;
//   reviews: number;
//   image: string;
//   isNew?: boolean;
//   colors?: string[];
//   hasAddToCart?: boolean;
// }

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   const renderStars = (rating: number) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <span
//         key={index}
//         className={`text-lg ${
//           index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
//         }`}
//       >
//         ★
//       </span>
//     ));
//   };

//   return (
//     <div className="bg-gray-50 rounded-lg p-4 relative group">
//       {/* New Badge */}
//       {product.isNew && (
//         <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded text-xs font-semibold z-10">
//           NEW
//         </div>
//       )}

//       {/* Action Icons */}
//       <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
//         <button className="bg-white rounded-full p-2 hover:bg-gray-100 transition">
//           <Heart className="w-5 h-5" />
//         </button>
//         <button className="bg-white rounded-full p-2 hover:bg-gray-100 transition">
//           <Eye className="w-5 h-5" />
//         </button>
//       </div>

//       {/* Product Image Area */}
//       <div className="w-full h-48 bg-white rounded-lg mb-4 flex items-center justify-center">
//         <div className="text-gray-400 text-sm">Product Image</div>
//       </div>

//       {/* Add to Cart Button (if applicable) */}
//       {product.hasAddToCart && (
//         <button className="w-full bg-black text-white py-3 rounded font-medium hover:bg-gray-800 transition mb-4">
//           Add To Cart
//         </button>
//       )}

//       {/* Product Name */}
//       <h3 className="font-medium text-base mb-2">{product.name}</h3>

//       {/* Price and Rating */}
//       <div className="flex items-center gap-2 mb-2">
//         <span className="text-red-500 font-semibold text-lg">
//           ${product.price}
//         </span>
//         <div className="flex items-center">
//           {renderStars(product.rating)}
//         </div>
//         <span className="text-gray-500 text-sm">({product.reviews})</span>
//       </div>

//       {/* Color Options */}
//       {product.colors && product.colors.length > 0 && (
//         <div className="flex gap-2">
//           {product.colors.map((color, index) => (
//             <button
//               key={index}
//               className={`w-5 h-5 rounded-full border-2 ${
//                 index === 0 ? 'border-black' : 'border-transparent'
//               }`}
//               style={{ backgroundColor: color }}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // Example Usage with Product Grid
// const ProductGrid: React.FC = () => {
//   const products: Product[] = [
//     {
//       id: 1,
//       name: 'Breed Dry Dog Food',
//       price: 100,
//       rating: 3,
//       reviews: 35,
//       image: '',
//     },
//     {
//       id: 2,
//       name: 'CANON EOS DSLR Camera',
//       price: 360,
//       rating: 4,
//       reviews: 95,
//       image: '',
//       hasAddToCart: true,
//     },
//     {
//       id: 3,
//       name: 'ASUS FHD Gaming Laptop',
//       price: 700,
//       rating: 5,
//       reviews: 325,
//       image: '',
//     },
//     {
//       id: 4,
//       name: 'Curology Product Set',
//       price: 500,
//       rating: 4,
//       reviews: 145,
//       image: '',
//     },
//     {
//       id: 5,
//       name: 'Kids Electric Car',
//       price: 960,
//       rating: 5,
//       reviews: 65,
//       image: '',
//       isNew: true,
//       colors: ['#DC2626', '#000000'],
//     },
//     {
//       id: 6,
//       name: 'Jr. Zoom Soccer Cleats',
//       price: 1160,
//       rating: 5,
//       reviews: 35,
//       image: '',
//       colors: ['#FACC15', '#DC2626'],
//     },
//     {
//       id: 7,
//       name: 'GP11 Shooter USB Gamepad',
//       price: 660,
//       rating: 4.5,
//       reviews: 55,
//       image: '',
//       isNew: true,
//       colors: ['#000000', '#DC2626'],
//     },
//     {
//       id: 8,
//       name: 'Quilted Satin Jacket',
//       price: 660,
//       rating: 4.5,
//       reviews: 55,
//       image: '',
//       colors: ['#064E3B', '#DC2626'],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white p-8">
//       {/* Header */}
//       <div className="mb-8">
//         <div className="flex items-center gap-3 mb-4">
//           <div className="w-1 h-8 bg-red-500 rounded"></div>
//           <span className="text-red-500 font-semibold">Our Products</span>
//         </div>
//         <div className="flex items-center justify-between">
//           <h1 className="text-4xl font-bold">Explore Our Products</h1>
//           <div className="flex gap-2">
//             <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
//               <span className="text-xl">←</span>
//             </button>
//             <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
//               <span className="text-xl">→</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>

//       {/* View All Button */}
//       <div className="flex justify-center">
//         <button className="bg-red-500 text-white px-12 py-4 rounded hover:bg-red-600 transition font-medium">
//           View All Products
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductGrid;