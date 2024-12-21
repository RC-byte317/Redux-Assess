const initialState = {
    selectedProducts: [],
  };
  
  function selectedProductsReducer(state = initialState, action) {
    switch (action.type) {
      case "SELECT_PRODUCT":
        return {
          ...state,
          selectedProducts: [...state.selectedProducts, action.payload],
        };
      case "REMOVE_PRODUCT":
        return {
          ...state,
          selectedProducts: state.selectedProducts.filter(
            (product) => product.id !== action.payload
          ),
        };
      default:
        return state;
    }
  }
  
  export default selectedProductsReducer;
  