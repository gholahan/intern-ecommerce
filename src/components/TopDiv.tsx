import { useState } from 'react';
import topImage from '../assets/images/top-image.jpg';
import { useQuery } from '@tanstack/react-query';
import { categorySearch, fetchCategories} from '../services/products/product.service'

const TopDiv = () => {


    const { data: categories = [], isLoading: catLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });


    const [selectedCategory,setSelectedCategory] = useState<string | null>(null)
     const{data ,isLoading,error} = useQuery({
     queryKey: ['category', selectedCategory],
     queryFn: () => categorySearch(selectedCategory as string),
     enabled: !!selectedCategory ,
  });

  return (
   
      <div className="min-w-60 items-start gap-6">

        {/* Categories List */}
        <nav className="border-r border-gray-200">
          <ul className="flex flex-col gap-3 mt-4 font-medium">
             <span className='text-lg text-black font-extrabold '> Categories</span>
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className={`w-full text-left px-2 py-1 rounded hover:bg-gray-100 transition ${
                    selectedCategory === cat ? 'bg-gray-200 font-bold' : ''
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Top Image */}

      </div>
   
  );
};

export default TopDiv;