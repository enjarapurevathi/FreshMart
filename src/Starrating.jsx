import React from 'react';
import './Starrating.css'; // Optional CSS for custom styles

function StarRating({ rating }) {
  const totalStars = 5;
  const filledStars = Math.round(rating); // round to nearest whole number

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <span key={index} className={index < filledStars ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  );
}

export default StarRating;
