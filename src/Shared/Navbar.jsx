import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  className="border border-indigo-800 text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 hover:border-indigo-900"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="border ml-2 border-indigo-800 text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 hover:border-indigo-900"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={'/events'}
                  className="ml-2 border border-indigo-800 text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 hover:border-indigo-900"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className=" text-1xl  text-white bg-indigo-600 px-4 py-2 rounded transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105"
          >
            BookieT
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to={'/'}
                className="border border-indigo-800 text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 hover:border-indigo-900"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to={'/about'}
                className="ml-2 border border-indigo-800 text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 hover:border-indigo-900"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={'/events'}
                className="ml-2 border border-indigo-800 text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 hover:border-indigo-900"
              >
                Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
