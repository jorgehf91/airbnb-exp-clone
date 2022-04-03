import React from "react";
import logo from "./images/airbnb-logo.png";

export default function Navbar() {
    return (
       <div>
           <nav>
               <img className="navbar--logo" src={logo} alt="logo"/>
           </nav>
       </div>
    )
}