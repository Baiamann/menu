import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Наше меню</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Закуски */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-[#8B4513]">Закуски</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>Весенние роллы</span>
              <span className="text-[#8B4513]">350 сом</span>
            </li>
            <li className="flex justify-between">
              <span>Креветки в кляре</span>
              <span className="text-[#8B4513]">450 сом</span>
            </li>
            <li className="flex justify-between">
              <span>Курица в кисло-сладком соусе</span>
              <span className="text-[#8B4513]">380 сом</span>
            </li>
          </ul>
        </div>

        {/* Основные блюда */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-[#8B4513]">Основные блюда</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>Утка по-пекински</span>
              <span className="text-[#8B4513]">1200 сом</span>
            </li>
            <li className="flex justify-between">
              <span>Лапша с говядиной</span>
              <span className="text-[#8B4513]">550 сом</span>
            </li>
            <li className="flex justify-between">
              <span>Жареный рис с морепродуктами</span>
              <span className="text-[#8B4513]">600 сом</span>
            </li>
          </ul>
        </div>

        {/* Десерты */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-[#8B4513]">Десерты</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>Мороженое с фруктами</span>
              <span className="text-[#8B4513]">250 сом</span>
            </li>
            <li className="flex justify-between">
              <span>Пирожное "Павлова"</span>
              <span className="text-[#8B4513]">300 сом</span>
            </li>
            <li className="flex justify-between">
              <span>Чизкейк</span>
              <span className="text-[#8B4513]">350 сом</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link 
          href="/reservation" 
          className="inline-block bg-[#8B4513] text-white px-6 py-3 rounded-md hover:bg-[#A0522D] transition-colors"
        >
          Забронировать столик
        </Link>
      </div>
    </div>
  );
};

export default Menu; 