// ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, onSelect }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Features:</strong> {product.features}</p> 
      <button onClick={() => onSelect(product)}>Select</button>
    </div>
  );
};

export default ProductCard;
