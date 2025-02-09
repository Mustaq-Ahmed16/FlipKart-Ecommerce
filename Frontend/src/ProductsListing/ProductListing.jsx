import React, { useReducer, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import categoryData from '../Data/categoryData.jsx';

const ProductListing = ({categoryData}) => {
  const navigate=useNavigate();
  const { categoryName } = useParams();
  console.log(categoryName)
  const category = categoryData.find((item) => item.name == categoryName);
  console.log(category.data);

  if (!category) {
    return <p>Category not found</p>;
  }


  const initialState = {
    price:'',
    rating:'',
    discount:'',
  }
  const reducerFun = (state,action)=>{
    switch(action.type)
    {
      case "PRICE":
        return {
          ...state,
          price:action.payload
        }
      case "RATING":
        return {
          ...state,
          rating:action.payload
        }
      case "DISCOUNT":
        return {
          ...state,
          discount:action.payload
        }
      default:
        return state
    }
  }
  const [{price,rating,discount},dispatch]=useReducer(reducerFun,initialState);
  
  const handlePriceChange=(e)=>{
    dispatch({
      type:"PRICE",
      payload:e.target.value
    })
  }
  const handleRatingChange=(e)=>{
    dispatch({
      type:"RATING",
      payload:e.target.value
    })
  }
  const handleDiscountChange=(e)=>{
    dispatch({
      type:"DISCOUNT",
      payload:e.target.value
    })
  }
  const filterProducts = (products)=>{
    const filterByPrice =price>0? products.filter((item)=>item.price<=price):products;
    const filterByDiscount=discount>0 ? filterByPrice.filter((item)=> item.discount<=discount):filterByPrice;
    const filterByRating = rating > 0 ? filterByDiscount.filter((item) => item.rating <= rating) : filterByDiscount
    return filterByRating;

  }
  // const filterProducts = (products) => {
  //   return products
  //     .filter((item) => price > 0 ? item.price <= price : true)
  //     .filter((item) => rating > 0 ? item.rating <= rating : true);
  // };
 


  const renderProducts = (products) => {
    const filteredProducts = filterProducts(products);
    return filteredProducts.map((product) => (
      <div key={product.id} className='product-card w-full bg-gray-200 flex flex-col items-center p-4'>
        <Link to="/product-detail" state={{product}}>
        <img src={product.img} alt={product.name} className='w-48 h-48 object-cover' />
        <h3 className='text-lg font-semibold mt-2'>{product.name}</h3>
        <p className='text-sm'>Price: ₹{product.price}</p>
        <p className='text-sm'>Discount: {product.discount}%</p>
        <p className='text-sm'>Rating: {product.rating}★</p>
        </Link>
      </div>
    ));
  };

  return (
    <div className='flex'>
      {/* Filter Sidebar */}
      <div className='w-1/4 bg-gray-100 p-4'>
        <h2 className='text-xl font-semibold mb-4'>Filters</h2>

        {/* Price Filter */}
        <div className='mb-4'>
          <h3 className='text-lg font-medium'>Price</h3>
          <input
            type='number'
            name='price'
            placeholder='Limit the Price'
            value={price}
            onChange={handlePriceChange}
            className='border p-2 w-full mb-2'
          />
        </div>
        {/* Discount Filter */}
        <div className='mb-4'>
          <h3 className='text-lg font-medium'>Discount</h3>
          <input
            type='number'
            name='discount'
            placeholder='Limit the Discount'
            value={discount}
            onChange={handleDiscountChange}
            className='border p-2 w-full mb-2'
          />
        </div>

        {/* Rating Filter */}
        <div className='mb-4'>
          <h3 className='text-lg font-medium'>Rating</h3>
          <select
            name='rating'
            value={rating}
            onChange={handleRatingChange}
            className='border p-2 w-full'
          >
            <option value={0}>All</option>
            <option value={3}>3★ & below</option>
            <option value={4}>4★ & below</option>
            <option value={5}>5★</option>
          </select>
        </div>
      </div>

      {/* Product Listing */}
      <div className='w-3/4 p-4'>
        <h1 className='text-2xl font-semibold mb-4'>{category.name}</h1>

        {/* Display Products */}
        <div className='grid grid-cols-3 gap-4'>
          {category.data && renderProducts(category.data)}
          {/* {category.data && renderProducts(category.data)}
          {category.data && renderProducts(category.data)} */}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
