import React, { useEffect, useState } from 'react'
import Navbar from '../mini_components/Navbar'
import CoverImg from "../assets/geektrust-in-logo-1505202311.webp"
import { Box, Grid } from '@mui/material'
import "./HomePage.css"
import ProductGrid from '../mini_components/ProductGrid'
import SearchField from '../mini_components/SearchField'
import Filters from '../mini_components/Filters'

function HomePage({FeturedProductData}) {


/**
 * @type {<Arr.values>} FilteringCategories - contain filtering categories
 * @function setFilteringData - to intialize FilteringCategories
 */
  const [FilteringCategories,setFilteringData]=useState({
    colors:[],
    Brands:[]
  })
  /**
   * 
   */
  const [displayFilterContainer,setDisplayContainer]=useState("none")
  /**
   * 
   */
  const [FilterCardData,setFilterCard]=useState([]);

  const [showingFilteredCard,setShowingFilterCard]=useState([])
  /**
   * @function groupingForFilterContainer
   * @param {<Arr/>} data  -product data
   * @returns {colors,BrandNames}
   * @name colors category of color in product data
   * @name BrandName - category of brand in product data
   */
  const groupingForFilterContainer=(data)=>{
    let colors=[];
    let BrandNames=[];
    data?.forEach((element)=>{
      if(!colors.includes(element.color)){
          colors.push(element.color)
      }
      if(!BrandNames.includes(element.type)){
          BrandNames.push(element.type)
      }})
     return {colors,BrandNames}
  }
  const filterProduct=(FeturedProductData,FilterCardData)=>{
    let filteredArr=[]

    FilterCardData?.map((element)=>{
    if(element=="0"){
      FeturedProductData.map((product)=>{
        if(product.price<=250)
          filteredArr.push(product) 
      })
     }
     if(element=="250"){
      FeturedProductData.map((product)=>{
        if(product.price<450&&product.price>251)
          filteredArr.push(product) 
      })
     }
     if(element=="450"){
      FeturedProductData.map((product)=>{
        if(product.price>450&&product.price<=500)
          filteredArr.push(product) 
      })
     }
    })

    FilterCardData?.map((element)=>{
        FeturedProductData.map((product)=>{
           if(product.color===element||
            product.gender===element||
            product.name===element||
            product.type===element
            ){
              
              filteredArr.push(product)
           }
          
        })
      })
    
    return filteredArr;
    
  }
  /**
   * 
   */
  useEffect(()=>{
    let filterCategories=groupingForFilterContainer(FeturedProductData);
    setFilteringData(filterCategories)
    
  },[FeturedProductData])
  /**
   * 
   */
  useEffect(()=>{
    let responceArr=filterProduct(FeturedProductData,FilterCardData);
    setShowingFilterCard([...responceArr])
  },[FeturedProductData,FilterCardData])



  return (
    <div className='Home-page'>
        <Navbar/>
        <Box className="img-container">
            <img src={CoverImg} alt="" />
        </Box>
        <Box>
          <SearchField
          displayFilterContainer={displayFilterContainer}
          setDisplayContainer={setDisplayContainer}
          />
        </Box>
        <Grid container>
            <Grid item sm={3}>
                <Filters  
                DataForFilterContainer={FilteringCategories}
                displayFilterContainer={displayFilterContainer}
                FilterCardData={FilterCardData}
                setFilterCard={setFilterCard}
                />
            </Grid>
            <Grid item className="grid-container" sm={9}>
              {showingFilteredCard?.length>0?
                <ProductGrid FeturedProductData={showingFilteredCard}/>
                :
                <ProductGrid FeturedProductData={FeturedProductData}/>
              }
              
            </Grid >
        </Grid>
        {/* <Box >
            
            <ProductGrid FeturedProductData={FeturedProductData}/>
        </Box> */}
        
        
    </div>
  )
}

export default HomePage