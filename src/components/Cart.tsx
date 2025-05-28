"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import Rating from "./Rating";
import "./Cart.css";
import { useRouter } from "next/navigation";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  description: string;
  rating: number;
}

const OrderSuccess = ({ orderDetails, onClose }: { orderDetails: any, onClose: () => void }) => {
  const deliveryTime = new Date();
  deliveryTime.setMinutes(deliveryTime.getMinutes() + 30);

  return (
    <div className="order-success">
      <div className="success-content">
        <div className="success-icon">✓</div>
        <h2>Заказ успешно оформлен!</h2>
        <div className="delivery-time">
          <p>Ожидаемое время доставки:</p>
          <p className="delivery-time-value">{deliveryTime.toLocaleTimeString()}</p>
          <p className="delivery-note">(примерно через 30 минут)</p>
        </div>
        <div className="order-details">
          <h3>Детали заказа</h3>
          <div className="detail-row">
            <span className="detail-label">Имя:</span>
            <span className="detail-value">{orderDetails.name}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Телефон:</span>
            <span className="detail-value">{orderDetails.phone}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Адрес:</span>
            <span className="detail-value">{orderDetails.address}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Комментарий:</span>
            <span className="detail-value">{orderDetails.comment || "Нет"}</span>
          </div>
          
          <div className="order-items">
            <h4>Ваш заказ:</h4>
            {orderDetails.items.map((item: CartItem) => (
              <div key={item.id} className="order-item">
                <div className="order-item-details">
                  <span className="order-item-name">{item.name} x {item.quantity}</span>
                  <Rating value={item.rating} />
                </div>
                <span className="order-item-price">{item.price * item.quantity} ₽</span>
              </div>
            ))}
            <div className="order-total">
              <span>Итого:</span>
              <span>{orderDetails.total} ₽</span>
            </div>
          </div>
        </div>
        <div className="delivery-info">
          <p>Мы свяжемся с вами для подтверждения заказа</p>
          <p>Спасибо за заказ! Приятного аппетита! 🍝</p>
        </div>
        <a href="/" className="back-to-home" onClick={onClose}>
          Вернуться на главную
        </a>
      </div>
    </div>
  );
};

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, formatPrice } = useCart();
  const router = useRouter();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  });

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    } else {
      removeFromCart(id);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Пожалуйста, заполните все обязательные поля.");
      return;
    }
    setOrderPlaced(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      notes: "",
    });
  };

  if (orderPlaced) {
    return (
      <OrderSuccess orderDetails={{
        name: `${formData.firstName} ${formData.lastName}`,
        phone: formData.phone,
        address: formData.address,
        comment: formData.notes,
        items: items,
        total: getTotalPrice()
      }} onClose={() => setOrderPlaced(false)} />
    );
  }

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Корзина пуста</h2>
        <p>Добавьте товары из меню</p>
        <button onClick={() => router.push("/")} className="back-to-menu">
          Перейти в меню
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Корзина</h2>
      <div className="cart-layout">
        <div className="cart-items-section">
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.imageUrl} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-description">{item.description}</p>
                  <p className="cart-item-price">{formatPrice(item.price)}</p>
                  <div className="cart-item-quantity">
                    <button
                      className="quantity-button"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="quantity-number">{item.quantity}</span>
                    <button
                      className="quantity-button"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="order-section">
          <div className="order-summary">
            <h3>Сводка заказа</h3>
            <div className="summary-row">
              <span>Подытог:</span>
              <span>{formatPrice(getTotalPrice())}</span>
            </div>
            <div className="summary-row">
              <span>Доставка:</span>
              <span>Бесплатно</span>
            </div>
            <div className="summary-row total">
              <span>Итого:</span>
              <span>{formatPrice(getTotalPrice())}</span>
            </div>
          </div>

          <form onSubmit={handleOrder} className="order-form">
            <h3>Оформление заказа</h3>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Имя *</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Фамилия *</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Телефон *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Адрес доставки *</label>
              <input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">Город</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="postalCode">Индекс</label>
                <input
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="notes">Примечания к заказу</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Например: не звонить в дверь, позвонить по телефону"
              />
            </div>

            <button type="submit" className="submit-order">
              Оформить заказ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
