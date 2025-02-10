import React, { useState } from 'react';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import { useShopContext } from '../context/shopContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn, username } = useShopContext();

  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  const handleLoginLogout = () => {
    if (token) {
      // Logout logic
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      setIsLoggedIn(false); // Update context state
      navigate('/'); // Redirect to home page
    } else {
      navigate('/login'); // Navigate to login if not logged in
    }
  };

  return (
    <div className="navbar-container flex w-full h-[80px] bg-gray-200 items-center justify-between px-4">
      {/* Logo */}
      <div className="logo-img" onClick={() => navigate('/')}>
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

      {/* User Profile/ Login/ Logout */}
      <div className="relative flex items-center space-x-4">
        {token ? (
          // Logged in state
          <div className="relative">
            <button
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <CgProfile className="text-xl" />
              <span>Hi, {username}</span>
            </button>
            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-md w-40 z-10">
                <button
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                  onClick={() => navigate('/profile')}
                >
                  Profile
                </button>
                <button
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                  onClick={handleLoginLogout} // Logout
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          // Logged out state
          <button
            className="w-24 h-10 bg-transparent text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded px-10 cursor-pointer"
            onClick={handleLoginLogout} // Login or Logout based on token
          >
            Login
          </button>
        )}

        {/* Cart Icon */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate(`/cart/${userId}`)}>
          <FaShoppingCart className="text-gray-700" />
          <span className="text-gray-700">Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
