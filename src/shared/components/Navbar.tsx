import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { UserPen } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useFavoritesStore } from "../../feautures/favorites/favourite.store";
import SearchBar from "./SearchBar";
import { useCartStore } from "../../feautures/cart/cart.store";


const Navbar = () => {

  const favorites = useFavoritesStore(s=> s.favorites);
  const cart = useCartStore(s=> s.cart);

  const navClass = ({ isActive}:any) =>
    `text-base transition ${
      isActive ? "underline font-medium" : "hover:underline"
    }`;



  return (
    <header className="bg-white text-black border-b border-gray-200">
      <div className="mx-auto py-5.5 flex items-center justify-between px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Exclusive
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex gap-10 items-center text-gray-800">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
          <NavLink to="/signup" className={navClass}>Sign Up</NavLink>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">

          <SearchBar/> {/*searchBar*/}

          {/* Wishlist */}
          <Link to="/wishlist" className="relative">
            <CiHeart size={30} />
            <span className="absolute -right-1 -top-1 bg-red-700 text-white text-[10px] w-4 aspect-square rounded-full flex items-center justify-center">
              {favorites.length}
            </span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <BsCart3 size={26} />
             <span className="absolute -right-1 -top-1 bg-red-700 text-white text-[10px] w-4 aspect-square rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          </Link>

          {/* Profile dropdown */}
        <div className="relative group">
          <button className="rounded-full p-2">
            <UserPen size={24} />
          </button>

          <div
            className="
              absolute right-0 top-full mt-2
              opacity-0 scale-95 pointer-events-none
              group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
              transition duration-200 ease-out
            "
          >
            <div className="
              bg-white/30 backdrop-blur-lg
              shadow-lg rounded-lg
              w-36 p-3
              text-sm text-gray-800
              flex flex-col gap-2
            ">
              <Link to="/profile" className="hover:underline rounded px-2 py-1">
                Profile
              </Link>
              <Link to="/orders" className="hover:underline rounded px-2 py-1">
                Orders
              </Link>
              <Link
                to="/logout"
                className="hover:underline rounded px-2 py-1"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
