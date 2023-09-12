import { useState } from "react";
import { BiSearch, BiCart } from "react-icons/bi";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
const Search = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //   const handleSearch = () => {
  //     // Implement your search logic here.
  //     // This is where you would typically make an API request to retrieve search results.
  //     console.log(`Searching for: ${searchQuery}`);
  //   };

  const handleCancelSearch = () => {
    setIsSearching(false);
    setSearchQuery("");
  };
  return (
    <div className="flex relative items-center">
      <Link
        className="me-3 text-white bg-gradient-to-r from-[#ED1F81] to-[#0C4DA1] px-4 py-1 rounded-full "
        to="/login"
      >
        Login
      </Link>

      {isSearching ? (
        <div className="flex items-center">
          <input
            className="outline-none border border-gray-400 absolute right-40"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button>
            <HiX onClick={handleCancelSearch} className="text-2xl" />
          </button>
        </div>
      ) : (
        <div>
          <span
            className="search-icon cursor-pointer"
            onClick={handleSearchClick}
          >
            <BiSearch className="text-2xl" />
          </span>
        </div>
      )}

      <Link className="ms-3 " to="/cart">
        <BiCart className="text-2xl"></BiCart>
      </Link>
    </div>
  );
};

export default Search;
