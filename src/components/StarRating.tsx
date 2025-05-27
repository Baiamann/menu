import React from "react";
import "./StarRating.css";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="star-rating">
      {[...Array(maxRating)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? "filled" : "empty"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating; 