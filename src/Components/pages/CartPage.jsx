import React from 'react'
import Navbar from '../mini_components/Navbar'
import { Button, Grid, Stack } from '@mui/material'
import "./CartPage.css"
import { useNavigate } from 'react-router-dom'
import CartProductCard from '../mini_components/CartProductCard'

function CartPage({cartProduct,setCartProduct}) {
  /**
 * Calculates the total cost of items in the cart based on their quantities and prices.
 *
 * @param {Array} cartProduct - The array of products in the cart, each with a quantity and price.
 * @returns {number} - The total cost of all items in the cart.
 *
 * @example
 * // Sample usage of TotalCost function
 * const cartProduct = [
 *   { id: 1, product_qty: 2, price: 10 },
 *   { id: 2, product_qty: 1, price: 15 }
 * ];
 * const totalCost = TotalCost(cartProduct);
 * console.log(totalCost); // Output: 35 (2 * 10 + 1 * 15)
 *
 * // You can use this function to calculate the total cost of items in the cart for checkout.
 */
  const TotalCost=(cartProduct)=>{
    let totalCost=0;
    cartProduct.forEach((prod)=>{
        totalCost+=prod.product_qty*prod.price;
    })
    console.log(totalCost);
    return totalCost
  }
  const navigate=useNavigate();
  return (
    <div>
      <Navbar cartProduct={cartProduct}/>
      
        <Grid container className='cart-container'>
          <Grid item xs={12} sm={8} sx={{display:"flex"}}>
              {cartProduct.length<1?
              <div className='empty-cart'>
                  <h1>Your cart is empty </h1>
                  <h4>Start shopping !!!</h4>
                  <Button onClick={()=>navigate('/')} variant='contain' sx={{backgroundColor:"green",color:"white"}}>Continue Shopping</Button>
              </div>
              :
              <div className='cart-products-container'>
                <h1>Your Cart items</h1>
                  {cartProduct.map((prod)=>{
                    return(<CartProductCard cartProduct={cartProduct} details={prod} setCartProduct={setCartProduct}/>)
                  })}
              </div>
              
              }
          </Grid>
          <Grid item xs={12} sm={4} className='billing' >
            <h1>Billing</h1>
              {
                cartProduct.length>=1?
                <div className='billing-container'>
                  <table className='billing-table'>
                  <tr>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Price</th>
                  </tr>
                  {cartProduct.map((prod)=>{
                      return(
                      <tr>
                      <td>{prod.name}</td>
                      <td>{prod.product_qty}</td>
                      <td>{prod.product_qty*prod.price}</td>
                      </tr>)
                    })
                  }
                    <tr>
                        <td><b>Total</b></td>
                        <td></td>
                        <td><b>{TotalCost(cartProduct)}</b></td>
                    </tr>
                  </table>
                  <Stack direction={"row"} justifyContent={"center"}>
                  <Button variant='contain' sx={{backgroundColor:"green",color:"white"}}>Order now</Button>
                  </Stack>
                  
                </div>
                :
                <>
                </>
              }
              
          </Grid>
        </Grid>
      
    </div>
  )
}

export default CartPage