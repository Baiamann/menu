import React from 'react';
import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const CustomImage: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  width = 500, 
  height = 300
}) => {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default CustomImage; 