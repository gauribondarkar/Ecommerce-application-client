import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCollectionData } from '../../redux/slices/collectionSlice';
import { useParams } from 'react-router-dom';
import ProductList from '../../components/productList/ProductList';
import './Collection.scss'


function Collection() {
    const params = useParams();
    console.log("this is params", params.categoryId);
    const collection = useSelector((state) => state.collectionReducer.collectionData)
    console.log("this is collection state", collection);
    const dispatch = useDispatch();
    useEffect(() =>{
      console.log("inside useeffent");
        dispatch(getCollectionData({
          categoryId: params.categoryId
        }))
    }, [])


  return (
    <div className='collection'>
            {collection?.map((product) => <ProductList key = {product.id} product= {product} />)}
    </div>
  )
}

export default Collection