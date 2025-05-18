import React from "react";
import "./SpecialOffers.css"; // обычный CSS импорт

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
    <section className="specialOffers">
      <h2>Акция дня</h2>
      <div className="specialItems">
        {specialItems.map((item) => (
          <div key={item.id} className="specialItem">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="prices">
              <span className="originalPrice">{item.originalPrice} ₽</span>
              <span className="discountPrice">{item.discountPrice} ₽</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
