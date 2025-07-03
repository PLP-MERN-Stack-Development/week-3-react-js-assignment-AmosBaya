import React from "react";
import { Link } from "react-router-dom";


const Navbar = ()=> {
    return(
    <nav className="w-full bg-gray-800 fixed top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-center items-center px-6 py-4">
        <div className="flex space-x-8">
          <Link to="/">
            <span className="text-white hover:text-teal-400 font-bold text-lg transition">
              Home
            </span>
          </Link>
          <Link to="/TaskManager">
            <span className="text-white hover:text-teal-400 font-bold text-lg transition">
              Task Manager
            </span>
          </Link>
          <Link to="/UniSearch">
            <span className="text-white hover:text-teal-400 font-bold text-lg transition">
              UniSearch
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

//bg-gray-800 p-4 flex items-center justify-between