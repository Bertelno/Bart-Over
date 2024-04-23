
import React from 'react';

function Card({ imageUrl, title, description }) {
  return (
    <div className="card">
      <img className="image" src={imageUrl} alt={title} />
      <h2>{title}</h2> 
      <p>{description}</p>
    </div>
  );
}

export default Card;