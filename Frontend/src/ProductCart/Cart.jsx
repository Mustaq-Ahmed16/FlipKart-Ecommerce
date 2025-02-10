import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaMinus, FaPlus, FaTrashAlt, FaRegSadCry } from "react-icons/fa"; // Added sad face icon
import { useNavigate, useParams } from "react-router-dom";
import { useShopContext } from "../context/shopContext";

const Cart = () => {
  const { userId } = useParams();
  const { cart, setCart, shippingAddress, setShippingAddress, totalAmount, setTotalAmount } = useShopContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cart data from backend
    axios.get(`http://localhost:8002/cart/${userId}`).then((response) => {
      setCart(response.data.cart);
      setTotalAmount(response.data.cart.totalAmount);
    }).catch((error) => console.error(error));
  }, [userId]);

  const handleQuantityChange = (productId, type) => {
    // Adjust the quantity
    setCart((prevCart) => {
      const updatedItems = prevCart.items.map((item) => {
        if (item.product._id === productId) {
          const newQuantity =
            type === "increase" ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      });

      // Update totalAmount after change
      const newTotalAmount = updatedItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
      setTotalAmount(newTotalAmount);
      return { ...prevCart, items: updatedItems };
    });
  };

  const handleRemoveItem = (productId) => {
    // Remove the item from the cart
    axios.delete(`http://localhost:8002/cart/delete/${userId}/${productId}`)
      .then((response) => {
        setCart(response.data.cart);
        setTotalAmount(response.data.cart.totalAmount);
      })
      .catch((error) => {
        console.error(error);
        alert("Error removing item from cart");
      });
  };

  const handleProceedToPay = () => {
    // Proceed to payment (this could be a redirection or call to API)
    alert("Proceeding to Payment");
    if (localStorage.getItem('token')) {
      navigate(`/payment/${userId}`);
    } else {
      navigate('/login');
    }
  };

  if (!cart) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left side - Products list */}
        <div className="w-full lg:w-2/3">
          {cart.items.length > 0 ? (
            cart.items.map((item) => (
              <div key={item._id} className="flex border-b pb-6 mb-6">
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="w-32 h-32 object-cover"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold">{item.product.name}</h2>
                  <p className="text-gray-500 mt-1">{item.product.category}</p>
                  <div className="mt-4 flex items-center justify-between">
                    {/* Quantity controls */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.product._id, "decrease")}
                        className="bg-gray-200 p-2 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.product._id, "increase")}
                        className="bg-gray-200 p-2 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <span className="text-lg font-semibold">${item.product.price}</span>
                    <button
                      onClick={() => handleRemoveItem(item.product._id)}
                      className="text-red-500 ml-4 cursor-pointer hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center text-center py-8">
              <FaRegSadCry className="text-4xl text-gray-500 mr-4" />
              <h2 className="text-xl text-gray-500">Cart is Empty</h2>
            </div>
          )}
        </div>

        {/* Right side - Cart Summary */}
        <div className="w-full lg:w-1/3 p-6 bg-gray-100 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">${totalAmount}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="shippingAddress" className="text-gray-600">Shipping Address</label>
            <textarea
              id="shippingAddress"
              value={shippingAddress}
              required={true}
              onChange={(e) => setShippingAddress(e.target.value)}
              placeholder="Enter your shipping address"
              className="w-full p-2 mt-2 border rounded focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Discount</span>
            <span className="font-semibold">-$0.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Shipping</span>
            <span className="font-semibold">Free</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-gray-600">Total</span>
            <span className="font-semibold">${totalAmount}</span>
          </div>
          <button
            onClick={handleProceedToPay}
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
