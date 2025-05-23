"use client";

import React, { useState } from 'react';
import { useCart } from '../app/context/CartContext';
import Modal from './Modal';
import './MenuSection.css';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  weight?: string;
  cookingTime?: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const { addToCart } = useCart();

  const handleOpenModal = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleAddToCart = (quantity: number) => {
    if (selectedItem) {
      addToCart(selectedItem, quantity);
      handleCloseModal();
    }
  };

  return (
    <section className="menu-section">
      <h2 className="menu-section-title">{title}</h2>
      <div className="menu-grid">
        {items.map((item) => (
          <div key={item.id} className="menu-item" onClick={() => handleOpenModal(item)}>
            <div className="menu-item-image">
              <img src={item.imageUrl} alt={item.name} />
              <span className="menu-item-category">{item.category}</span>
            </div>
            <div className="menu-item-content">
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-item-description">{item.description}</p>
              {item.weight && item.cookingTime && (
                <div className="menu-item-details">
                  <div className="menu-item-weight">
                    <i className="fas fa-weight-hanging"></i>
                    <span>{item.weight}</span>
                  </div>
                  <div className="menu-item-time">
                    <i className="fas fa-clock"></i>
                    <span>{item.cookingTime}</span>
                  </div>
                </div>
              )}
              <div className="menu-item-footer">
                <div className="menu-item-price">
                  <span className="current-price">{item.price} ₽</span>
                </div>
                <button className="add-to-cart-btn">
                  <i className="fas fa-shopping-cart"></i>
                  В корзину
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          itemName={selectedItem.name}
          itemImage={selectedItem.imageUrl}
          itemPrice={selectedItem.price}
          itemDescription={selectedItem.description}
          onAddToCart={handleAddToCart}
        />
      )}
    </section>
  );
};

export default MenuSection; 