"use client"; // Важно! Эта строка должна быть первой в файле

import React, { useState } from "react";
import Link from "next/link";
import "./Header.css";

const Header = () => {
  const [cartCount, setCartCount] = useState(1);

  const handleCartClick = () => {
    console.log("Корзина нажата");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Gourmet Haven</Link>
        </div>
        <nav className="nav">
          <ul className="navList">
            <li className="navItem">
              <Link href="/">Home</Link>
            </li>
            <li className="navItem">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div
          className="cart-icon"
          onClick={handleCartClick}
          style={{ cursor: "pointer", position: "relative" }}
        >
          🛒
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;
