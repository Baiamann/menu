import React from 'react';
import CustomImage from './Image';

interface MenuImageProps {
  dishName: string;
  imageUrl: string;
}

const MenuImage: React.FC<MenuImageProps> = ({ dishName, imageUrl }) => {
  return (
    <div className="menu-item-image">
      <CustomImage
        src={imageUrl}
        alt={`Фото блюда: ${dishName}`}
        width={400}
        height={300}
      />
    </div>
  );
};

export default MenuImage; 