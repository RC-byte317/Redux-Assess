import React from "react";
import { useDispatch } from "react-redux";
import { selectProduct, removeProduct } from "../actions/productActions";

const ProductComparison = ({ products }) => {
  const dispatch = useDispatch();


  const handleSelectProduct = (product) => {
    dispatch(selectProduct(product));  
  };


  const handleRemoveProduct = (productId) => {
    dispatch(removeProduct(productId));  
  };

  return (
    <div>
      <h2>Select Products to Compare</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleSelectProduct(product)}>Select</button>
            <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComparison;

