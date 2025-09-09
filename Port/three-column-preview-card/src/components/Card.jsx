import React from 'react';
import './Card.css'; // Assuming you will create a Card.css for specific styles

const Card = ({ title, description, image, footer }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
            <div className="card-footer">
                {footer}
            </div>
        </div>
    );
};

export default Card;