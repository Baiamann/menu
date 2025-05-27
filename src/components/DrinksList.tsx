"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Rating from "./Rating";
import "./Drinks.css";

interface DrinkItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
}

const DrinksList: React.FC = () => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DrinkItem | null>(null);
  const [quantity, setQuantity] = useState(1);

  const drinks: DrinkItem[] = [
    {
      id: 1,
      name: "Эспрессо",
      description: "Крепкий итальянский кофе",
      price: 200,
      imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Капучино",
      description: "Кофе с молочной пенкой",
      price: 250,
      imageUrl: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=80",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Лимончелло",
      description: "Итальянский ликер из лимонов",
      price: 350,
      imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Апероль Спритц",
      description: "Коктейль с аперолем и просекко",
      price: 450,
      imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Просекко",
      description: "Итальянское игристое вино",
      price: 600,
      imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Кьянти",
      description: "Тосканское красное вино",
      price: 800,
      imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80",
      rating: 4.8,
    },
    {
      id: 7,
      name: "Пинья Колада",
      description: "Тропический коктейль с ромом",
      price: 500,
      imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80",
      rating: 4.9,
    },
    {
      id: 8,
      name: "Мохито",
      description: "Освежающий коктейль с мятой",
      price: 450,
      imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80",
      rating: 4.7,
    },
    {
      id: 9,
      name: "Беллависта",
      description: "Коктейль с джином и розовым вином",
      price: 550,
      imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80",
      rating: 4.8,
    },
  ];

  const openModal = (item: DrinkItem) => {
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
      <h2 className="menu-title">Напитки</h2>
      <p className="menu-subtitle">Итальянские напитки и коктейли</p>
      <div className="menu-grid">
        {drinks.map((item) => (
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
              <div className="price-container">
                <span className="price">{item.price} ₽</span>
              </div>
              <Rating value={item.rating} />
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
            <div className="price-container">
              <span className="price">{selectedItem.price} ₽</span>
            </div>
            <Rating value={selectedItem.rating} />

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
