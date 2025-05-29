"use client";

import React from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName: string;
  itemImage: string;
  itemPrice: number;
  itemDescription: string;
  quantity: number;
  setQuantity: (quantity: number) => void;
  onAddToCart: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  itemName,
  itemImage,
  itemPrice,
  itemDescription,
  quantity,
  setQuantity,
  onAddToCart
}) => {
  if (!isOpen) return null;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-content">
          <img src={itemImage} alt={itemName} className="modal-image" />
          <div className="modal-info">
            <h2 className="modal-title">{itemName}</h2>
            <p className="modal-description">{itemDescription}</p>
            <div className="modal-price">{itemPrice} ₽</div>
            <div className="quantity-controls">
              <button className="quantity-btn" onClick={decrementQuantity}>-</button>
              <input
                type="number"
                className="quantity-input"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
              <button className="quantity-btn" onClick={incrementQuantity}>+</button>
            </div>
            <div className="modal-actions">
              <button className="modal-btn add-btn" onClick={onAddToCart}>
                Добавить в корзину
              </button>
              <button className="modal-btn cancel-btn" onClick={onClose}>
                Отмена
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
