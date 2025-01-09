import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <div className="h-20 w-full bg-gray-700 flex items-center justify-between">
        <div className="bg-gray-700 w-[70%] flex ml-8">
          <SearchBar />
          <FaSearch className="relative right-8 top-3" />
        </div>
        <div className="flex gap-3 mr-8 text-lg bg-gray-700 font-semibold">
          <Link to={"/"}>Home</Link>
          <Link to={"/favorite-movies"}>Favorite Movies</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
