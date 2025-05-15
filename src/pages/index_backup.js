import React, { useState } from "react";
import Header from "../src/components/Header";
import Card from "../src/components/Card";

const menuItems = {
  Основное: [
    {
      title: "Пицца",
      image: "/images/pizza.jpg",
      description: "Сырная пицца с томатами",
    },
    {
      title: "Паста",
      image: "/images/pasta.jpg",
      description: "Паста карбонара",
    },
  ],
  Десерты: [
    {
      title: "Тирамису",
      image: "/images/tiramisu.jpg",
      description: "Классический итальянский десерт",
    },
    {
      title: "Мороженое",
      image: "/images/icecream.jpg",
      description: "Ассорти из мороженого",
    },
  ],
  Напитки: [
    {
      title: "Кофе",
      image: "/images/coffee.jpg",
      description: "Свежемолотый кофе",
    },
    { title: "Чай", image: "/images/tea.jpg", description: "Ароматный чай" },
  ],
};

export default function HomePage() {
  const [category, setCategory] = useState("Основное");

  return (
    <>
      <Header />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {Object.keys(menuItems).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              padding: "10px 20px",
              backgroundColor: category === cat ? "#0070f3" : "#f0f0f0",
              color: category === cat ? "#fff" : "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "0 20px 40px",
        }}
      >
        {menuItems[category].map((item, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}
