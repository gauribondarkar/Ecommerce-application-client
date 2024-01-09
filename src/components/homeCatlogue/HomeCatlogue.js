import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomeCatlogue({product}) {

  const navigate = useNavigate();
  return (
    <div className='product-box'>
        <div  onClick={(e) => navigate(`product/${product._id}`)}> 
          <img src={product.image.url} alt="" className="image" />
        </div>

        <div className="info">

          <h2 className='product-name'>{product.name}</h2>
          <h3 className='product-price'>₹{product.price}</h3>
          <button onClick={(e) => navigate(`product/${product._id}`)} className='view-product-btn'>
            view product
          </button>
        </div>
        
    </div>
  )
}

export default HomeCatlogue