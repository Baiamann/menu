import React from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: string;
  imageUrl: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Плов по-узбекски',
    description: 'Традиционный узбекский плов с бараниной',
    price: 450,
    weight: '300г',
    imageUrl: '/images/plov.jpg'
  },
  {
    id: 2,
    name: 'Манты',
    description: 'Сочные манты с мясом и луком',
    price: 380,
    weight: '250г',
    imageUrl: '/images/manty.jpg'
  },
  {
    id: 3,
    name: 'Шашлык',
    description: 'Шашлык из баранины на углях',
    price: 520,
    weight: '200г',
    imageUrl: '/images/shashlik.jpg'
  }
];

const MenuList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Основные блюда</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg p-4">
            <div className="relative h-48 mb-4">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-500">{item.weight}</span>
                <span className="text-xl font-bold text-[#8B4513]">{item.price} ₽</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList; 