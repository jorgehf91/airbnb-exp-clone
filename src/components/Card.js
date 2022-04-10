import React from "react";
import star from './images/star.png';


export default function Card(props) {
    console.log(props)
    let badgeText;
    if (props.data.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (props.data.location === 'Online') {
        badgeText = 'ONLINE';
    }

    return (
        <div className="card">
            <div className="card--image">
               { badgeText && <div className="tag">{badgeText}</div>}
                <img src={`./images/${props.data.coverImg}`} />
            </div>
          
            <div className="card--info">
                <h3 className="card--rating">
                    <img src={star} className='star' />
                    {props.data.stats.rating}
                    <span className="rev-count"> ({props.data.stats.reviewCount}) </span>
                    <span className="country"><strong>·</strong> {props.data.location}</span>
                </h3>

                <h2 className="card--title">
                    {props.data.title}
                </h2>

                <h3 className="card--price">From  
                    <strong className="amount"> $ {props.data.price}</strong>
                    / <span className="size">person</span>     
                </h3>
            </div>
        </div>
    );
}