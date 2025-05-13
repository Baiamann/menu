'use client';

import React from 'react';
import Header from '@/components/Header';
import SpecialOffers from '@/components/SpecialOffers';
import MenuList from '@/components/MenuList';
import DrinksList from '@/components/DrinksList';
import DessertsList from '@/components/DessertsList';
import SnacksList from '@/components/SnacksList';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen pt-24">
      <Header />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#8B4513] mb-4">Welcome to Gourmet Haven</h2>
          <p className="text-xl text-gray-600">Discover the art of fine dining</p>
        </div>
        <SpecialOffers />
        <SnacksList />
        <MenuList />
        <DrinksList />
        <DessertsList />
      </div>
      <Footer />
    </main>
  );
}
