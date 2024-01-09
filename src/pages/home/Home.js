import React, { useEffect, useState } from 'react';
import "./Home.scss";
import Banner from '../../components/banner/Banner';
import Category from '../../components/category/Category'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {getCategoryData, getBestSellerData, getNewArrivalData} from '../../redux/slices/categorySlice'
import HomeCatlogue from '../../components/homeCatlogue/HomeCatlogue';

function Home() {
  const categories = useSelector((state) => state.categoryReducer.categoryData)
  const bestSellers = useSelector((state) => state.categoryReducer.bestSellerData)
  const newArrival = useSelector((state) => state.categoryReducer.newArrivalData)

  console.log("this are bestSellers" ,bestSellers);
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  

  function fetchData () {
    dispatch(getCategoryData());
    dispatch(getBestSellerData());
    dispatch(getNewArrivalData());
  }
  useEffect( () =>{
    fetchData()
  }, []);


  return (
    <div className='home'>

        <Banner />

        <section className='thoughts'>
            
            <div className="thought">Gone are the days of visiting multiple physical nurseries in search of the perfect plants</div>
            <div className="thought">Transform your living spaces into lush green havens with our online plants</div>
            <div className="thought">enhance your indoor air quality and promote a sense of tranquility</div>
            
        </section>




        <section className="list-container">
            <div className="section-heading">
              <h2>your best picks</h2>
            </div>
            
            <div className="list"> 
                {categories?.map((category) => <Category key={category.id} category={category}/>)}
            </div>
            
        </section>




        <section className="list-container">
            <div className="section-heading">
              <h2>bestsellers</h2>
            </div>

            <div className="list">
              {bestSellers?.map((product) => <HomeCatlogue key = {product.id} product = {product} />)}
            </div>
        </section>


        <section className="list-container">
            <div className="section-heading">
              <h2>new arrival</h2>
            </div>

            <div className="list">
              {newArrival?.map((product) => <HomeCatlogue key = {product.id} product = {product} />)}
            </div>
        </section>
    </div>
  )
}

export default Home