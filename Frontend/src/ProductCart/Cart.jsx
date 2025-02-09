import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem('userId');
  const navigate=useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      // Redirect to login if no token
      navigate('/login')
      
    }

    axios
      .get(`http://localhost:8002/cart/${userId}`
        // headers: { Authorization: `Bearer ${token}` },
      )
      .then((response) => {
        setCart(response.data.cart);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load cart');
        setLoading(false);
      });
  }, [token]);

  // const handleRemoveFromCart = (productId) => {
  //   axios
  //     .delete(`http://localhost:8002/api/cart/remove/${productId}`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((response) => {
  //       setCart(response.data.cart);
  //     })
  //     .catch((error) => {
  //       console.error('Error removing from cart', error);
  //     });
  // };

  // const handleUpdateQuantity = (productId, quantity) => {
  //   axios
  //     .put(
  //       'http://localhost:8002/api/cart/update-quantity',
  //       { productId, quantity },
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     )
  //     .then((response) => {
  //       setCart(response.data.cart);
  //     })
  //     .catch((error) => {
  //       console.error('Error updating quantity', error);
  //     });
  // };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
      {cart.showProducts.length == 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div>
          {cart.showProducts.length>0 && cart.showProducts.map((item) => (
            <div key={item._id} className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover" />
                <div className="ml-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-500">Price: ${item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  // onClick={() => handleUpdateQuantity(item.product._id, -1)}
                  className="px-2 py-1 bg-gray-300 rounded-full">
                  <FaMinus />
                </button>
                <span className="mx-4">{cart.items.quantity}</span>
                <button
                  // onClick={() => handleUpdateQuantity(item.product._id, 1)}
                  className="px-2 py-1 bg-gray-300 rounded-full">
                  <FaPlus />
                </button>
                <button
                  // onClick={() => handleRemoveFromCart(item.product._id)}
                  className="ml-4 text-red-500">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="font-semibold">Total: ${cart.totalAmount}</p>
            <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
