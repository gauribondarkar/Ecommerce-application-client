import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getAllProducts } from '../../redux/slices/productSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import HomeCatlogue from '../homeCatlogue/HomeCatlogue'


function AllProducts() {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.productReducer.allProductsData)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    
  return (
    <div className="list-container">
            <div className="section-heading">
              <h2>All plants</h2>
            </div>

            <div className="list">
              {allProducts?.map((product) => <HomeCatlogue key = {product.id} product = {product} />)}
            </div>
        </div>
  )
}

export default AllProducts