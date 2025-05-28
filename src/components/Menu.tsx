"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Rating from "./Rating";
import "./Menu.css";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Лазанья Болоньезе",
    description: "Классическая лазанья с соусом болоньезе и бешамель",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=800&auto=format&fit=crop&q=80",
    rating: 4.8
  },
  {
    id: 2,
    name: "Паста Карбонара",
    description: "Спагетти с беконом, яйцом и пармезаном",
    price: 950,
    imageUrl: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop&q=80",
    rating: 4.9
  },
  {
    id: 3,
    name: "Ризотто с грибами",
    description: "Кремовое ризотто с белыми грибами и пармезаном",
    price: 850,
    imageUrl: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&auto=format&fit=crop&q=80",
    rating: 4.7
  },
  {
    id: 4,
    name: "Пицца Маргарита",
    description: "Классическая пицца с томатами и моцареллой",
    price: 750,
    imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop&q=80",
    rating: 4.6
  },
  {
    id: 5,
    name: "Оссобуко",
    description: "Тушеная телячья голень с овощами и ризотто",
    price: 1500,
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
    rating: 4.9
  },
  {
    id: 6,
    name: "Равиоли с трюфелем",
    description: "Домашние равиоли с трюфельным соусом",
    price: 1100,
    imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=80",
    rating: 4.8
  },
  {
    id: 7,
    name: "Суп Минестроне",
    description: "Традиционный итальянский овощной суп",
    price: 650,
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80",
    rating: 4.5
  },
  {
    id: 8,
    name: "Сальтимбокка",
    description: "Телятина с прошутто и шалфеем",
    price: 1300,
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
    rating: 4.7
  },
  {
    id: 9,
    name: "Феттучини Альфредо",
    description: "Паста с соусом из сливок и пармезана",
    price: 900,
    imageUrl: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop&q=80",
    rating: 4.6
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
              <p className="menu-card-price">{item.price} сом</p>
            </div>
          </article>
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
            <p className="modal-price">{selectedItem.price} сом</p>

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
