"use client";

import React, { useState } from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName: string;
  itemImage: string;
  itemPrice: number;
  itemDescription: string;
  onAddToCart: (quantity: number) => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  itemName,
  itemImage,
  itemPrice,
  itemDescription,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const totalPrice = itemPrice * quantity;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="modal-image">
          <img src={itemImage} alt={itemName} />
        </div>
        
        <div className="modal-details">
          <h2 className="modal-title">{itemName}</h2>
          <p className="modal-description">{itemDescription}</p>
          
          <div className="modal-price">
            <span className="price-label">Цена:</span>
            <span className="price-value">{itemPrice} ₽</span>
          </div>
          
          <div className="modal-quantity">
            <span className="quantity-label">Количество:</span>
            <div className="quantity-controls">
              <button onClick={handleDecrement} className="quantity-btn">
                <i className="fas fa-minus"></i>
              </button>
              <span className="quantity-value">{quantity}</span>
              <button onClick={handleIncrement} className="quantity-btn">
                <i className="fas fa-plus"></i>
        </button>
            </div>
          </div>
          
          <div className="modal-total">
            <span className="total-label">Итого:</span>
            <span className="total-value">{totalPrice} ₽</span>
          </div>
          
          <button 
            className="modal-add-btn"
            onClick={() => onAddToCart(quantity)}
          >
            <i className="fas fa-shopping-cart"></i>
            Добавить в корзину
        </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
