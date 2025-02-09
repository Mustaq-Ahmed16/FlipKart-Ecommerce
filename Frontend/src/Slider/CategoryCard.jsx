import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CategoryCard = ({item}) => {
  console.log(item)
  const navigate = useNavigate();

  const onCardClick = async()=>{

    navigate(`/all-products`);

  }
  return (
    <div>
      <div className='card-container cursor-pointer'>

        <img src={item.img} onClick={onCardClick}/>
        <p>{item.name}</p>       
      </div>
      
    </div>
  )
}

export default CategoryCard
