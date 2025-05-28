"use client";

import React, { useState } from "react";
import { useCart } from "../app/context/CartContext";
import "./SnacksList.css";
import StarRating from "./StarRating";

interface Review {
  author: string;
  rating: number;
  comment: string;
}

interface Snack {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviews: Review[];
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
      imageUrl: "/images/snacks/bruschetta.jpg",
      rating: 4.8,
      reviews: [
        {
          author: "Анна",
          rating: 5,
          comment: "Очень вкусно! Свежие томаты и ароматный базилик."
        },
        {
          author: "Михаил",
          rating: 4,
          comment: "Хорошая закуска, но можно добавить больше чеснока."
        }
      ]
    },
    {
      id: 2,
      name: "Карпаччо из говядины",
      description: "Тонко нарезанная маринованная говядина с рукколой, пармезаном и трюфельным маслом",
      price: 650,
      imageUrl: "/images/snacks/carpaccio.jpg",
      rating: 4.9,
      reviews: [
        {
          author: "Елена",
          rating: 5,
          comment: "Идеальное сочетание вкусов! Мясо тает во рту."
        },
        {
          author: "Дмитрий",
          rating: 5,
          comment: "Лучшее карпаччо в городе!"
        }
      ]
    },
    {
      id: 3,
      name: "Крылышки",
      description: "Куриные крылышки в соусе барбекю",
      price: 450,
      imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&auto=format&fit=crop&q=80",
      rating: 4.7,
      reviews: [],
    },
    {
      id: 4,
      name: "Сырные палочки",
      description: "Хрустящие палочки с моцареллой",
      price: 300,
      imageUrl: "https://images.unsplash.com/photo-1562967915-92ae0c320a1c?w=800&auto=format&fit=crop&q=80",
      rating: 4.6,
      reviews: [],
    },
    {
      id: 5,
      name: "Кальмары",
      description: "Жареные кальмары с соусом",
      price: 400,
      imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80",
      rating: 4.5,
      reviews: [],
    },
    {
      id: 6,
      name: "Начос",
      description: "Чипсы с сыром, перцем и соусом",
      price: 350,
      imageUrl: "https://images.unsplash.com/photo-1582169296194-d4d644c48081?w=800&auto=format&fit=crop&q=80",
      rating: 4.9,
      reviews: [
        {
          author: "Елена",
          rating: 5,
          comment: "Идеальное сочетание вкусов! Мясо тает во рту.",
        },
        {
          author: "Дмитрий",
          rating: 5,
          comment: "Лучшее карпаччо в городе!",
        },
      ],
    },
    {
      id: 7,
      name: "Оливки",
      description: "Ассорти из маринованных оливок",
      price: 320,
      imageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop&q=80",
      rating: 4.3,
      reviews: [],
    },
    {
      id: 8,
      name: "Гренки",
      description: "Хрустящие гренки с чесноком",
      price: 200,
      imageUrl: "https://images.unsplash.com/photo-1608198093002-ad4e505484ba?w=800&auto=format&fit=crop&q=80",
      rating: 4.2,
      reviews: [],
    },
    {
      id: 9,
      name: "Мидии",
      description: "Мидии в белом вине",
      price: 550,
      imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80",
      rating: 4.1,
      reviews: [],
    },
  ];

  const openModal = (snack: Snack) => {
    setSelectedSnack(snack);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSnack(null);
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
            <img src={snack.imageUrl} alt={snack.name} />
            <div className="menu-card-content">
              <h3 className="menu-card-title">{snack.name}</h3>
              <p className="menu-card-description">{snack.description}</p>
              <div className="menu-card-rating">
                <StarRating rating={snack.rating} />
                <span className="rating-text">{snack.rating.toFixed(1)}</span>
              </div>
              <div className="menu-card-reviews">
                {snack.reviews.map((review, index) => (
                  <div key={index} className="review-item">
                    <div className="review-header">
                      <span className="review-author">{review.author}</span>
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="review-comment">{review.comment}</p>
                  </div>
                ))}
              </div>
              <p className="menu-card-price">{snack.price} с</p>
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
            <p>Цена: {selectedSnack.price} с</p>

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
