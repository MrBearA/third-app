import React from "react";
import './Card.css';

function Card({ title, imageUrl, body }) {
    const handleClick = () => {
        // Implement your click handling logic here
        console.log('Button clicked');
    };

    return (
        <div className="card-container">
            <div className="image-container">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="content">
                <div className="card-title">
                    <h3>{title}</h3 >
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
            </div>
            <div className="btn">
                <button onClick={handleClick} className="view-more-button">
                    View More
                </button>
            </div>
        </div>
    );
}

export default Card;
