import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";

export const addToCart = async(req,res)=>{
  const { userId,productId} = req.params;
  const {quantity}=req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(400).json({ message: 'Product not found' });
    }

    // Calculate price
    const price = product.price;
    const totalAmount = price * quantity;

    // Find the user's cart or create one if it doesn't exist
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({
        user: userId,
        items: [{ product: productId, quantity, price }],
        totalAmount: totalAmount,
      });
    } else {
      // If the cart exists, check if the product is already in the cart
      const itemIndex = cart.items.findIndex(
        (item) => item.product.toString() === productId
      );

      if (itemIndex > -1) {
        // If the product already exists, update the quantity and totalAmount
        cart.items[itemIndex].quantity += quantity;
        cart.items[itemIndex].price = price;
      } else {
        // Otherwise, add the new product
        cart.items.push({ product: productId, quantity, price });
      }

      cart.totalAmount = cart.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    }

    await cart.save();
    res.status(200).json({ cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error adding to cart' });
  }
}



export const showCart = async(req,res)=>{
  const {userId} = req.params;
  try{
    const cart = await Cart.findOne({ user: userId })
    if (!cart) {
      return res.status(400).json({ message: 'Cart and User not found' });
    }
    const itemsArray = cart.items;
    const showProducts = []
    for (const item of itemsArray) {
      const product = await Product.findById(item.product);
      showProducts.push(product);

    }
    return res.status(200).json({ cart, showProducts });

  }
  catch(err)
  {
    console.error(err);
    res.status(500).json({ message: 'Error at server side' });
  }
 
}