import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { HiX } from "react-icons/hi";
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
    <div>
      {isSearching ? (
        <div className="flex items-center">
          <input
            className="outline-none border border-gray-400"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
          />

          <button>
            <HiX onClick={handleCancelSearch} className="text-2xl"></HiX>
          </button>
        </div>
      ) : (
        <div>
          <span className="search-icon" onClick={handleSearchClick}>
            <BiSearch className="text-2xl"></BiSearch>
          </span>
        </div>
      )}
    </div>
  );
};

export default Search;
