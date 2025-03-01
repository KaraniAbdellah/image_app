import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchText, onSearchChange, onSubmit }) => {
  return (
    <div className="search-container">
      <form className="" onSubmit={onSubmit}>
        <div class="brutalist-container w-full">
          <input
            value={searchText}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="TYPE HERE"
            class="brutalist-input smooth-type w-full"
            type="text"
          />
          <label class="brutalist-label">YOUR FAVORITE IMAGE</label>
        </div>

        <button class="button-82-pushable ml-6" role="button">
          <span class="button-82-shadow"></span>
          <span class="button-82-edge"></span>
          <span class="button-82-front text font-semibold">Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
