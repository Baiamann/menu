import React from 'react';
import styles from './DessertsList.module.css';

const DessertsList = () => {
  const desserts = [
    {
      id: 1,
      name: 'Тирамису',
      description: 'Классический итальянский десерт с кофе и маскарпоне',
      price: 600,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 2,
      name: 'Чизкейк',
      description: 'Нежный чизкейк с ягодным соусом',
      price: 500,
      image: 'https://images.unsplash.com/photo-1568659358810-bdbdbd9b0c7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 3,
      name: 'Крем-брюле',
      description: 'Французский десерт с карамельной корочкой',
      price: 550,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ];

  return (
    <section className={styles.desserts}>
      <h2>Десерты</h2>
      <div className={styles.dessertsItems}>
        {desserts.map((dessert) => (
          <div key={dessert.id} className={styles.dessertItem}>
            <img src={dessert.image} alt={dessert.name} />
            <h3>{dessert.name}</h3>
            <p>{dessert.description}</p>
            <p className={styles.price}>{dessert.price} ₽</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DessertsList; 