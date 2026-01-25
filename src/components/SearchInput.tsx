import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <div className="relative w-full max-w-md bg-blue-50 ">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-full  py-3 pl-5 pr-12 text-sm text-gray-700 placeholder-gray-400 outline-none"
      />

      {/* Search icon */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
        <FaSearch/>
      </div>
    </div>
  );
};

export default SearchInput;
