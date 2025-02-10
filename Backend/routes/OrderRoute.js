import express from 'express'
import { placeOrder } from '../controllers/OrderController.js';

const OrderRouter = express.Router();

OrderRouter.post('/place-order/:userId',placeOrder);

export default OrderRouter;