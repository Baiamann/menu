import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#4E2A1E] to-[#8B4513] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-[#FFDAB9] border-b border-[#FFDAB9] pb-2">
            Контакты
          </h3>
          <p className="text-sm">г. Каракол, ул. Примерная, 123</p>
          <p className="text-sm">Телефон: +996 (555) 555 555</p>
          <p className="text-sm">Email: info@vostok.ru</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-[#FFDAB9] border-b border-[#FFDAB9] pb-2">
            Часы работы
          </h3>
          <p className="text-sm">Пн – Пт: 11:00 – 23:00</p>
          <p className="text-sm">Сб – Вс: 11:00 – 00:00</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#FFDAB9] border-b border-[#FFDAB9] pb-2">
            Мы в соцсетях
          </h3>
          <div className="flex flex-col space-y-2">
            <a
              href="#"
              className="text-sm hover:text-[#FFE4B5] transition duration-300 underline underline-offset-4 decoration-[#FFDAB9] hover:decoration-[#FFE4B5]"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-sm hover:text-[#FFE4B5] transition duration-300 underline underline-offset-4 decoration-[#FFDAB9] hover:decoration-[#FFE4B5]"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-sm hover:text-[#FFE4B5] transition duration-300 underline underline-offset-4 decoration-[#FFDAB9] hover:decoration-[#FFE4B5]"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-[#A0522D] pt-6 text-center text-sm text-gray-200 tracking-wide">
        &copy; {new Date().getFullYear()} Восток — вкус, который вдохновляет.
      </div>
    </footer>
  );
};

export default Footer;
