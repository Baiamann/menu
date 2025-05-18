"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import SpecialOffers from "@/components/SpecialOffers";
import MenuList from "@/components/MenuList";
import DrinksList from "@/components/DrinksList";
import DessertsList from "@/components/DessertsList";
import SnacksList from "@/components/SnacksList";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

import "./page.css";

export default function Home() {
  const [category, setCategory] = useState("Основное");

  return (
    <main className="min-h-screen pt-24 bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="title">Welcome to Gourmet Haven</h2>
          <p className="subtitle">Discover the art of fine dining</p>
        </div>

        <div className="filter-buttons">
          {["Основное", "Десерты", "Напитки", "Закуски", "Спецпредложения"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`filter-btn ${category === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {category === "Спецпредложения" && <SpecialOffers />}
        {category === "Основное" && (
          <>
            <Menu />
          </>
        )}
        {category === "Десерты" && <DessertsList />}
        {category === "Напитки" && <DrinksList />}
        {category === "Закуски" && <SnacksList />}
      </div>
      <Footer />
    </main>
  );
}
