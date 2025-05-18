import React, { useState } from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName: string;
  onAddToCart: (quantity: number) => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  itemName,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAdd = () => {
    onAddToCart(quantity);
    setQuantity(1);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Добавить в корзину: {itemName}</h3>
        <div className="quantity-control">
          <button onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
        </div>
        <button className="add-btn" onClick={handleAdd}>
          Add to Cart
        </button>
        <button className="close-btn" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Modal;
