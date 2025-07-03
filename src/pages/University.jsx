import React from "react";
import Api from "../api/apifetch";
import Footer from "../components/Footer";

const UniSearch =()=> {
    return(
        <div className="pt-24 px-6 w-full overflow-x-hidden">
            <Api />
            <Footer />
        </div>
    )
}

export default UniSearch;