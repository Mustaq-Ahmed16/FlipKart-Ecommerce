import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaShoppingCart } from 'react-icons/fa';

const SingleProduct = () => {
  const { productId } = useParams(); // To get the product ID from the URL
  const userId = localStorage.getItem('userId')
  console.log("product-id"+productId)
  console.log("user Id="+userId)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity,setQuantity]=useState(1);
  const navigate = useNavigate();


  useEffect(() => {
    // Fetch the product by ID
    axios
      .get(`http://localhost:8002/product/${userId}/${productId}`)
      .then(response => {
        setProduct(response.data.product); // Assuming the API returns a single product object
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product: ', error);
        setError('Failed to load product.');
        setLoading(false);
      });
  }, [productId]);

  const handleQuantityChange = (type) => {
    // Implement logic to adjust quantity (+ or -)
    // You can either maintain a local state for quantity or use context/state management for cart
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = (quantity) => {
    // Handle the "Add to Cart" functionality (e.g., update cart state or call an API to add the product to the cart)
    const token = localStorage.getItem('token'); // Assuming JWT token is saved in localStorage
    if (!token) {
      navigate('/login'); // Redirect to login if not authenticated
      return;
    }

    axios
      .post(
        `http://localhost:8002/product/${userId}/${productId}/addcart`,
        {quantity }
      )
      .then((response) => {
        console.log('Added to cart:', response.data.cart);
        navigate(`/cart/${userId}`)
        // Optionally update a cart context or localStorage here
      })
      .catch((error) => {
        console.error('Error adding to cart:', error);
      });
  };

  if (!product) return <div>Loading...</div>;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl">Loading product...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl text-red-500">{error}</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate('/all-products')}
          className="text-blue-500 font-semibold">Back to Products</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-96 object-cover"
          />
          <h1>Product description : </h1>
          <h2 className="text-xl font-semibold">{product.description}</h2>
        </div>
       
   
        <div>
          <h1 className="text-2xl font-semibold">{product.name}</h1>
         
          <p className="text-lg text-gray-700 mt-2">${product.price}</p>
          <p className="text-lg text-gray-700 mt-2">Category :{product.category}</p>
          <p className="text-lg text-gray-700 mt-2">Stock :{product.stock}</p>

          <div className="mt-4">
            <span className="text-lg">Quantity: </span>
            <button
              onClick={() => handleQuantityChange('decrease')}
              className="px-3 py-1 bg-gray-300 rounded-full">
              -
            </button>
            <span className="mx-4" value={quantity}>{product.quantity}</span> {/* You can manage this state to show the current quantity */}
            <button
              onClick={() => handleQuantityChange('increase')}
              className="px-3 py-1 bg-gray-300 rounded-full">
              +
            </button>
          </div>

          <button
            onClick={()=>handleAddToCart(quantity)}
            className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg flex items-center justify-center cursor-pointer">
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
