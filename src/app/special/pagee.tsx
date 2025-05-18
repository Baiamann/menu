"use client";

import React from "react";
import Header from "@/components/Header";
import "./SpecialPage.css";

interface Item {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  image: string;
}

interface Category {
  id: number;
  name: string;
  items: Item[];
}

const specialCategories: Category[] = [
  {
    id: 1,
    name: "Основные блюда",
    items: [
      {
        id: 1,
        name: "Стейк Рибай",
        description: "Нежный говяжий стейк с соусом из красного вина",
        originalPrice: 3000,
        discountPrice: 2500,
        image:
          "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&auto=format&fit=crop&q=80",
      },
      {
        id: 2,
        name: "Паста с морепродуктами",
        description: "Спагетти с креветками, мидиями и соусом песто",
        originalPrice: 1800,
        discountPrice: 1500,
        image:
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80",
      },
      {
        id: 3,
        name: "Цыплёнок гриль",
        description: "Сочная курица на гриле с травами",
        originalPrice: 1600,
        discountPrice: 1300,
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80",
      },
      {
        id: 4,
        name: "Лосось на пару",
        description: "Филе лосося с лимонным соусом",
        originalPrice: 2200,
        discountPrice: 1900,
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: 2,
    name: "Закуски",
    items: [
      {
        id: 5,
        name: "Брускетта с томатами",
        description: "Итальянские тосты с томатами и базиликом",
        originalPrice: 600,
        discountPrice: 450,
        image:
          "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&auto=format&fit=crop&q=80",
      },
      {
        id: 6,
        name: "Карпаччо из говядины",
        description: "Тонко нарезанная говядина с рукколой",
        originalPrice: 800,
        discountPrice: 650,
        image:
          "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&auto=format&fit=crop&q=80",
      },
      {
        id: 7,
        name: "Креветки в чесночном соусе",
        description: "Обжаренные креветки с соусом из чеснока и лимона",
        originalPrice: 900,
        discountPrice: 700,
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80",
      },
      {
        id: 8,
        name: "Мини-сэндвичи с курицей",
        description: "Нежные сэндвичи с курицей и овощами",
        originalPrice: 500,
        discountPrice: 400,
        image:
          "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: 3,
    name: "Десерты",
    items: [
      {
        id: 9,
        name: "Тирамису",
        description: "Классический итальянский десерт",
        originalPrice: 700,
        discountPrice: 550,
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=80",
      },
      {
        id: 10,
        name: "Чизкейк с ягодным соусом",
        description: "Нежный чизкейк с лесными ягодами",
        originalPrice: 600,
        discountPrice: 450,
        image:
          "https://images.unsplash.com/photo-1568659358810-bdbdbd9b0c7f?w=600&auto=format&fit=crop&q=80",
      },
      {
        id: 11,
        name: "Шоколадный фондан",
        description: "Тёплый шоколадный кекс с жидким центром",
        originalPrice: 750,
        discountPrice: 600,
        image:
          "https://images.unsplash.com/photo-1542831371-d531d36971e6?w=600&auto=format&fit=crop&q=80",
      },
      {
        id: 12,
        name: "Фруктовый салат",
        description: "Свежие фрукты с мятным сиропом",
        originalPrice: 500,
        discountPrice: 400,
        image:
          "https://images.unsplash.com/photo-1505253210343-69b8b9ff1d20?w=600&auto=format&fit=crop&q=80",
      },
    ],
  },
];

const SpecialPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <h1 className="pageTitle">
            <span role="img" aria-label="star">
              🌟
            </span>{" "}
            Специальные предложения
          </h1>
          {specialCategories.map((category) => (
            <section key={category.id} className="category">
              <h2 className="categoryTitle">{category.name}</h2>
              <div className="itemsGrid">
                {category.items.map((item) => (
                  <article key={item.id} className="card">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cardImage"
                    />
                    <div className="cardContent">
                      <h3 className="cardTitle">{item.name}</h3>
                      <p className="cardDesc">{item.description}</p>
                      <div className="cardPrices">
                        <span className="originalPrice">
                          {item.originalPrice} ₽
                        </span>
                        <span className="discountPrice">
                          {item.discountPrice} ₽
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
};

export default SpecialPage;
