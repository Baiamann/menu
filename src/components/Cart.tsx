"use client";

import React from 'react';
import { useCart } from '../app/context/CartContext';
import './Cart.css';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  description: string;
}

const Cart = () => {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
  };

  return (
    <div className="cart-container">
      <div className="cart-content">
        <h2 className="cart-title">Корзина</h2>
        
        {items.length === 0 ? (
          <div className="cart-empty">
            <i className="fas fa-shopping-cart"></i>
            <p>Ваша корзина пуста</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item: CartItem) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.imageUrl} alt={item.name} />
                  </div>
                  
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">{item.price} ₽</p>
                    
                    <div className="cart-item-quantity">
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="quantity-btn"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  
                  <div className="cart-item-total">
                    <span className="total-price">{item.price * item.quantity} ₽</span>
                    <button 
                      onClick={() => handleRemoveItem(item.id)}
                      className="remove-btn"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Подытог:</span>
                <span>{total} ₽</span>
              </div>
              <div className="summary-row">
                <span>Доставка:</span>
                <span>Бесплатно</span>
              </div>
              <div className="summary-row total">
                <span>Итого:</span>
                <span>{total} ₽</span>
              </div>
            </div>

            <div className="cart-checkout">
              <button className="checkout-btn">
                <i className="fas fa-credit-card"></i>
                Оформить заказ
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart; 