"use client";

import React from "react";
import Link from "next/link";
import "./Header.css";
import { useCart } from "@/app/context/CartContext";

const Header = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

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
            <li className="navItem">
              <Link href="/corzina">
                🛒 <span className="cart-count">{cartCount}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
