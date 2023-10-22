import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import "./ProductCard.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function ProductCard({cardDetail}) {
  return (
    <Box className="card-container">
        <Box className="card-img-container">
            <img className='card-img' src={cardDetail.imageURL} alt="" />
        </Box>
            
        <Stack>
        <Box>
                <Box className="card-detail">
                    <span  className='details' >Name: </span>
                    <span className='details' >{cardDetail.name}</span>
                </Box>
                <Box className="card-detail">
                    <span  className='details' >Rs: </span>
                    <span className='details'>₹{cardDetail.price}</span>
                </Box>
        </Box>
            <Box className="card-btn">
                <Button variant="contain" sx={{backgroundColor:"green",color:"white"}} startIcon={<AddShoppingCartIcon/>}>
                    ADD TO CART
                </Button>
            </Box>
            
        </Stack>
        
    </Box>
  )
}

export default ProductCard