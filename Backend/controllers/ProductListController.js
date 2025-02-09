import Product from "../models/productModel.js";


export const showAllProducts = async(req,res)=>{
  try {
    const allProducts = await Product.find();
    return res.status(200).json({ allProducts });
  }
  catch (err) {
    console.log('Error fetching users:', err);
    return res.status(500).json({ message: 'Error fetching users', error: err.message });
  }

}

export const showProduct = async (req, res) => {
  try {
    // Extract productId from the request parameters
    const { productId } = req.params;  // `productId` comes from URL params, not query params
    console.log(productId);

    if (!productId) {
      return res.status(400).json({ message: 'Product ID is required' });
    }

    // Find the product by ID
    const product = await Product.findById(productId);
    console.log(product);

    // If the product doesn't exist
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Return the found product
    return res.status(200).json({ product });

  } catch (err) {
    console.error('Error fetching product:', err);
    return res.status(500).json({ message: 'Error fetching product', error: err.message });
  }
};
