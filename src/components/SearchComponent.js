// SearchComponent.js

import { useState, useEffect, useRef } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchComponent = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  const handleSearchClick = () => {
    onSearch(search);
  };

  return (
    <div className="flex items-center justify-center w-full absolute top-4">
      <div className="flex items-center bg-transparent border-gray-300 h-[36px] top-[22px] left-[493px] rounded-[6px] border-2 justify-between p-[6px]">
        <input
          type="text"
          className="flex-grow outline-none bg-transparent text-white font-normal text-xl"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={searchInput}
        />
        <button
          className="flex items-center justify-center bg-transparent text-white"
          onClick={handleSearchClick}
        >
          <BiSearchAlt2 size={25} />
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
