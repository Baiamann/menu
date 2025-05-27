import React from 'react';
import './Rating.css';

interface RatingProps {
  value: number;
  maxValue?: number;
}

const Rating: React.FC<RatingProps> = ({ value, maxValue = 5 }) => {
  // Ограничиваем значение рейтинга
  const normalizedValue = Math.min(Math.max(value, 0), maxValue);
  
  const stars = [];
  const fullStars = Math.floor(normalizedValue);
  const hasHalfStar = normalizedValue % 1 >= 0.5;

  for (let i = 1; i <= maxValue; i++) {
    if (i <= fullStars) {
      stars.push('★');
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push('★');
    } else {
      stars.push('☆');
    }
  }

  return (
    <div className="rating">
      <span className="stars">{stars.join('')}</span>
      <span className="rating-value">({normalizedValue.toFixed(1)})</span>
    </div>
  );
};

export default Rating; 