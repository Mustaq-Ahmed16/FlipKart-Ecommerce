import React from 'react'
import CategoryCard from './CategoryCard'
import { useNavigate } from 'react-router-dom';
import categoryData from '../Data/categoryData.jsx'
// const category_list = [
//   {
//     name:"Cloting",
//     img: "https://rukminim1.flixcart.com/fk-p-flap/320/170/image/0383e3efa8e391e7.jpg?q=90",

//   },
//   {
//     name:"Accessories",
//     img: "https://rukminim1.flixcart.com/fk-p-flap/320/170/image/50ecf765e1e2f573.jpg?q=20"
//   },
//   {
//     name:"Electronics",
//     img: "https://rukminim1.flixcart.com/fk-p-flap/320/170/image/6e66131320a2069c.jpg?q=90"
//   },
//   {
//     name:"Groceries",
//     img: "https://rukminim1.flixcart.com/fk-p-flap/320/170/image/5b4d4e9118e0c6a1.jpg?q=20"

//   }
// ];



const CategoryList = () => {
  return (
    <div className='flex flex-wrap items-center justify-between'>
    {
      categoryData.map((item)=>{
        return (
          <>
            <CategoryCard item={item}/>
          </>
          
        )
      })
    }
    
    </div>
  );
};

export default CategoryList;

