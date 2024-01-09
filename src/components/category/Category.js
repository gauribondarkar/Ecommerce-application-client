import React from 'react'
import './Category.scss'
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'


function Category({category}) {
    console.log("this is category state", category);
    const navigate = useNavigate();
  return (
    <div className='category'
    style={{backgroundImage: `url(${category.image.url})`}}
    onClick={(e) => navigate(`/category/collection/${category._id}`)}>
      <div className="category-heading">
        <h2>{category.title}</h2>
      </div>
        
    </div>
  )
}

export default Category