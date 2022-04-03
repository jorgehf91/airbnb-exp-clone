import React from "react";
import image from './images/katie-zaferes.png';
import star from './images/star.png';

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
    return (
        <div className="card">
            <div className="card--image">
                <div className="tag">sold out</div>
                <img src={image} />
            </div>
          
            <div className="card--info">
                <h3 className="card--rating">
                    <img src={star} className='star' />
                    5.0 
                    <span className="rev-count"> (6) </span>
                    <span className="country"><strong>·</strong> USA</span>
                </h3>

                <h2 className="card--title">
                    Life lessons with Katie Zaferes
                </h2>

                <h3 className="card--price">From  
                    <strong className="amount"> $136</strong>
                    / <span className="size">person</span>     
                </h3>
            </div>
        </div>
    );
}