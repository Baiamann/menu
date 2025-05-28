"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Rating from "./Rating";
import "./SpecialOffers.css";

interface SpecialItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  discount: number;
  rating: number;
}

const SpecialOffers: React.FC = () => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SpecialItem | null>(null);
  const [quantity, setQuantity] = useState(1);

  const specialItems: SpecialItem[] = [
    {
      id: 1,
      name: "Паста Болоньезе",
      description: "Спагетти с соусом из говяжьего фарша, томатов и базилика",
      price: 1200,
      discount: 20,
      imageUrl: "https://images.unsplash.com/photo-1551892374-ecf7a3b8fba1?w=800&auto=format&fit=crop&q=80",
      rating: 4.8
    },
    {
      id: 2,
      name: "Пицца Пепперони",
      description: "Классическая пицца с пепперони и моцареллой",
      price: 950,
      discount: 15,
      imageUrl: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800&auto=format&fit=crop&q=80",
      rating: 4.9
    },
    {
      id: 3,
      name: "Ризотто с морепродуктами",
      description: "Кремовое ризотто с мидиями, креветками и кальмарами",
      price: 1500,
      discount: 10,
      imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&auto=format&fit=crop&q=80",
      rating: 4.7
    },
    {
      id: 4,
      name: "Лазанья Болоньезе",
      description: "Классическая лазанья с мясным соусом и бешамель",
      price: 1100,
      discount: 15,
      imageUrl: "https://images.unsplash.com/photo-1619894991236-5f6a5e0f9024?w=800&auto=format&fit=crop&q=80",
      rating: 4.8
    },
    {
      id: 5,
      name: "Карбонара",
      description: "Спагетти с беконом, яйцом и пармезаном",
      price: 1000,
      discount: 20,
      imageUrl: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop&q=80",
      rating: 4.9
    },
    {
      id: 6,
      name: "Равиоли с грибами",
      description: "Домашние равиоли с грибной начинкой и трюфельным соусом",
      price: 1300,
      discount: 15,
      imageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop&q=80",
      rating: 4.6
    },
    {
      id: 7,
      name: "Оссобуко",
      description: "Тушеная телячья голень с овощами и ризотто",
      price: 1800,
      discount: 25,
      imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
      rating: 4.7
    },
    {
      id: 8,
      name: "Тирамису",
      description: "Классический итальянский десерт с маскарпоне и кофе",
      price: 600,
      discount: 15,
      imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop&q=80",
      rating: 4.9
    },
    {
      id: 9,
      name: "Брускетта",
      description: "Тосты с томатами, базиликом и моцареллой",
      price: 450,
      discount: 20,
      imageUrl: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&auto=format&fit=crop&q=80",
      rating: 4.5
    },
  ];

  const openModal = (item: SpecialItem) => {
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

  const calculateDiscountedPrice = (price: number, discount: number) => {
    return Math.round(price * (1 - discount / 100));
  };

  return (
    <section className="menu">
      <h2 className="menu-title">La Dolce Vita - Специальные предложения</h2>
      <p className="menu-subtitle">Аутентичная итальянская кухня со скидками</p>
      <div className="menu-grid">
        {specialItems.map((item) => (
          <div key={item.id} className="menu-card" onClick={() => openModal(item)}>
            <img src={item.imageUrl} alt={item.name} />
            <div className="menu-card-content">
              <h3 className="menu-card-title">{item.name}</h3>
              <p className="menu-card-description">{item.description}</p>
              <div className="menu-card-rating">
                <Rating value={item.rating} />
                <span className="rating-text">{item.rating.toFixed(1)}</span>
              </div>
              <div className="price-container">
                <span className="original-price">{item.price} сом</span>
                <span className="discounted-price">
                  {calculateDiscountedPrice(item.price, item.discount)} сом
                </span>
                <span className="discount-badge">-{item.discount}%</span>
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
            <div className="modal-rating">
              <Rating value={selectedItem.rating} />
              <span className="rating-text">{selectedItem.rating.toFixed(1)}</span>
            </div>
            <div className="price-container">
              <span className="original-price">{selectedItem.price} сом</span>
              <span className="discounted-price">
                {calculateDiscountedPrice(selectedItem.price, selectedItem.discount)} сом
              </span>
              <span className="discount-badge">-{selectedItem.discount}%</span>
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

export default SpecialOffers;
