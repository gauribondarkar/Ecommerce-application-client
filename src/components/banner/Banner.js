import React from 'react'
import './Banner.scss'
import { useNavigate } from 'react-router-dom'


function Banner() {
  const navigate = useNavigate();
  return (
    <div className='banner'>
        <button onClick={(e) => navigate("/allProducts")}>Shop Now</button>
    </div>
  )
}

export default Banner
