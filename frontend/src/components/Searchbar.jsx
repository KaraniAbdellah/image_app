import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchText, onSearchChange, onSubmit }) => {
  
  return (
    <div className="search-container">
      <form className="" onSubmit={onSubmit}>
        <div className="brutalist-container w-full">
          <input
            value={searchText}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="TYPE HERE"
            className="brutalist-input smooth-type w-full"
            type="text"
          />
          <label className="brutalist-label">YOUR FAVORITE IMAGE</label>
        </div>
        <button className="button-82-pushable ml-6" role="button">
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text font-semibold">Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
