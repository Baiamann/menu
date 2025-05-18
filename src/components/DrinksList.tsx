import React from "react";
import "./Drinks.css";

const DrinksList = () => {
  const drinks = [
    {
      id: 1,
      name: "Мохито",
      description: "Освежающий коктейль с мятой и лаймом",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 2,
      name: "Апероль Шприц",
      description: "Классический итальянский аперитив",
      price: 600,
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 3,
      name: "Красное вино",
      description: "Бордо, Франция",
      price: 800,
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="menu">
      <h2 className="menu-title">Напитки</h2>
      <div className="menu-grid">
        {drinks.map((drink) => (
          <div key={drink.id} className="menu-card">
            <img src={drink.image} alt={drink.name} />
            <div className="menu-card-content">
              <h3 className="menu-card-title">{drink.name}</h3>
              <p className="menu-card-description">{drink.description}</p>
              <p className="menu-card-price">{drink.price} ₽</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DrinksList;
