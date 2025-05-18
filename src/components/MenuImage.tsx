import React from "react";
import CustomImage from "./Image";
import "./MenuImage.css"; // Обычный CSS, НЕ модуль

interface MenuImageProps {
  dishName: string;
  imageUrl: string;
}

const MenuImage: React.FC<MenuImageProps> = ({ dishName, imageUrl }) => {
  return (
    <div className="menuItem">
      <CustomImage
        src={imageUrl}
        alt={`Фото блюда: ${dishName}`}
        width={400}
        height={300}
      />
      <h3>{dishName}</h3>
      {/* можно добавить описание или цену, если нужно */}
    </div>
  );
};

export default MenuImage;
