import React, { useState } from "react";
import "./MenuList.css";

const menuItems = [
  {
    id: 1,
    name: "Стейк Рибай",
    description: "Нежный говяжий стейк с соусом из красного вина",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    name: "Паста Карбонара",
    description: "Спагетти с беконом, яйцом и пармезаном",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    name: "Салат Цезарь",
    description: "Салат с курицей, крутонами и соусом цезарь",
    price: 800,
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const MenuList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState(1);

  const openModal = (item: MenuItem) => {
    setSelectedItem(item);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const addToCart = () => {
    if (selectedItem) {
      alert(`Добавлено в корзину: ${quantity} × "${selectedItem.name}"`);
      closeModal();
    }
  };

  return (
    <section className="menu">
      <h2>Основные блюда</h2>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="menu-item"
            onClick={() => openModal(item)}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">{item.price} ₽</p>
          </div>
        ))}
      </div>

      {isModalOpen && selectedItem && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              style={{
                width: "100%",
                borderRadius: "4px",
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
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.5rem",
                  marginBottom: "1rem",
                }}
              />
            </label>

            <div className="modalButtons">
              <button onClick={addToCart}>Добавить в корзину</button>
              <button onClick={closeModal}>Отмена</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MenuList;
