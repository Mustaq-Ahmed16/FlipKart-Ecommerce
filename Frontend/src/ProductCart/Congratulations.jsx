import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useShopContext } from "../context/shopContext";

const Congratulations = () => {
  const navigate = useNavigate();
  const {orderId,totalAmount,shippingAddress}=useShopContext();

  const handleGoToHome = () => {
    navigate("/");  // Redirect to home page or another page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="flex justify-center mb-6">
          <FaRegCheckCircle className="text-green-500 text-6xl" />
        </div>

        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Congratulations!
        </h2>

        <p className="text-xl text-gray-600 mb-6">
          Your payment was successful. Thank you for shopping with us!
        </p>

        <div className="mb-8">
          <span className="block text-lg text-gray-800">Order Summary: </span>
          <div className="mt-2 text-left">
            <p className="text-md text-gray-700">Order Number: ${orderId}</p>
            <p className="text-md text-gray-700">Total Amount: ${totalAmount}</p>
            <p className="text-md text-gray-700">Shipping Address: ${shippingAddress}</p>
          </div>
        </div>

        <button
          onClick={handleGoToHome}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform transition-all duration-300 ease-in-out hover:scale-105"
        >
          Go to Home Page
        </button>

        <div className="mt-6">
          <span className="block text-gray-500 text-sm">Need help?</span>
          <button
            onClick={() => alert("Contacting support...")}
            className="text-blue-500 hover:text-blue-600 hover:underline"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
