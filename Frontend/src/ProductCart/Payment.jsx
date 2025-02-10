import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaCreditCard, FaPhoneAlt, FaWallet, FaInternetExplorer, FaMapMarkerAlt } from "react-icons/fa";
import { useShopContext } from "../context/shopContext";

const Payment = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { paymentMethod, setPaymentMethod, shippingAddress, setShippingAddress, cart, totalAmount, setTotalAmount,orderId,setOrderId } = useShopContext();
  const [address, setAddress] = useState(shippingAddress || "");
  

  const handlePaymentConfirm = () => {
    const paymentData = {
      paymentMethod,
      shippingAddress: address,
    };

    // Send payment data to backend
    axios.post(`http://localhost:8002/place-order/${userId}`, paymentData)
      .then((response) => {
        alert("Payment Successful!");
        setTotalAmount(response.data.order.totalAmount);
        setOrderId(response.data.order._id)
        navigate("/congratulations"); // Redirect to a confirmation page
      })
      .catch((error) => {
        console.error("Payment failed:", error);
        alert("Error processing payment");
      });
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      {/* Payment Options */}
      <h2 className="text-2xl font-semibold mb-6 text-center">Choose Payment Method</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <button
          onClick={() => setPaymentMethod("UPI")}
          className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        >
          <FaWallet className="mr-2" />
          UPI
        </button>
        <button
          onClick={() => setPaymentMethod("PhonePe")}
          className="flex items-center justify-center p-4 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-200"
        >
          <FaPhoneAlt className="mr-2" />
          PhonePe
        </button>
        <button
          onClick={() => setPaymentMethod("Card")}
          className="flex items-center justify-center p-4 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-200"
        >
          <FaCreditCard className="mr-2" />
          Debit/Credit Card
        </button>
        <button
          onClick={() => setPaymentMethod("NetBanking")}
          className="flex items-center justify-center p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-200"
        >
          <FaInternetExplorer className="mr-2" />
          Net Banking
        </button>
      </div>

      {/* Shipping Address Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
        <textarea
          value={shippingAddress}
          required={true}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Enter your shipping address"
        />
      </div>

      {/* Price Details */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <div className="flex justify-between text-lg mb-2">
          <span>Subtotal</span>
          <span>₹{totalAmount}</span>
        </div>
        <div className="flex justify-between text-lg mb-2">
          <span>Discount</span>
          <span>- ₹0.00</span>
        </div>
        <div className="flex justify-between text-lg mb-2">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-lg font-semibold mb-4">
          <span>Total Amount</span>
          <span>₹{totalAmount}</span>
        </div>
      </div>

      {/* Confirm Payment Button */}
      <div className="flex justify-center">
        <button
          onClick={handlePaymentConfirm}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
