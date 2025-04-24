import React from 'react';
import styles from './MenuList.module.css';
import Image from 'next/image';

const MenuList = () => {
  const menuItems = {
    'main-dishes': [
      { 
        name: 'Стейк Рибай', 
        price: '2500 сом', 
        description: 'Премиальная говядина, 300г',
        image: '/images/steak.jpg'
      },
      { 
        name: 'Паста Карбонара', 
        price: '1200 сом', 
        description: 'Спагетти, бекон, сливки, пармезан',
        image: '/images/pasta.jpg'
      },
      { 
        name: 'Ризотто с морепродуктами', 
        price: '1800 сом', 
        description: 'Рис арборио, мидии, креветки, кальмары',
        image: '/images/risotto.jpg'
      },
    ],
    'appetizers': [
      { 
        name: 'Брускетта с томатами', 
        price: '450 сом', 
        description: 'Хрустящий хлеб с помидорами и базиликом',
        image: '/images/bruschetta.jpg'
      },
      { 
        name: 'Тартар из говядины', 
        price: '850 сом', 
        description: 'Сырая говядина с каперсами и луком',
        image: '/images/tartar.jpg'
      },
    ],
    'desserts': [
      { 
        name: 'Тирамису', 
        price: '650 сом', 
        description: 'Классический итальянский десерт',
        image: '/images/tiramisu.jpg'
      },
      { 
        name: 'Чизкейк', 
        price: '550 сом', 
        description: 'Нежный чизкейк с ягодным соусом',
        image: '/images/cheesecake.jpg'
      },
    ],
    'drinks': [
      { 
        name: 'Мохито', 
        price: '450 сом', 
        description: 'Классический коктейль с мятой и лаймом',
        image: '/images/mojito.jpg'
      },
      { 
        name: 'Апероль Шприц', 
        price: '550 сом', 
        description: 'Итальянский аперитив',
        image: '/images/aperol.jpg'
      },
    ],
  };

  return (
    <div className={styles.menuContainer}>
      {Object.entries(menuItems).map(([section, items]) => (
        <section key={section} id={section} className={styles.menuSection}>
          <h2 className={styles.sectionTitle}>
            {section === 'main-dishes' && 'Основные блюда'}
            {section === 'appetizers' && 'Закуски'}
            {section === 'desserts' && 'Десерты'}
            {section === 'drinks' && 'Напитки'}
          </h2>
          <div className={styles.itemsGrid}>
            {items.map((item, index) => (
              <div key={index} className={styles.menuItem}>
                <div className={styles.imageContainer}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={200}
                    className={styles.menuImage}
                  />
                </div>
                <h3 className={styles.itemName}>{item.name}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
                <p className={styles.itemPrice}>{item.price}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default MenuList; 