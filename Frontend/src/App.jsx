import React from 'react'
import Navbar from './NavBar/Navbar'
import Login from './Login/Login'
import Signup from './Login/Signup'
import { Route, Routes } from 'react-router-dom'

import Footer from './Footer/Footer'
import CategoryList from './Slider/CategoryList'
import categoryData from './Data/categoryData.jsx'
import ProductListing from './ProductsListing/ProductListing.jsx'
import Home from './Category/Category'
import ProductDetail from './ProductsListing/ProductDetail.jsx'
import ForgotPassword from './ForgotPassword/ForgotPassword.jsx'
import PasswordReset from './ForgotPassword/PasswordReset.jsx'
import CartPage from './Cart/CartPage.jsx'
import ShowAllProducts from './AllProducts/ShowAllProducts.jsx'
import SingleProduct from './AllProducts/SingleProduct.jsx'
import Cart from './ProductCart/Cart.jsx'
import Payment from './ProductCart/Payment.jsx'
import { useShopContext } from './context/shopContext.jsx'
import Congratulations from './ProductCart/Congratulations.jsx'
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx'


const App = () => {
  const obj = useShopContext();
  console.log(obj);
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/password-reset' element={<PasswordReset />} />
        <Route path='/' element={<Home />} />
        <Route path='/all-products' element={<ShowAllProducts/>}/>
        <Route path='/product/:productId' element={<SingleProduct/>}/>
        <Route path='/cart/:userId' element={
          <PrivateRoute>
            <Cart/>
         
          </PrivateRoute>
        }/>
        <Route path="/payment/:userId" element={<Payment/>}/>
        <Route path='/congratulations' element={<Congratulations/>}/>
        {/* <Route path='/product-listing' element={<CategoryList categoryData={categoryData} />} />
        <Route path='/product-listing/:categoryName' element={<ProductListing categoryData={categoryData} />} />
        <Route path='/product-detail' element={<ProductDetail/>}/>
        
        
        <Route path='/cart' element={<CartPage/>}/> */}
        
      </Routes>
      <Footer/>


    </div>
  )
}

export default App
