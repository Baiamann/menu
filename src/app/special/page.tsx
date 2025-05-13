'use client';

import React from 'react';
import Header from '@/components/Header';
import styles from './special.module.css';

const SpecialPage = () => {
  const specialCategories = [
    {
      id: 1,
      name: 'Основные блюда',
      items: [
        {
          id: 1,
          name: 'Стейк Рибай',
          description: 'Нежный говяжий стейк с соусом из красного вина',
          originalPrice: 3000,
          discountPrice: 2500,
          image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
        },
        {
          id: 2,
          name: 'Паста с морепродуктами',
          description: 'Спагетти с креветками, мидиями и соусом песто',
          originalPrice: 1800,
          discountPrice: 1500,
          image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
        }
      ]
    },
    {
      id: 2,
      name: 'Закуски',
      items: [
        {
          id: 3,
          name: 'Брускетта с томатами',
          description: 'Итальянские тосты с томатами и базиликом',
          originalPrice: 600,
          discountPrice: 450,
          image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
        },
        {
          id: 4,
          name: 'Карпаччо',
          description: 'Тонко нарезанная говядина с рукколой',
          originalPrice: 800,
          discountPrice: 650,
          image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
        }
      ]
    },
    {
      id: 3,
      name: 'Десерты',
      items: [
        {
          id: 5,
          name: 'Тирамису',
          description: 'Классический итальянский десерт',
          originalPrice: 700,
          discountPrice: 550,
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
        },
        {
          id: 6,
          name: 'Чизкейк',
          description: 'Нежный чизкейк с ягодным соусом',
          originalPrice: 600,
          discountPrice: 450,
          image: 'https://images.unsplash.com/photo-1568659358810-bdbdbd9b0c7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
        }
      ]
    }
  ];

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Акции и специальные предложения</h1>
        {specialCategories.map((category) => (
          <section key={category.id} className={styles.category}>
            <h2 className={styles.categoryTitle}>{category.name}</h2>
            <div className={styles.items}>
              {category.items.map((item) => (
                <div key={item.id} className={styles.item}>
                  <img src={item.image} alt={item.name} className={styles.image} />
                  <div className={styles.content}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className={styles.prices}>
                      <span className={styles.originalPrice}>{item.originalPrice} ₽</span>
                      <span className={styles.discountPrice}>{item.discountPrice} ₽</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default SpecialPage; 