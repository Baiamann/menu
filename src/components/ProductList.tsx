"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import "./ProductList.css";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductListProps {
  title: string;
  data: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, data }) => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    if (selectedProduct && quantity > 0) {
      addToCart(selectedProduct, quantity);
      closeModal();
    }
  };

  return (
    <section className="product-list">
      <h2 className="product-list-title">{title}</h2>
      <div className="product-grid">
        {data.map((product) => (
          <div key={product.id} className="product-card" onClick={() => openModal(product)}>
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-card-content">
              <h3 className="product-card-title">{product.name}</h3>
              <p className="product-card-description">{product.description}</p>
              <p className="product-card-price">{product.price} ₽</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProduct && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <p>Цена: {selectedProduct.price} ₽</p>

            <label>
              Количество:
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                style={{ marginLeft: "0.5rem", width: "60px" }}
              />
            </label>

            <div className="modalButtons" style={{ marginTop: "1rem" }}>
              <button onClick={handleAddToCart}>Добавить в корзину</button>
              <button onClick={closeModal} style={{ marginLeft: "1rem" }}>
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductList; 