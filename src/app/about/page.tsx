'use client';

import React from 'react';
import styles from './page.module.css';

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.aboutSection}>
        <h1 className={styles.title}>О нашем ресторане</h1>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <h2>Наша история</h2>
            <p>
              Ресторан "Золотой Дракон" был основан в 2010 году с целью создания уникального места,
              где традиции восточной кухни встречаются с современными кулинарными тенденциями.
            </p>
          </div>
          
          <div className={styles.textBlock}>
            <h2>Наша философия</h2>
            <p>
              Мы верим, что еда - это не просто питание, а настоящее искусство. Каждое блюдо в нашем
              меню создается с любовью и вниманием к деталям, используя только самые свежие и качественные
              ингредиенты.
            </p>
          </div>
          
          <div className={styles.textBlock}>
            <h2>Наша команда</h2>
            <p>
              Наши повара - настоящие мастера своего дела, каждый из которых прошел обучение у лучших
              шеф-поваров Азии. Они постоянно совершенствуют свои навыки и создают новые уникальные блюда.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 