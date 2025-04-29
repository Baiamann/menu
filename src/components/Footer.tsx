import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#8B4513] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Восток</h3>
            <p className="text-[#D2B48C]">Ваш любимый ресторан китайской кухни</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-4">
              <Link href="/promotions" className="hover:text-[#D2B48C] transition-colors">Акции</Link>
              <Link href="/about" className="hover:text-[#D2B48C] transition-colors">О нас</Link>
              <Link href="/menu" className="hover:text-[#D2B48C] transition-colors">Меню</Link>
              <Link href="/contacts" className="hover:text-[#D2B48C] transition-colors">Контакты</Link>
            </div>
            <p className="text-sm text-[#D2B48C]">© 2024 Восток. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 