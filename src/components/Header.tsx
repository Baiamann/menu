"use client";

import React from "react";
import Link from "next/link";
import "./Header.css";
import { useCart } from "@/app/context/CartContext";

const Header: React.FC = () => {
  const { items } = useCart();
  const cartCount =
    items?.reduce((total, item) => total + item.quantity, 0) ?? 0;

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Gourmet Haven</Link>
        </div>
        <nav>
          <ul className="navList">
            <li className="navItem">
              <Link href="/">Главная</Link>
            </li>
            <li className="navItem">
              <Link href="/about">О нас</Link>
            </li>
            <li className="navItem">
              <Link href="/corzina" className="cart-link">
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
