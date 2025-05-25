"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import "./SnacksList.css";

const SnacksList = () => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSnack, setSelectedSnack] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  const snacks = [
    {
      id: 1,
      name: "Картофель фри",
      description: "Хрустящий картофель с соусом",
      price: 250,
      imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Начос",
      description: "Чипсы с сыром, перцем и соусом",
      price: 350,
      imageUrl: "https://images.unsplash.com/photo-1582169296194-d4d644c48081?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Крылышки",
      description: "Куриные крылышки в соусе барбекю",
      price: 450,
      imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Сырные палочки",
      description: "Хрустящие палочки с моцареллой",
      price: 300,
      imageUrl: "https://images.unsplash.com/photo-1562967915-92ae0c320a1c?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      name: "Кальмары",
      description: "Жареные кальмары с соусом",
      price: 400,
      imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      name: "Брускетта",
      description: "Тосты с томатами и базиликом",
      price: 280,
      imageUrl: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 7,
      name: "Оливки",
      description: "Ассорти из маринованных оливок",
      price: 320,
      imageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 8,
      name: "Гренки",
      description: "Хрустящие гренки с чесноком",
      price: 200,
      imageUrl: "https://images.unsplash.com/photo-1608198093002-ad4e505484ba?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 9,
      name: "Мидии",
      description: "Мидии в белом вине",
      price: 550,
      imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80",
    },
  ];

  const openModal = (snack: any) => {
    setSelectedSnack(snack);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSnack(null);
  };

  const handleAddToCart = () => {
    if (selectedSnack && quantity > 0) {
      addToCart(selectedSnack, quantity);
      closeModal();
    }
  };

  return (
    <section className="menu">
      <h2 className="menu-title">Закуски</h2>
      <div className="menu-grid">
        {snacks.map((snack) => (
          <div key={snack.id} className="menu-card" onClick={() => openModal(snack)}>
            <img src={snack.imageUrl} alt={snack.name} />
            <div className="menu-card-content">
              <h3 className="menu-card-title">{snack.name}</h3>
              <p className="menu-card-description">{snack.description}</p>
              <p className="menu-card-price">{snack.price} ₽</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedSnack && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedSnack.imageUrl}
              alt={selectedSnack.name}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <h3>{selectedSnack.name}</h3>
            <p>{selectedSnack.description}</p>
            <p>Цена: {selectedSnack.price} ₽</p>

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

export default SnacksList;
