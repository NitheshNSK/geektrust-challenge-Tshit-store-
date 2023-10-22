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
  const [displayFilterContainer,setDisplayContainer]=useState("none")
  
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

  /**
   * 
   */
  useEffect(()=>{
    let filterCategories=groupingForFilterContainer(FeturedProductData);
    setFilteringData(filterCategories)
    
  },[FeturedProductData])




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
                />
            </Grid>
            <Grid item className="grid-container" sm={9}>
              <ProductGrid FeturedProductData={FeturedProductData}/>
            </Grid >
        </Grid>
        {/* <Box >
            
            <ProductGrid FeturedProductData={FeturedProductData}/>
        </Box> */}
        
        
    </div>
  )
}

export default HomePage