"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import "./Menu.css";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Стейк Рибай",
    description: "Нежный говяжий стейк с соусом из красного вина",
    price: 2500,
    imageUrl: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Паста Карбонара",
    description: "Спагетти с беконом, яйцом и пармезаном",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Салат Цезарь",
    description: "Салат с курицей, крутонами и соусом цезарь",
    price: 800,
    imageUrl: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Бургер Классический",
    description: "Сочный бургер с говяжьей котлетой и овощами",
    price: 650,
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Пицца Маргарита",
    description: "Классическая пицца с томатами и моцареллой",
    price: 750,
    imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Ризотто с грибами",
    description: "Кремовое ризотто с белыми грибами",
    price: 850,
    imageUrl: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Лосось на гриле",
    description: "Филе лосося с овощами и лимоном",
    price: 1800,
    imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Куриное карри",
    description: "Острое карри с курицей и рисом",
    price: 950,
    imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 9,
    name: "Равиоли с трюфелем",
    description: "Домашние равиоли с трюфельным соусом",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=80",
  },
];

const Menu: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const openModal = (item: MenuItem) => {
    setSelectedItem(item);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleAddToCart = () => {
    if (selectedItem && quantity > 0) {
      addToCart(selectedItem, quantity);
      closeModal();
    }
  };

  return (
    <section className="menu">
      <h2 className="menu-title">Основные блюда</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <article
            key={item.id}
            className="menu-card"
            onClick={() => openModal(item)}
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="menu-card-image"
              loading="lazy"
              width={320}
              height={180}
            />
            <div className="menu-card-content">
              <h3 className="menu-card-title">{item.name}</h3>
              <p className="menu-card-description">{item.description}</p>
              <p className="menu-card-price">{item.price} ₽</p>
            </div>
          </article>
        ))}
      </div>

      {isModalOpen && selectedItem && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedItem.imageUrl}
              alt={selectedItem.name}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <h3>{selectedItem.name}</h3>
            <p>{selectedItem.description}</p>
            <p>Цена: {selectedItem.price} ₽</p>

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

export default Menu;
