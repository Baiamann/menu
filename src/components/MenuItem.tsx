import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { IoStarOutline } from 'react-icons/io5';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FaStar key={`full-${i}`} className="text-yellow-400" />
    );
  }

  // Add half star if needed
  if (hasHalfStar) {
    stars.push(
      <FaStarHalfAlt key="half" className="text-yellow-400" />
    );
  }

  // Add empty stars
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <IoStarOutline key={`empty-${i}`} className="text-gray-300" />
    );
  }

  return <div className="flex gap-1">{stars}</div>;
};

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price, image, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <span className="text-lg font-bold text-primary">{price} ₽</span>
        </div>
        <p className="text-gray-600 mb-3">{description}</p>
        <StarRating rating={rating} />
      </div>
    </div>
  );
};

export default MenuItem; 