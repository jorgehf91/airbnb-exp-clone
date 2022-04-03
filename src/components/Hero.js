import React from "react";
import photo from "./images/photo-grid.png";

export default function Hero() {
    return (
        <div className="hero">
            <img src={photo} className='hero--photo' alt='photo-grid' />
            <div className="hero--text">
                <h2>Online Experiences</h2>
                <p>Join unique interactive activities led by 
                    one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div> 
    );
}
