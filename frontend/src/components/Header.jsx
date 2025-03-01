import React from "react";
import {Link} from "react-router";

const SearchBar = () => {
  return (
    <header className="flex justify-between items-center bg-gray-200 p-4
    rounded-md h-[80px]">
        <div className="logo">
            <h1 className="text-4xl font-semibold">Imaginer</h1>
        </div>
        <div className="btns">
          <Link to="/login">
          <button class="button-82-pushable" role="button">
              <span class="button-82-shadow"></span>
              <span class="button-82-edge"></span>
              <span class="button-82-front text font-semibold">
                  Login
              </span>
          </button>
          </Link>
        </div>
    </header>
  );
};

export default SearchBar;
