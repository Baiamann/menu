"use client";

import React from "react";
import "./about.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Наша История</h1>
          <p>Добро пожаловать в Gourmet Haven - место, где кулинарное искусство встречается с теплой атмосферой</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-content">
          <div className="story-text">
            <h2>Наша История</h2>
            <p>
              Gourmet Haven был основан в 2010 году с простой миссией: создавать незабываемые кулинарные впечатления. 
              За эти годы мы превратились из маленького семейного ресторана в одно из самых любимых мест для гурманов.
            </p>
            <p>
              Наша команда шеф-поваров, каждый из которых имеет многолетний опыт работы в лучших ресторанах мира, 
              создает уникальные блюда, сочетающие традиционные рецепты с современными техниками.
            </p>
          </div>
          <div className="story-image">
            <img src="/images/restaurant-interior.jpg" alt="Интерьер ресторана" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Наши Ценности</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🌟</div>
            <h3>Качество</h3>
            <p>Мы используем только свежие, отборные ингредиенты для создания наших блюд</p>
          </div>
          <div className="value-card">
            <div className="value-icon">👨‍🍳</div>
            <h3>Мастерство</h3>
            <p>Наши повара постоянно совершенствуют свои навыки и создают новые блюда</p>
          </div>
          <div className="value-card">
            <div className="value-icon">❤️</div>
            <h3>Страсть</h3>
            <p>Мы влюблены в то, что делаем, и это чувствуется в каждом блюде</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Наша Команда</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/chef-1.jpg" alt="Шеф-повар" />
            <h3>Александр Петров</h3>
            <p>Главный шеф-повар</p>
          </div>
          <div className="team-member">
            <img src="/images/chef-2.jpg" alt="Шеф-повар" />
            <h3>Мария Иванова</h3>
            <p>Кондитер</p>
          </div>
          <div className="team-member">
            <img src="/images/chef-3.jpg" alt="Шеф-повар" />
            <h3>Дмитрий Смирнов</h3>
            <p>Су-шеф</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 