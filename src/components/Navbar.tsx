import SearchInput from "./SearchInput";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { UserPen } from 'lucide-react';
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="bg-white text-black shadow-[0_1px_2px_rgba(0,0,0,0.05)] mb-5">
      <div className="mx-auto pt-5 pb-3 flex items-center justify-between px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          Exclusive
        </div>

        {/* Nav links */}
        <ul className="hidden md:flex gap-10 items-center text-sm text-gray-800 ">
         <NavLink to={'/'} className="hover:underline"><p className="text-base">Home</p></NavLink>
          <NavLink to={''} className="hover:underline"><p className="text-base">Contact</p></NavLink>
          <NavLink to={''} className="hover:underline"><p className="text-base">About</p></NavLink>
          <NavLink to={''} className="hover:underline"><p className="text-base">SignUp</p></NavLink>
        </ul>      

        {/* Actions */}
        <div className="flex items-end gap-1 text-xl p-3">
           <SearchInput />
             
            <Link to={'/wishlist'} title="Wishlist" className="p-3"><CiHeart size={30} /></Link>
            <button title="Cart" className="p-3"><BsCart3 size={30}/></button>
            
             <div className="group relative">
              <button className="rounded-full p-3"><UserPen size={28}/></button>
              <div className="group-hover:block absolute hidden right-0 pt-4">
                 <div className="flex flex-col gap-3 dropdown bg-slate-100 px-2 py-4 w-36 rounded text-white">
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                 </div>
              </div>
             </div>

          {/* <button title="Profile">👤</button> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar