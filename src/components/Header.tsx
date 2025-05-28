"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./Header.css";
import { useCart } from "../app/context/CartContext";

const Header: React.FC = () => {
  const { items } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Gourmet Haven</Link>
        </div>
        <button className="mobile-menu-button" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <nav>
          <ul className={`navList ${isMenuOpen ? "active" : ""}`}>
            <li className="navItem">
              <Link href="/">Главная</Link>
            </li>
            <li className="navItem">
              <Link href="/about">О нас</Link>
            </li>
            <li className="navItem">
              <Link href="/corzina">
                <button className="cart-button">
                  <span className="cart-emoji">🛒</span>
                  {totalItems > 0 && (
                    <span className="cart-counter">{totalItems}</span>
                  )}
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
