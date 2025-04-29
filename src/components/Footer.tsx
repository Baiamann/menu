import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#8B4513] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p>г. Москва, ул. Примерная, 123</p>
            <p>Телефон: +7 (999) 123-45-67</p>
            <p>Email: info@vostok.ru</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Часы работы</h3>
            <p>Пн-Пт: 11:00 - 23:00</p>
            <p>Сб-Вс: 11:00 - 00:00</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#D2B48C]">Instagram</a>
              <a href="#" className="hover:text-[#D2B48C]">Facebook</a>
              <a href="#" className="hover:text-[#D2B48C]">Telegram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 