"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import "./DessertsList.css";

const DessertsList = () => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDessert, setSelectedDessert] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  const desserts = [
    {
      id: 1,
      name: "Тирамису",
      description: "Классический итальянский десерт с кофе и маскарпоне",
      price: 450,
      imageUrl:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Чизкейк",
      description: "Нежный чизкейк с ягодным соусом",
      price: 400,
      imageUrl:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Павлова",
      description: "Воздушный десерт с сезонными ягодами",
      price: 380,
      imageUrl:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Шоколадный фондан",
      description: "Тёплый шоколадный десерт с жидкой начинкой",
      price: 420,
      imageUrl:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      name: "Мороженое",
      description: "Домашнее мороженое с различными топпингами",
      price: 300,
      imageUrl:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const openModal = (dessert: any) => {
    setSelectedDessert(dessert);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDessert(null);
  };

  const handleAddToCart = () => {
    if (selectedDessert && quantity > 0) {
      addToCart(selectedDessert, quantity);
      closeModal();
    }
  };

  return (
    <section className="menu">
      <h2 className="menu-title">Десерты</h2>
      <div className="menu-grid">
        {desserts.map((dessert) => (
          <div key={dessert.id} className="menu-card" onClick={() => openModal(dessert)}>
            <img src={dessert.imageUrl} alt={dessert.name} />
            <div className="menu-card-content">
              <h3 className="menu-card-title">{dessert.name}</h3>
              <p className="menu-card-description">{dessert.description}</p>
              <p className="menu-card-price">{dessert.price} ₽</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedDessert && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedDessert.imageUrl}
              alt={selectedDessert.name}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <h3>{selectedDessert.name}</h3>
            <p>{selectedDessert.description}</p>
            <p>Цена: {selectedDessert.price} ₽</p>

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

export default DessertsList;
