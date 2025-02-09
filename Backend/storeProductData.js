
import axios from 'axios'
import Product from './models/productModel.js';

const fetchAndSaveProducts = async () => {
  try {
    // Fetch data from the external API
    const response = await axios.get('https://api.escuelajs.co/api/v1/products');
    const products = response.data;

    // Map through the fetched products and save to MongoDB
    for (const productData of products) {
      const product = new Product({
        name: productData.title,
        description: productData.description,
        price: productData.price,
        stock: 5,
        imageUrl: productData.images[0], // Assuming the first image in the array is what we want
        category: productData.category.name,
      });

      await product.save();
    }

    console.log('Products have been successfully saved to the database!');
  } catch (error) {
    console.error('Error fetching or saving products:', error);
  }
};

export default fetchAndSaveProducts;
