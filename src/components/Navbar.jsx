import React from "react";

const Navbar = ()=> {
    return(
        <nav className="navbar bg-gray-800 justify-between items-center flex px-6">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <a href="#Home" className="text-white hover:text-gray-200 font-bold text-3xl px-2">Home</a>
                <a href="#About" className="text-white hover:text-gray-200 font-bold text-3xl px-2">My Projects</a>
                <a href="#Projects" className="text-white hover:text-gray-200 font-bold text-3xl px-2">About</a>
            </div>
        </nav>
    );
}

export default Navbar;

//bg-gray-800 p-4 flex items-center justify-between