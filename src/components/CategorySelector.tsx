import React from "react";
import "//CategorySelector.css";

const categories = ["Основное", "Десерты", "Напитки"];

export default function CategorySelector({ category, setCategory }) {
  return (
    <div className="container">
      {categories.map((cat) => {
        const isActive = category === cat;
        return (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`button ${isActive ? "active" : ""}`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
