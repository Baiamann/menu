"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import "./CorzinaPage.css"; // можешь создать CSS-файл или удалить, если не нужен

const CorzinaPage: React.FC = () => {
  const { cart, removeFromCart, addToCart } = useCart();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cart.reduce(
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

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !address || !phone) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="container">
        <h2>Спасибо за заказ, {name}!</h2>
        <p>Телефон: {phone}</p>
        <p>Адрес: {address}</p>
        <Link href="/" className="link-home">
          Вернуться на главную
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Ваша корзина</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">
          Корзина пуста.{" "}
          <Link href="/" className="link-home">
            Перейти в меню
          </Link>
        </p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.name} width={100} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="cart-item-controls">
                    <div className="quantity-controls">
                      <button
                        onClick={() => handleQuantityChange(item, item.quantity - 1)}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                    <p className="item-total">
                      {item.price} ₽ × {item.quantity} ={" "}
                      <strong>{item.price * item.quantity} ₽</strong>
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <p className="total-price">Итого: {totalPrice} ₽</p>

          <form onSubmit={handleOrder} className="order-form">
            <h3>Оформление заказа</h3>

            <label htmlFor="name">Имя:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="phone">Телефон:</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <label htmlFor="address">Адрес доставки:</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />

            <button type="submit">Оформить заказ</button>
          </form>
        </>
      )}
    </div>
  );
};

export default CorzinaPage;
