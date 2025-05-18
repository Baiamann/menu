import React from "react";
import Link from "next/link";
import "./Header.css"; // обычный css

const Header = () => {
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
              <Link href="/special">Special Offers</Link>
            </li>
            <li className="navItem">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
