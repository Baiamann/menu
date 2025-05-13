import React from 'react';
import styles from './MenuList.module.css';

const MenuList = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Стейк Рибай',
      description: 'Нежный говяжий стейк с соусом из красного вина',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 2,
      name: 'Паста Карбонара',
      description: 'Спагетти с беконом, яйцом и пармезаном',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 3,
      name: 'Салат Цезарь',
      description: 'Салат с курицей, крутонами и соусом цезарь',
      price: 800,
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ];

  return (
    <section className={styles.menu}>
      <h2>Основные блюда</h2>
      <div className={styles.menuItems}>
        {menuItems.map((item) => (
          <div key={item.id} className={styles.menuItem}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className={styles.price}>{item.price} ₽</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuList; 