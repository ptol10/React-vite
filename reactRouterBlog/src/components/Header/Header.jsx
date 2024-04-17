import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-purple-300 w-auto p-3 font-sans flex justify-between item-center m-auto max-w-85">
        <div className="text-2xl contents content-center">
          <h1 to="/" className="flex items-center ml-12">
            iBlog
          </h1>
          <ul className="flex item-center ml-px mr-96 space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <form className="flex justify-between items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="p-0.5 border-black border-2 rounded-lg"
          ></input>
          <button
            type="Submit"
            className="px-4 py-1 rounded-lg border-2 border-black bg-slate-300 hover:bg-purple-800 hover:text-white"
          >
            Search
          </button>
        </form>
      </header>
    </>
  );
}

export default Header;
