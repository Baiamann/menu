import React from "react";
import "./SpecialOffers.css";

const SpecialOffers = () => {
  const specialItems = [
    {
      id: 1,
      name: "Стейк Рибай",
      description: "Нежный говяжий стейк с соусом из красного вина",
      originalPrice: 3000,
      discountPrice: 2500,
      image:
        "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 2,
      name: "Паста с морепродуктами",
      description: "Спагетти с креветками, мидиями и соусом песто",
      originalPrice: 1800,
      discountPrice: 1500,
      image:
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 3,
      name: "Дегустационный сет",
      description: "Ассорти из лучших блюд шеф-повара",
      originalPrice: 4000,
      discountPrice: 3200,
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="menu">
      <h2 className="menu-title">Акция дня</h2>
      <div className="menu-grid">
        {specialItems.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} />
            <div className="menu-card-content">
              <h3 className="menu-card-title">{item.name}</h3>
              <p className="menu-card-description">{item.description}</p>
              <div className="menu-card-price">
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#a9a9a9",
                    marginRight: "0.5rem",
                  }}
                >
                  {item.originalPrice} ₽
                </span>
                <span style={{ color: "#b35e1e", fontWeight: "bold" }}>
                  {item.discountPrice} ₽
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
