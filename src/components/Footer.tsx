import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>О нас</h3>
          <p>
            Восток — уютный ресторан, где каждая деталь пропитана атмосферой
            восточного гостеприимства. Мы готовим с душой и для души.
          </p>
        </div>

        <div className="footer-column">
          <h3>Контакты</h3>
          <p>г. Каракол, ул. Примерная, 123</p>
          <p>Тел: +996 (555) 555 555</p>
          <p>Email: info@vostok.ru</p>
        </div>

        <div className="footer-column">
          <h3>Информация</h3>
          <p>Доставка: 11:00 – 22:30</p>
          <p>Бронирование столов: круглосуточно</p>
          <p>Подарочные сертификаты</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Восток — вкус, который вдохновляет.
        Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
