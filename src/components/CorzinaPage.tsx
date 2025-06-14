"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import "./CorzinaPage.css";

const CorzinaPage: React.FC = () => {
  const { items, removeFromCart, addToCart } = useCart();

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

  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (item: any, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(item.id);
    } else {
      removeFromCart(item.id);
      addToCart(item, newQuantity);
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
  };

  if (orderPlaced) {
    return (
      <div className="order-success">
        <div className="success-content">
          <h2>Спасибо за заказ!</h2>
          <p>Мы свяжемся с вами в ближайшее время для подтверждения.</p>
          <div className="order-details">
            <h3>Детали заказа:</h3>
            <p>
              <strong>Имя:</strong> {formData.firstName} {formData.lastName}
            </p>
            <p>
              <strong>Телефон:</strong> {formData.phone}
            </p>
            <p>
              <strong>Адрес:</strong> {formData.address}
            </p>
            <p>
              <strong>Город:</strong> {formData.city}
            </p>
            <p>
              <strong>Сумма заказа:</strong> {totalPrice} ₽
            </p>
          </div>
          <Link href="/" className="back-to-home">
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-content">
        <h2 className="cart-title">Корзина</h2>

        {items.length === 0 ? (
          <div className="empty-cart">
            <p>Ваша корзина пуста</p>
            <Link href="/" className="continue-shopping">
              Перейти в меню
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items-section">
              <div className="cart-items">
                {items.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.imageUrl} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-description">{item.description}</p>
                      <div className="item-controls">
                        <div className="quantity-controls">
                          <button
                            onClick={() =>
                              handleQuantityChange(item, item.quantity - 1)
                            }
                            className="quantity-btn"
                          >
                            -
                          </button>
                          <span className="quantity">{item.quantity}</span>
                          <button
                            onClick={() =>
                              handleQuantityChange(item, item.quantity + 1)
                            }
                            className="quantity-btn"
                          >
                            +
                          </button>
                        </div>
                        <div className="price-controls">
                          <span className="item-price">{item.price} ₽</span>
                          <span className="item-total">
                            {item.price * item.quantity} ₽
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="remove-btn"
                          >
                            Удалить
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-section">
              <div className="order-summary">
                <h3>Сводка заказа</h3>
                <div className="summary-row">
                  <span>Подытог:</span>
                  <span>{totalPrice} ₽</span>
                </div>
                <div className="summary-row">
                  <span>Доставка:</span>
                  <span>Бесплатно</span>
                </div>
                <div className="summary-row total">
                  <span>Итого:</span>
                  <span>{totalPrice} ₽</span>
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
        )}
      </div>
    </div>
  );
};

export default CorzinaPage;
