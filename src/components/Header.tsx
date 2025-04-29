import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#8B4513] text-white py-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-4xl font-bold text-shadow-lg hover:text-[#D2B48C] transition-colors">
          Восток
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="/promotions" className="text-lg hover:text-[#D2B48C] transition-colors">Акции</Link>
            </li>
            <li>
              <Link href="/about" className="text-lg hover:text-[#D2B48C] transition-colors">О нас</Link>
            </li>
            <li>
              <Link href="/menu" className="text-lg hover:text-[#D2B48C] transition-colors">Меню</Link>
            </li>
            <li>
              <Link href="/contacts" className="text-lg hover:text-[#D2B48C] transition-colors">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
