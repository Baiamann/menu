import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Ресторан "Вкусная кухня"</h1>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li><a href="#main-dishes">Основные блюда</a></li>
            <li><a href="#appetizers">Закуски</a></li>
            <li><a href="#desserts">Десерты</a></li>
            <li><a href="#drinks">Напитки</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 