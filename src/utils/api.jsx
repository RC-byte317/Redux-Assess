import axios from 'axios';

export const fetchProductsFromApi = async () => {
  try {
    const response = await axios.get('http://localhost:3000/products');
    return response.data.products; 
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];  
  }
};
