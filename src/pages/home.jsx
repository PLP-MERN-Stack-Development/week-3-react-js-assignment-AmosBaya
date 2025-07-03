import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";


const Home = ()=>{
    return (
        <div className="w-full min-h-[calc(100vh-6rem)] bg-slate-50 flex items-center justify-center px-4 overflow-x-hidden">
            <div className="flex flex-col items-center text-center max-w-2xl gap-4 mt-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-700">
                    WELCOME TO MY APP
                </h1>
        
                <p className="text-gray-500 italic">
                    Built for doers, dreamers, and curious minds 🎯
                </p>

                <ul className="text-gray-600 space-y-1 mt-2 text-md font-bold">
                    <li>Create, Delete and Manage your tasks</li>
                    <li>Discover cool universities around the world</li>
                </ul>
                 
                <Link to="/TaskManager">
                
                    <Button variant='secondary' className="mt-6 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
                        Get Started Now
                    </Button>
                </Link>
            </div>

            <Footer />
        </div>
     );
}
// "
export default Home;