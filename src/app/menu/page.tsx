"use client";

import React, { useState } from 'react';
import MenuItem from '@/components/MenuItem';
import './menu.css';

const menuData = {
  appetizers: [
    {
      name: "Карпаччо из говядины",
      description: "Тонко нарезанная маринованная говядина с рукколой, пармезаном и трюфельным маслом",
      price: 850,
      image: "/images/appetizers/carpaccio.jpg",
      rating: 4.5
    },
    {
      name: "Тартар из тунца",
      description: "Свежий тунец с авокадо, кинзой и цитрусовым соусом",
      price: 950,
      image: "/images/appetizers/tuna-tartare.jpg",
      rating: 4.8
    },
    {
      name: "Брускетта с томатами",
      description: "Поджаренный багет с томатами, базиликом и чесноком",
      price: 450,
      image: "/images/appetizers/bruschetta.jpg",
      rating: 4.2
    }
  ],
  mainCourses: [
    {
      name: "Стейк Рибай",
      description: "Мраморная говядина с овощами гриль и соусом из красного вина",
      price: 2500,
      image: "/images/main/ribeye.jpg",
      rating: 4.9
    },
    {
      name: "Лосось на гриле",
      description: "Филе лосося с овощами и лимонным соусом",
      price: 1800,
      image: "/images/main/salmon.jpg",
      rating: 4.7
    },
    {
      name: "Паста Карбонара",
      description: "Спагетти с беконом, сливками и пармезаном",
      price: 950,
      image: "/images/main/carbonara.jpg",
      rating: 4.6
    }
  ],
  desserts: [
    {
      name: "Тирамису",
      description: "Классический итальянский десерт с кофе и маскарпоне",
      price: 650,
      image: "/images/desserts/tiramisu.jpg",
      rating: 4.8
    },
    {
      name: "Шоколадный фондан",
      description: "Теплый шоколадный пирог с ванильным мороженым",
      price: 750,
      image: "/images/desserts/fondant.jpg",
      rating: 4.9
    },
    {
      name: "Чизкейк",
      description: "Классический чизкейк с ягодным соусом",
      price: 600,
      image: "/images/desserts/cheesecake.jpg",
      rating: 4.7
    }
  ],
  drinks: [
    {
      name: "Мохито",
      description: "Классический коктейль с ромом, лаймом и мятой",
      price: 550,
      image: "/images/drinks/mojito.jpg",
      rating: 4.5
    },
    {
      name: "Негрони",
      description: "Коктейль с джином, кампари и вермутом",
      price: 650,
      image: "/images/drinks/negroni.jpg",
      rating: 4.6
    },
    {
      name: "Вино Мерло",
      description: "Красное сухое вино, бокал",
      price: 450,
      image: "/images/drinks/merlot.jpg",
      rating: 4.4
    }
  ],
  specials: [
    {
      name: "Устрицы",
      description: "Свежие устрицы с лимоном и соусом миньонет",
      price: 1200,
      image: "/images/specials/oysters.jpg",
      rating: 4.9
    },
    {
      name: "Трюфельная паста",
      description: "Паста с трюфельным соусом и пармезаном",
      price: 1800,
      image: "/images/specials/truffle-pasta.jpg",
      rating: 4.8
    },
    {
      name: "Фуа-гра",
      description: "Печень гуся с яблочным пюре и бальзамическим соусом",
      price: 2200,
      image: "/images/specials/foie-gras.jpg",
      rating: 4.7
    }
  ]
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: 'Закуски' },
    { id: 'mainCourses', name: 'Основные блюда' },
    { id: 'desserts', name: 'Десерты' },
    { id: 'drinks', name: 'Напитки' },
    { id: 'specials', name: 'Специальные предложения' }
  ];

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1>Наше Меню</h1>
        <div className="category-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-grid">
        {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuPage; 