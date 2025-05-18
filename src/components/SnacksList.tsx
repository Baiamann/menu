import React from "react";
import "./SnacksList.css";

const SnacksList = () => {
  const snacks = [
    {
      id: 1,
      name: "Брускетта",
      description: "Итальянские тосты с томатами и базиликом",
      price: 400,
      image:
        "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 2,
      name: "Карпаччо",
      description: "Тонко нарезанная говядина с рукколой и пармезаном",
      price: 600,
      image:
        "https://images.unsplash.com/photo-1612874742236-f15ae09577d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 3,
      name: "Тартар",
      description: "Тартар из говядины с каперсами и луком",
      price: 700,
      image:
        "https://images.unsplash.com/photo-1625949489479-26a338d224fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="menu">
      <h2 className="menu-title">Закуски</h2>
      <div className="menu-grid">
        {snacks.map((snack) => (
          <div key={snack.id} className="menu-card">
            <img src={snack.image} alt={snack.name} />
            <div className="menu-card-content">
              <h3 className="menu-card-title">{snack.name}</h3>
              <p className="menu-card-description">{snack.description}</p>
              <p className="menu-card-price">{snack.price} ₽</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SnacksList;
