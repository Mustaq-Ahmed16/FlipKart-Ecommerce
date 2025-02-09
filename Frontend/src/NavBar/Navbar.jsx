import React from 'react';
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();
  const handleLoginLogout = ()=>{
    const token=localStorage.getItem('token');
    if(token){
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      navigate('/');
    }
    else{
      navigate('/login')
    }
  }
  return (
    <>
      <div className='navbar-container flex w-full h-[80px] bg-gray-200 items-center justify-between px-4'>
        {/* Logo */}
        <div className='logo-img' onClick={()=>navigate('/home')}>
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Flipkart Logo" />
        </div>

        {/* Search Bar */}
        <div className="relative flex-grow max-w-xl">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="border-[2px] border-solid border-black h-[40px] px-8 rounded-[10px] w-full bg-blue-50 text-md"
          />
        </div>

        {/* Login Button */}
        <div className="relative">
          <CgProfile className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <button onClick={handleLoginLogout} className="w-24 h-10 bg-transparent text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded px-10 cursor-pointer">{localStorage.getItem("token") ? 'Logout' : 'Login'}
          </button>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={()=>navigate('/cart')}>
          <FaShoppingCart className="text-gray-700" />
          <span className="text-gray-700">Cart</span>
        </div>

        {/* Become a Seller */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Become a Seller" className="h-6" />
          <span className="text-gray-700">Become a Seller</span>
        </div>

        {/* More Options */}
        <div>
          <BsThreeDotsVertical className="text-gray-700" />
        </div>
      </div>
      <div className='nav-container flex w-full h-10 bg-gray-300 items-center justify-between px-2'>
        <span>Electronics</span>
        <span>TVs & Appliances</span>
        <span>Men</span>
        <span>Women</span>
        <span>Baby & Kids</span>
        <span>Home & Furniture</span>
        <span>Sports, Books & More</span>
        <span>Flights</span>
        <span>Offer Zone</span>

      </div>
    </>
    
    
  );
}

export default Navbar;
