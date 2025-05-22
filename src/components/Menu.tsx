"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext"; // импортируем хук для корзины
import "./Menu.css";

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
    name: "Хинкали",
    description: "Грузинские хинкали с пряным мясным фаршем",
    price: 390,
    imageUrl:
      "https://images.unsplash.com/photo-1617196037254-3c622fa89738?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Суп харчо",
    description: "Острый суп с говядиной, рисом и зеленью",
    price: 320,
    imageUrl:
      "https://images.unsplash.com/photo-1633339141105-6e8cbe46549f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Чебурек",
    description: "Жареный чебурек с сочной начинкой из мяса",
    price: 180,
    imageUrl:
      "https://images.unsplash.com/photo-1662371982871-688f7c038d77?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Кебаб",
    description: "Кебаб из курицы с овощами и специями",
    price: 410,
    imageUrl:
      "https://images.unsplash.com/photo-1603398738370-f57b73a83399?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Чахохбили",
    description: "Курица тушеная с луком, помидорами и специями",
    price: 370,
    imageUrl:
      "https://images.unsplash.com/photo-1598514982322-51e5d26dd553?auto=format&fit=crop&w=800&q=80",
  },
];

const Menu: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart(); // достаем функцию добавления в корзину из контекста

  const openModal = (item: MenuItem) => {
    setSelectedItem(item);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleAddToCart = () => {
    if (selectedItem && quantity > 0) {
      addToCart(selectedItem, quantity);
      closeModal();
    }
  };

  return (
    <section className="menu">
      <h2 className="menu-title">Основные блюда</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <article
            key={item.id}
            className="menu-card"
            onClick={() => openModal(item)}
          >
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

      {isModalOpen && selectedItem && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedItem.imageUrl}
              alt={selectedItem.name}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <h3>{selectedItem.name}</h3>
            <p>{selectedItem.description}</p>
            <p>Цена: {selectedItem.price} ₽</p>

            <label>
              Количество:
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                style={{ marginLeft: "0.5rem", width: "60px" }}
              />
            </label>

            <div className="modalButtons" style={{ marginTop: "1rem" }}>
              <button onClick={handleAddToCart}>Добавить в корзину</button>
              <button onClick={closeModal} style={{ marginLeft: "1rem" }}>
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;
