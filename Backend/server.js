
import express from 'express'
import dotenv from 'dotenv';
import dbConnection from './DataConnection/dbConnection.js';
import AuthRouter from './routes/AuthRoute.js';
import cors from 'cors'
import ProductRouter from './routes/ProductRoute.js';
import CartRouter from './routes/CartRoute.js';



const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


const PORT = process.env.PORT || 8001

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
dbConnection();


app.use(AuthRouter)
app.use(ProductRouter)
app.use(CartRouter);

