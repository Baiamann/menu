"use client";

import React from "react";
import MenuImage from "./MenuImage";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Плов по-узбекски",
    description: "Традиционный узбекский плов с бараниной и желтой морковью",
    price: 450,
    imageUrl: "/images/plov.jpg",
  },
  {
    id: 2,
    name: "Манты",
    description: "Сочные манты с мясом и луком",
    price: 380,
    imageUrl: "/images/manty.jpg",
  },
  {
    id: 3,
    name: "Шашлык",
    description: "Шашлык из баранины на углях",
    price: 520,
    imageUrl: "/images/shashlik.jpg",
  },
  {
    id: 4,
    name: "Лагман",
    description: "Домашний лагман с говядиной и овощами",
    price: 400,
    imageUrl: "/images/lagman.jpg",
  },
  {
    id: 5,
    name: "Самса",
    description: "Сочная самса из тандыра с мясом и луком",
    price: 150,
    imageUrl: "/images/samsa.jpg",
  },
  {
    id: 6,
    name: "Курдюк",
    description: "Жареный курдюк на шампуре",
    price: 300,
    imageUrl: "/images/kurdyuk.jpg",
  },
  {
    id: 7,
    name: "Чай зелёный",
    description: "Ароматный зелёный чай в пиале",
    price: 70,
    imageUrl: "/images/tea.jpg",
  },
  {
    id: 8,
    name: "Лепёшка",
    description: "Свежая лепёшка из тандыра",
    price: 50,
    imageUrl: "/images/lepyoshka.jpg",
  },
];

const Menu: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-[#4E2A1E] mb-12">
        Наше меню
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <MenuImage dishName={item.name} imageUrl={item.imageUrl} />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-[#4E2A1E]">{item.name}</h3>
              <p className="text-gray-600 mt-2 flex-grow">{item.description}</p>
              <p className="text-[#8B4513] text-xl font-bold mt-4">
                {item.price} ₽
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
