import React from 'react'
import Navbar from '../mini_components/Navbar'
import { Grid, Stack } from '@mui/material'
import "./CartPage.css"
function CartPage({cartProduct}) {
  return (
    <div>
      <Navbar cartProduct={cartProduct}/>
      
        <Grid container className='cart-container'>
          <Grid item xs={12} sm={8}>
              {cartProduct.length<1?
              <>Cart is empty</>
              :
              <>
              </>
              
              }
          </Grid>
          <Grid item xs={12} sm={4}>
              <h1>hello</h1>
          </Grid>
        </Grid>
      
    </div>
  )
}

export default CartPage