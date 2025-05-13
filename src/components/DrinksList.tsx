import React from "react";
import styles from "./DrinksList.module.css";

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
    <section className={styles.drinks}>
      <h2>Напитки</h2>
      <div className={styles.drinksItems}>
        {drinks.map((drink) => (
          <div key={drink.id} className={styles.drinkItem}>
            <img src={drink.image} alt={drink.name} />
            <h3>{drink.name}</h3>
            <p>{drink.description}</p>
            <p className={styles.price}>{drink.price} ₽</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DrinksList;
