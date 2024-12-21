import { createStore, combineReducers } from "redux";
import productReducer from "../reducers/productReducer";
import selectedProductsReducer from "../reducers/selectedProductReducer";

const rootReducer = combineReducers({
  products: productReducer,
  selectedProducts: selectedProductsReducer,
});

const store = createStore(rootReducer);

export default store;
