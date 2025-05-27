import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Rating from "./Rating";
import "./MainDishes.css";

interface MainDishItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
}

const mainDishes: MainDishItem[] = [
  {
    id: 1,
    name: "Карбонара",
    description: "Спагетти с беконом, сливками и пармезаном",
    price: 650,
    imageUrl: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Лазанья Болоньезе",
    description: "Слоистая паста с мясным соусом и бешамель",
    price: 750,
    imageUrl: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Оссобуко",
    description: "Тушеная телячья голяшка с овощами",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Ризотто с грибами",
    description: "Кремовая рисовая каша с белыми грибами",
    price: 580,
    imageUrl: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Сальтимбокка",
    description: "Телятина с прошутто и шалфеем",
    price: 850,
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
    rating: 4.4,
  },
  {
    id: 6,
    name: "Пицца Маргарита",
    description: "Классическая пицца с томатами и моцареллой",
    price: 550,
    imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
  },
];

// ... rest of the component code ...

return (
  <section className="menu">
    <h2 className="menu-title">Основные блюда</h2>
    <p className="menu-subtitle">Традиционные итальянские блюда</p>
    <div className="menu-grid">
      {mainDishes.map((item) => (
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