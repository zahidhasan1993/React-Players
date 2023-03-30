import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-slate-600 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="">Home</a>
            </li>
            <li>
              <a className="">About</a>
            </li>
            <li>
              <a className="">Players</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-4xl text-white">MPL</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-white">Home</a>
          </li>
          <li>
            <a className="text-white">About</a>
          </li>
          <li>
            <a className="text-white">Players</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
