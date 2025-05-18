"use client";

import React from "react";

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
    imageUrl:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Манты",
    description: "Сочные манты с мясом и луком",
    price: 380,
    imageUrl:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb29?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Шашлык",
    description: "Шашлык из баранины на углях",
    price: 520,
    imageUrl:
      "https://images.unsplash.com/photo-1543352634-68f0a8e6c02b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Лагман",
    description: "Домашний лагман с говядиной и овощами",
    price: 400,
    imageUrl:
      "https://images.unsplash.com/photo-1605478020978-041e49b53817?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Самса",
    description: "Сочная самса из тандыра с мясом и луком",
    price: 150,
    imageUrl:
      "https://images.unsplash.com/photo-1617191510540-3f8d40d97a74?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Курдюк",
    description: "Жареный курдюк на шампуре",
    price: 300,
    imageUrl:
      "https://images.unsplash.com/photo-1571091718767-8b7e39cd02e6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Чай зелёный",
    description: "Ароматный зелёный чай в пиале",
    price: 70,
    imageUrl:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Лепёшка",
    description: "Свежая лепёшка из тандыра",
    price: 50,
    imageUrl:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
  },
];

import "./Menu.css";

const Menu: React.FC = () => {
  return (
    <section className="menu">
      <h2 className="menu-title">Наше меню</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <article key={item.id} className="menu-card">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="menu-card-image"
              loading="lazy"
              width={320}
              height={180}
            />
            <div className="menu-card-content">
              <h3 className="menu-card-title">{item.name}</h3>
              <p className="menu-card-description">{item.description}</p>
              <p className="menu-card-price">{item.price} ₽</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Menu;
