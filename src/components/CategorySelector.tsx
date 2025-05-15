import React from "react";

const categories = ["Основное", "Десерты", "Напитки"];

export default function CategorySelector({ category, setCategory }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 24,
        margin: "20px 0 40px",
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          style={{
            padding: "10px 30px",
            borderRadius: 30,
            fontWeight: 600,
            border: "2px solid #8B4513",
            backgroundColor: category === cat ? "#8B4513" : "white",
            color: category === cat ? "white" : "#8B4513",
            cursor: "pointer",
            boxShadow:
              category === cat
                ? "0 6px 12px rgba(0,0,0,0.3)"
                : "0 2px 6px rgba(0,0,0,0.1)",
            transform: category === cat ? "scale(1.05)" : "scale(1)",
            transition: "all 0.3s ease",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
