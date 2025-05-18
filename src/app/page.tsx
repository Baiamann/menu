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

export default function Home() {
  const [category, setCategory] = useState("Основное");

  return (
    <main className="min-h-screen pt-24 bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#8B4513] mb-4">
            Welcome to Gourmet Haven
          </h2>
          <p className="text-xl text-gray-600">
            Discover the art of fine dining
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-10">
          {["Основное", "Десерты", "Напитки", "Закуски", "Спецпредложения"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`
                px-8 py-3 rounded-full font-semibold transition-all duration-300
                shadow-md
                focus:outline-none focus:ring-4 focus:ring-[#8B4513]/50
                ${
                  category === cat
                    ? "bg-[#8B4513] text-white scale-105 shadow-lg"
                    : "bg-white text-[#8B4513] hover:bg-[#8B4513] hover:text-white hover:scale-105"
                }
              `}
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
            <MenuList />
            <SnacksList />
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
