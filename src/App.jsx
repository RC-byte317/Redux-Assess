import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./actions/productActions";
import ProductComparison from "./components/ProductComparison";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const selectedProducts = useSelector((state) => state.selectedProducts.selectedProducts);

  
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setProducts(data));
      });
  }, [dispatch]);

  return (
    <div className={`app ${theme}`}>
      <h1>Product Comparison Tool</h1>
      <h3>Selected Products</h3>
      <div>
        {selectedProducts.map((product) => (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      <ProductComparison products={products} />

    
      <button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default App;
