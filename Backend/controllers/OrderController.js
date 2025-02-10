import express from 'express'
import Cart from '../models/cartModel.js';
import Order from '../models/orderModel.js';

export const placeOrder = async(req,res)=>{
  const { userId } = req.params;
  const { paymentMethod, shippingAddress } = req.body;

  try {
    // Get cart details for the user
    const cart = await Cart.findOne({ user:userId }).populate('items.product');

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    // Calculate total amount for the order
    const totalAmount = cart.items.reduce((total, item) => total + item.quantity * item.price, 0);

    // Create a new order
    const newOrder = new Order({
      user: userId,
      items: cart.items.map(item => ({
        product: item.product._id,
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount,
      shippingAddress,
      paymentMethod,
      status: 'Pending', // default status
    });

    // Save the order to the database
    await newOrder.save();

    // Optionally, clear the cart after order placement
    cart.items = [];
    cart.totalAmount = 0;
    await cart.save();

    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }

} 




