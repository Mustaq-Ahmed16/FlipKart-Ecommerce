import express from 'express'
import { addToCart, showCart } from '../controllers/CartController.js';

const CartRouter = express.Router();

CartRouter.post('/product/:userId/:productId/addcart',addToCart)
CartRouter.get('/cart/:userId',showCart);

export default CartRouter;