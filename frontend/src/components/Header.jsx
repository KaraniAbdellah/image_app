import React from "react";
import {Link} from "react-router";

const Header = ({logSatate, setLogState}) => {

  return (
    <header className="flex justify-between items-center bg-sky-600 p-4 h-[80px]">
        <div className="logo">
            <h1 className="text-4xl font-semibold text-white">Imaginer</h1>
        </div>
        <div className="btns">
          <Link to="/login">
          <button className="button-82-pushable" role="button">
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text font-semibold">
                  {logSatate}
              </span>
          </button>
          </Link>
        </div>
    </header>
  );
};

export default Header;
