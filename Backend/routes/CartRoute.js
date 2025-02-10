import express from 'express'
import { addToCart, removeProductFromCart, showCart } from '../controllers/CartController.js';

const CartRouter = express.Router();

CartRouter.post('/product/:userId/:productId/addcart',addToCart)
CartRouter.get('/cart/:userId',showCart);
CartRouter.delete('/cart/delete/:userId/:productId', removeProductFromCart)

export default CartRouter;