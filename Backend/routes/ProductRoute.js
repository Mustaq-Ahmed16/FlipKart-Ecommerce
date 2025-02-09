import express from 'express'
import { showAllProducts, showProduct } from '../controllers/ProductListController.js';

const ProductRouter = express.Router();

ProductRouter.get('/products', showAllProducts)
ProductRouter.get('/product/:userId/:productId', showProduct);

export default ProductRouter;