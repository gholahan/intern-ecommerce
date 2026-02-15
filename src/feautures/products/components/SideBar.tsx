import { Link } from 'react-router-dom';
import { useCategories } from '../hooks/useCategories';

const SideBar = () => {
   const {categories} = useCategories();
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
      </div>
   
  );
};

export default SideBar;