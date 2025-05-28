import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Rating from "./Rating";
import "./Appetizers.css";

interface AppetizerItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
}

const appetizers: AppetizerItem[] = [
  {
    id: 1,
    name: "Брускетта",
    description: "Поджаренный хлеб с томатами и базиликом",
    price: 350,
    imageUrl: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
  },
  {
    id: 2,
    name: "Карпаччо",
    description: "Тонко нарезанная говядина с рукколой и пармезаном",
    price: 450,
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Капрезе",
    description: "Салат с моцареллой, томатами и базиликом",
    price: 400,
    imageUrl: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&auto=format&fit=crop&q=80",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Аранчини",
    description: "Жареные рисовые шарики с начинкой",
    price: 380,
    imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Прошутто",
    description: "Вяленая ветчина с дыней",
    price: 550,
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Антипасто",
    description: "Ассорти из итальянских закусок",
    price: 650,
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
  },
];

const Appetizers = () => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<AppetizerItem | null>(null);
  const [quantity, setQuantity] = useState(1);

  const openModal = (item: AppetizerItem) => {
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
    if (selectedItem) {
      addToCart(selectedItem, quantity);
      closeModal();
    }
  };

  return (
    <section className="menu">
      <h2 className="menu-title">Закуски</h2>
      <p className="menu-subtitle">Итальянские закуски и антипасто</p>
      <div className="menu-grid">
        {appetizers.map((item) => (
          <div key={item.id} className="menu-card" onClick={() => openModal(item)}>
            <div className="menu-card-image-container">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={320}
                height={180}
                className="menu-card-image"
                style={{ objectFit: "cover" }}
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
                style={{ objectFit: "cover", borderRadius: "8px" }}
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

export default Appetizers;
