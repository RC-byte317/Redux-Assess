export const setProducts = (products) => ({
    type: "SET_PRODUCTS",
    payload: products,
  });
  
  
  export const selectProduct = (product) => ({
    type: "SELECT_PRODUCT",
    payload: product,
  });
  

  export const removeProduct = (productId) => ({
    type: "REMOVE_PRODUCT",
    payload: productId,
  });
  