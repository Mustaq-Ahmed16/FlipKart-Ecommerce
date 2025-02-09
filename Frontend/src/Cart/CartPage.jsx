import React from 'react';
import { useCart } from './context/CartContext';

const CartPage = () => {
  const { cart, cartDispatch } = useCart(); // Access cart from context

  const handleQuantityChange = (id, newQuantity) => {
    cartDispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity: newQuantity },
    });
  };

  const handleRemoveFromCart = (id) => {
    cartDispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalDiscount = () => {
    return cart.reduce((total, item) => total + (item.price * item.discount / 100) * item.quantity, 0);
  };
  // const cart = [
  //   {
  //     id: 1,
  //     name: "Men's T-Shirt",
  //     img: "https://i1.wp.com/www.avjtrickz.com/wp-content/uploads/2018/06/Flipkart-Shirt-And-Tshirt-Mens-Clothing.jpeg?fit=234%2C250&ssl=1",
  //     price: 499,
  //     discount: 20, // in percentage
  //     rating: 4.2,
  //     features: [
  //       "Cotton material",
  //       "Round neck",
  //       "Machine washable"
  //     ]
  //   },
  // ]

  return (
    <div className="flex">
      {/* Cart Items */}
      <div className="w-2/3 p-4">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cart.length == 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b py-4">
                <div className="flex items-center">
                  <img src={item.img} alt={item.name} className="w-24 h-24 object-cover" />
                  <div className="ml-4">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>Price: ₹{item.price}</p>
                    <p>Discount: {item.discount}%</p>
                    <p>Rating: {item.rating}★</p>
                  </div>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center">
                  <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="p-2 bg-gray-200">-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="p-2 bg-gray-200">+</button>
                </div>

                {/* Remove Button */}
                <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500 ml-4">Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Shipping & Payment Details */}
      <div className="w-1/3 p-4 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <p><strong>Total Price:</strong> ₹{calculateTotalPrice()}</p>
        <p><strong>Total Discount:</strong> ₹{calculateTotalDiscount()}</p>
        <p><strong>Shipping Address:</strong></p>
        <div>
          <p>John Doe</p>
          <p>123 Main Street</p>
          <p>City, State, Zip Code</p>
        </div>

        {/* Payment */}
        <p><strong>Total After Discount:</strong> ₹{calculateTotalPrice() - calculateTotalDiscount()}</p>

        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded w-full">Proceed to Pay</button>
      </div>
    </div>
  );
};

export default CartPage;
