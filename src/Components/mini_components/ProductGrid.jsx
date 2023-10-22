import { Grid } from '@mui/material'
import React from 'react'
import './ProductGrid.css'
import ProductCard from './ProductCard'
function ProductGrid({FeturedProductData}) {
    //console.log(FeturedProductData.length)
  return (
    <Grid container className='container'>
        {
            FeturedProductData?
            FeturedProductData.map((cardDetail)=>{
                return(
                    <Grid item xs={12} sm={6} md={4} sx={{padding:1}}>
                        <ProductCard cardDetail={cardDetail}/>
                    </Grid>
                )
            })
            :
            <></>
        }
    </Grid>
  )
}

export default ProductGrid