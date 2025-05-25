"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import "./Drinks.css";

const DrinksList = () => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  const drinks = [
    {
      id: 1,
      name: "Мохито",
      description: "Освежающий коктейль с мятой и лаймом",
      price: 500,
      imageUrl: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Апероль Шприц",
      description: "Классический итальянский аперитив",
      price: 600,
      imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Красное вино",
      description: "Бордо, Франция",
      price: 800,
      imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Лимонад",
      description: "Домашний лимонад с апельсином и мятой",
      price: 350,
      imageUrl: "https://images.unsplash.com/photo-1584270354949-3c60738f6f4c?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      name: "Айран",
      description: "Прохладительный кисломолочный напиток",
      price: 250,
      imageUrl: "https://images.unsplash.com/photo-1607344643404-604bc1b60c16?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      name: "Капучино",
      description: "Классический итальянский кофе",
      price: 300,
      imageUrl: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 7,
      name: "Зеленый чай",
      description: "Свежезаваренный японский чай",
      price: 200,
      imageUrl: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 8,
      name: "Смузи",
      description: "Фруктовый смузи с ягодами",
      price: 400,
      imageUrl: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 9,
      name: "Пиво",
      description: "Свежее разливное пиво",
      price: 350,
      imageUrl: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&auto=format&fit=crop&q=80",
    },
  ];

  const openModal = (drink: any) => {
    setSelectedDrink(drink);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDrink(null);
  };

  const handleAddToCart = () => {
    if (selectedDrink && quantity > 0) {
      addToCart(selectedDrink, quantity);
      closeModal();
    }
  };

  return (
    <section className="menu">
      <h2 className="menu-title">Напитки</h2>
      <div className="menu-grid">
        {drinks.map((drink) => (
          <div key={drink.id} className="menu-card" onClick={() => openModal(drink)}>
            <img src={drink.imageUrl} alt={drink.name} />
            <div className="menu-card-content">
              <h3 className="menu-card-title">{drink.name}</h3>
              <p className="menu-card-description">{drink.description}</p>
              <p className="menu-card-price">{drink.price} ₽</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedDrink && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedDrink.imageUrl}
              alt={selectedDrink.name}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <h3>{selectedDrink.name}</h3>
            <p>{selectedDrink.description}</p>
            <p>Цена: {selectedDrink.price} ₽</p>

            <label>
              Количество:
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                style={{ marginLeft: "0.5rem", width: "60px" }}
              />
            </label>

            <div className="modalButtons" style={{ marginTop: "1rem" }}>
              <button onClick={handleAddToCart}>Добавить в корзину</button>
              <button onClick={closeModal} style={{ marginLeft: "1rem" }}>
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DrinksList;
