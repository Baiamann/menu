import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#8B4513] text-white py-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        {/* Верхняя панель с акциями */}
        <div className="bg-[#D2B48C] text-[#8B4513] py-2 px-4 rounded-t-lg mb-4">
          <p className="text-center font-bold">🔥 Акция! При заказе от 2000₽ - бесплатная доставка!</p>
        </div>
        
        {/* Основная навигация */}
        <div className="flex items-center justify-between">
          <Link href="/" className="text-4xl font-bold text-shadow-lg hover:text-[#D2B48C] transition-colors">
            Восток
          </Link>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-lg hover:text-[#D2B48C] transition-colors">Главная</Link>
              </li>
              <li>
                <Link href="/menu" className="text-lg hover:text-[#D2B48C] transition-colors">Меню</Link>
              </li>
              <li>
                <Link href="/about" className="text-lg hover:text-[#D2B48C] transition-colors">О нас</Link>
              </li>
              <li>
                <Link href="/contacts" className="text-lg hover:text-[#D2B48C] transition-colors">Контакты</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 