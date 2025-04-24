'use client';

import React from 'react';
import Header from '../components/Header';
import MenuList from '../components/MenuList';
import Footer from '../components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <MenuList />
      <Footer />
    </main>
  );
}
