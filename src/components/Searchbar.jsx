import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchText, onSearchChange, onSubmit }) => {
  return (
    <div className="search-container">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search for photos"
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button className="btn" type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
