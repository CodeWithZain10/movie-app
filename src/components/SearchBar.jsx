import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearch } from "../redux/features/search/searchSlice";

const SearchBar = () => {
  const searchQuery = useSelector(selectSearch);
  const dispatch = useDispatch();

  const handleSearchQuery = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <input
      type="search"
      value={searchQuery}
      onChange={handleSearchQuery}
      className="w-[350px] h-10 bg-white rounded-lg p-4 outline-none text-black"
      placeholder="Search for movies..."
    />
  );
};

export default SearchBar;
