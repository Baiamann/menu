import React from "react";
import "./SnacksList.css"; // 👈 обычный CSS-файл

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
        "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 3,
      name: "Тартар",
      description: "Тартар из говядины с каперсами и луком",
      price: 700,
      image:
        "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="snacks">
      <h2>Закуски</h2>
      <div className="snacks-items">
        {snacks.map((snack) => (
          <div key={snack.id} className="snack-item">
            <img src={snack.image} alt={snack.name} />
            <h3>{snack.name}</h3>
            <p>{snack.description}</p>
            <p className="price">{snack.price} ₽</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SnacksList;
