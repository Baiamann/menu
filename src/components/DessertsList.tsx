"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Rating from "./Rating";
import "./Desserts.css";

interface DessertItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
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
      imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Панна Котта",
      description: "Нежный сливочный десерт с ягодным соусом",
      price: 350,
      imageUrl: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Канноли",
      description: "Хрустящие трубочки с кремом из рикотты",
      price: 280,
      imageUrl: "https://images.unsplash.com/photo-1613145998571-740d61b8d4e0?auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Джелато",
      description: "Итальянское мороженое с различными вкусами",
      price: 250,
      imageUrl: "https://images.unsplash.com/photo-1625937289652-474d54c85703?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
    },
    {
      id: 5,
      name: "Забайоне",
      description: "Воздушный десерт из яиц, сахара и вина",
      price: 320,
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
    },
    {
      id: 6,
      name: "Бучеллато",
      description: "Сицилийский пирог с инжиром, орехами и цукатами",
      price: 300,
      imageUrl: "https://images.unsplash.com/photo-1604152135912-04a022e236b5?auto=format&fit=crop&w=800&q=80",
      rating: 4.4,
    },
    {
      id: 7,
      name: "Семифредо",
      description: "Полузамороженный десерт с кремом и ягодами",
      price: 380,
      imageUrl: "https://images.unsplash.com/photo-1608133450964-e0c81ed5252e?auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
    },
    {
      id: 8,
      name: "Кростата",
      description: "Открытый пирог с фруктовой начинкой",
      price: 350,
      imageUrl: "https://images.unsplash.com/photo-1627637453826-b41b7024e2a4?auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
    },
    {
      id: 9,
      name: "Зепполе",
      description: "Итальянские пончики с сахарной пудрой",
      price: 280,
      imageUrl: "https://images.unsplash.com/photo-1548943487-a2e4d1c7d6bc?auto=format&fit=crop&w=800&q=80",
      rating: 4.3,
    },
  ];
  
    
    


  const openModal = (item: DessertItem) => {
    setSelectedItem(item);
    setQuantity(1);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = 'unset';
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
            <div className="menu-card-image-container">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={320}
                height={180}
                className="menu-card-image"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="menu-card-content">
              <h3 className="menu-card-title">{item.name}</h3>
              <p className="menu-card-description">{item.description}</p>
              <div className="menu-card-rating">
                <Rating value={item.rating} />
                <span className="rating-text">{item.rating.toFixed(1)}</span>
              </div>
              <div className="price-container">
                <span className="price">{item.price} сом</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedItem && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image-container">
              <Image
              src={selectedItem.imageUrl}
              alt={selectedItem.name}
                width={500}
                height={300}
                style={{ objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
            <h3>{selectedItem.name}</h3>
            <p>{selectedItem.description}</p>
            <div className="modal-rating">
              <Rating value={selectedItem.rating} />
              <span className="rating-text">{selectedItem.rating.toFixed(1)}</span>
            </div>
            <div className="price-container">
              <span className="price">{selectedItem.price} сом</span>
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
