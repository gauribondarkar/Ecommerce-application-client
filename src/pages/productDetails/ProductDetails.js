import React from 'react'
import "./ProductDetails.scss"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/slices/productSlice'
import { addToCart } from '../../redux/slices/cartSlice'

function ProductDetails() {
  const productDetails = useSelector((state) => state.productReducer.productData)
  console.log("we are getting product details now", productDetails);
  const dispatch = useDispatch();
  const params = useParams();
  console.log("thuis is params", params);
  useEffect(() => {
    dispatch(getProductDetails({
      productId: params.productId
    }))
  }, [])
  return (
    <div className='productDetails'>
      <div className="upper-part">
          <div className="left-container">
            <img src={productDetails.data?.image.url} alt="" />
          </div>
          <div className="right-container">
            <h1 className='product-name'>{productDetails.data?.name}</h1>
            <h3 className='product-price'>₹{productDetails.data?.price}</h3>
            <button onClick={(e) => dispatch(addToCart(productDetails))}>
                add to cart
            </button>
          </div>
      </div>
      


      <div className="lower-part">
        <h2 className="heading">about the product</h2>
        <div className="description">
          <p>{productDetails.data?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails