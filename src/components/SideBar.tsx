import { useQuery } from '@tanstack/react-query';
import {fetchCategoriesList} from '../services/products/product.service'
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const SideBar = () => {


    const { data: categories = [], isLoading: catLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategoriesList,
  });
   if (catLoading) return <Spinner/>

  return (
   
      <div className="min-w-60 items-start gap-6">

        {/* Categories List */}
        <nav className="border-r border-gray-200">
          <ul className="flex flex-col gap-3 mt-4 font-medium">
             <span className='text-lg text-black font-extrabold '> Categories</span>
            {categories.map((cat) => (
              <li key={cat}>
                <Link
                  to={`/category/${cat}`}
                  className={`w-full text-left px-2 py-1 rounded hover:bg-gray-100 transitio}`}
                  
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Top Image */}

      </div>
   
  );
};

export default SideBar;