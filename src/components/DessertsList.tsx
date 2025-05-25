"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import "./Desserts.css";

interface DessertItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const DessertsList: React.FC = () => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DessertItem | null>(null);
  const [quantity, setQuantity] = useState(1);

  const desserts: DessertItem[] = [
    {
      id: 1,
      name: "Тирамису",
      description: "Классический итальянский десерт с маскарпоне и кофе",
      price: 450,
      imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Панна Котта",
      description: "Нежный десерт с ванилью и ягодным соусом",
      price: 400,
      imageUrl: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Джелато",
      description: "Итальянское мороженое с различными вкусами",
      price: 350,
      imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Канноли",
      description: "Хрустящие трубочки с кремом из рикотты",
      price: 380,
      imageUrl: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      name: "Забайоне",
      description: "Воздушный десерт из яиц, сахара и вина",
      price: 420,
      imageUrl: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      name: "Семифредо",
      description: "Замороженный десерт с ягодами и орехами",
      price: 400,
      imageUrl: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 7,
      name: "Тарт Татен",
      description: "Яблочный пирог с карамелью",
      price: 380,
      imageUrl: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 8,
      name: "Профитроли",
      description: "Заварные пирожные с шоколадным соусом",
      price: 350,
      imageUrl: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 9,
      name: "Аффогато",
      description: "Мороженое с горячим эспрессо",
      price: 320,
      imageUrl: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&auto=format&fit=crop&q=80",
    },
  ];

  const openModal = (item: DessertItem) => {
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
      <h2 className="menu-title">La Dolce Vita - Десерты</h2>
      <p className="menu-subtitle">Сладкие итальянские соблазны</p>
      <div className="menu-grid">
        {desserts.map((item) => (
          <div key={item.id} className="menu-card" onClick={() => openModal(item)}>
            <img src={item.imageUrl} alt={item.name} />
            <div className="menu-card-content">
              <h3 className="menu-card-title">{item.name}</h3>
              <p className="menu-card-description">{item.description}</p>
              <div className="price-container">
                <span className="price">{item.price} ₽</span>
              </div>
            </div>
          </div>
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
            <div className="price-container">
              <span className="price">{selectedItem.price} ₽</span>
            </div>

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
