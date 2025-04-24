import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <h3>Контакты</h3>
          <p>Адрес: ул. Примерная, 123</p>
          <p>Телефон: +7 (123) 456-78-90</p>
          <p>Email: info@vkusnaya-kuhnya.ru</p>
        </div>
        <div className={styles.workingHours}>
          <h3>Часы работы</h3>
          <p>Пн-Пт: 11:00 - 23:00</p>
          <p>Сб-Вс: 12:00 - 00:00</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2024 Ресторан "Вкусная кухня". Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer; 