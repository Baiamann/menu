"use client";

import React, { useState } from "react";
import { useCart } from "../app/context/CartContext";
import Image from "next/image";
import "./SnacksList.css";
import Rating from "./Rating";

interface Snack {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
}

const SnacksList: React.FC = () => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSnack, setSelectedSnack] = useState<Snack | null>(null);
  const [quantity, setQuantity] = useState(1);

  const snacks: Snack[] = [
    {
      id: 1,
      name: "Брускетта с томатами",
      description: "Хрустящий багет с томатами, базиликом и чесноком, сбрызнутый оливковым маслом",
      price: 350,
      imageUrl: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&auto=format&fit=crop&q=80",
      rating: 4.8
    },
    {
      id: 2,
      name: "Карпаччо из говядины",
      description: "Тонко нарезанная маринованная говядина с рукколой, пармезаном и трюфельным маслом",
      price: 650,
      imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
      rating: 4.9
    },
    {
      id: 3,
      name: "Крылышки",
      description: "Куриные крылышки в соусе барбекю",
      price: 450,
      imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&auto=format&fit=crop&q=80",
      rating: 4.7
    },
    {
      id: 4,
      name: "Сырные палочки",
      description: "Хрустящие палочки с моцареллой",
      price: 300,
      imageUrl: "https://images.unsplash.com/photo-1562967915-92ae0c320a1c?w=800&auto=format&fit=crop&q=80",
      rating: 4.6
    },
    {
      id: 5,
      name: "Кальмары",
      description: "Жареные кальмары с соусом",
      price: 400,
      imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80",
      rating: 4.5
    },
    {
      id: 6,
      name: "Начос",
      description: "Чипсы с сыром, перцем и соусом",
      price: 350,
      imageUrl: "https://images.unsplash.com/photo-1582169296194-d4d644c48081?w=800&auto=format&fit=crop&q=80",
      rating: 4.9
    },
    {
      id: 7,
      name: "Оливки",
      description: "Ассорти из маринованных оливок",
      price: 320,
      imageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop&q=80",
      rating: 4.3
    },
    {
      id: 8,
      name: "Гренки",
      description: "Хрустящие гренки с чесноком",
      price: 200,
      imageUrl: "https://images.unsplash.com/photo-1608198093002-ad4e505484ba?w=800&auto=format&fit=crop&q=80",
      rating: 4.2
    },
    {
      id: 9,
      name: "Мидии",
      description: "Мидии в белом вине",
      price: 550,
      imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80",
      rating: 4.1
    }
  ];

  const openModal = (snack: Snack) => {
    setSelectedSnack(snack);
    setQuantity(1);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSnack(null);
    document.body.style.overflow = 'unset';
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (selectedSnack) {
      addToCart({
        id: selectedSnack.id,
        name: selectedSnack.name,
        price: selectedSnack.price,
        imageUrl: selectedSnack.imageUrl,
        description: selectedSnack.description,
        rating: selectedSnack.rating
      }, quantity);
      closeModal();
    }
  };

  return (
    <section className="menu">
      <h2 className="menu-title">Закуски</h2>
      <div className="menu-grid">
        {snacks.map((snack) => (
          <div key={snack.id} className="menu-card" onClick={() => openModal(snack)}>
            <div className="menu-card-image-container">
              <Image
                src={snack.imageUrl}
                alt={snack.name}
                width={320}
                height={180}
                className="menu-card-image"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="menu-card-content">
              <h3 className="menu-card-title">{snack.name}</h3>
              <p className="menu-card-description">{snack.description}</p>
              <div className="menu-card-rating">
                <Rating value={snack.rating} />
                <span className="rating-text">{snack.rating.toFixed(1)}</span>
              </div>
              <p className="menu-card-price">{snack.price} сом</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedSnack && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image-container">
              <Image
                src={selectedSnack.imageUrl}
                alt={selectedSnack.name}
                width={500}
                height={300}
                style={{ objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
            <h3>{selectedSnack.name}</h3>
            <p>{selectedSnack.description}</p>
            <div className="modal-rating">
              <Rating value={selectedSnack.rating} />
              <span className="rating-text">{selectedSnack.rating.toFixed(1)}</span>
            </div>
            <p className="modal-price">{selectedSnack.price} сом</p>

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
