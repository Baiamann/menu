'use client';

import React from 'react';
import Header from '@/components/Header';

const specialItems = [
  {
    id: 1,
    name: 'Стейк Рибай',
    description: 'Нежный говяжий стейк с соусом из красного вина',
    originalPrice: 3000,
    discountPrice: 2500,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500'
  },
  {
    id: 2,
    name: 'Паста с морепродуктами',
    description: 'Спагетти с креветками, мидиями и соусом песто',
    originalPrice: 1800,
    discountPrice: 1500,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500'
  },
  {
    id: 3,
    name: 'Брускетта с томатами',
    description: 'Итальянские тосты с томатами и базиликом',
    originalPrice: 600,
    discountPrice: 450,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500'
  },
  {
    id: 4,
    name: 'Карпаччо',
    description: 'Тонко нарезанная говядина с рукколой',
    originalPrice: 800,
    discountPrice: 650,
    rating: 3,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500'
  },
  {
    id: 5,
    name: 'Тирамису',
    description: 'Классический итальянский десерт',
    originalPrice: 700,
    discountPrice: 550,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'
  },
  {
    id: 6,
    name: 'Чизкейк',
    description: 'Нежный чизкейк с ягодным соусом',
    originalPrice: 600,
    discountPrice: 450,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1568659358810-bdbdbd9b0c7f?w=500'
  }
];

const renderStars = (count: number) => {
  return '★★★★★☆☆☆☆☆'.slice(5 - count, 10 - count);
};

const SpecialPage = () => {
  return (
    <main className="min-h-screen bg-gray-100 pt-20">
      <Header />
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-amber-800 mb-10 relative">
          Специальные предложения
          <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-2xl">🔥</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <div className="text-yellow-500 text-sm mb-2">{renderStars(item.rating)}</div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 line-through text-sm">{item.originalPrice} ₽</span>
                  <span className="text-red-600 font-bold text-lg">{item.discountPrice} ₽</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SpecialPage;
