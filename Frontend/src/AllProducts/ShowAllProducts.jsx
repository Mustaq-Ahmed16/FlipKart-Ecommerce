import React, { useEffect, useState } from "react";
import axios from "axios"; // Don't forget to import axios
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { HiOutlineFilter } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const ShowAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // For handling loading state
  const [error, setError] = useState(null); // For handling error state
  const navigate=useNavigate();

  useEffect(() => {
    // Fetching products data
    axios
      .get('http://localhost:8002/products')
      .then(response => {
        console.log(response.data); // Check the structure of the response data
        if (Array.isArray(response.data.allProducts)) {
          setProducts(response.data.allProducts); // Only set if it's an array
        } 
        // else if (response.data && response.data && Array.isArray(response.data)) {
        //   setProducts(response.data); // If products are inside an object, extract the array
        // }
        else {
          setError("Invalid response format");
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products: ", error);
        setError("Failed to load products.");
        setLoading(false);
      });
  }, []);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl">Loading products...</span>
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
  const handleProductClick =(productId)=>{
    navigate(`/product/${productId}`);
  }
  return (
    <div className="container mx-auto py-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-semibold">Products</div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-gray-300 rounded p-2">
            <input
              type="text"
              placeholder="Search products..."
              className="outline-none pl-2"
            />
            <FaSearch />
          </div>
          <div className="flex items-center space-x-2">
            <HiOutlineFilter className="text-xl" />
            <span>Filters</span>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-64 object-cover"
              onClick={()=>handleProductClick(product._id)}
            />
            <div className="p-4">
              <div className="font-semibold text-lg">{product.name}</div>
              <div className="text-gray-500 mt-2">{product.price}</div>
              <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg flex items-center justify-center">
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAllProducts;
