import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar/Navbar";
function Home(){
    return(
        <div>
            <Navbar/>
            <h1 className="text-center">Welcome to Sweet Shop</h1>
            <br />
            <img  width = "100%" height ="80%" src = {"https://media.architecturaldigest.com/photos/55e7658d302ba71f3016531d/master/pass/dam-images-architecture-2015-02-candy-shops-beautiful-candy-shops-01-dylans-candy-bar.jpg"} />
        </div>
    )
}

export default Home