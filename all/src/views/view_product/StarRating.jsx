import React, { useState } from "react";

const StarRating = ({ rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleStarClick = (clickedRating) => {
    onRatingChange(clickedRating);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`star ${value <= (hoveredRating || rating) ? "active" : ""}`}
          onClick={() => handleStarClick(value)}
          onMouseEnter={() => setHoveredRating(value)}
          onMouseLeave={() => setHoveredRating(null)}
        >
          &#9733; {/* Esto es un carácter de estrella */}
        </span>
      ))}
    </div>
  );
};

export default StarRating;