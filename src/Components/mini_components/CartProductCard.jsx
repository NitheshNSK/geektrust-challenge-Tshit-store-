import { Box, Button } from '@mui/material'
import React, {  useState } from 'react'
import "./CartProductCard.css"




function CartProductCard({cartProduct,details,setCartProduct}) {

  const [selector,setSelector]=useState(false);


  /**
 * Deletes a specific item from the cart based on its details.
 *
 * @param {Array} cartProduct - The current array of products in the cart.
 * @param {Object} details - The details of the product to be deleted from the cart.
 * @param {Function} setCartProduct - A function to update the cart with the modified products array.
 * @returns {undefined} - This function does not return a value.
 *
 * @example
 * // Sample usage of deleteItemFromCart function
 * const cartProduct = [{ id: 1, product_qty: 2 }, { id: 2, product_qty: 1 }];
 * const details = { id: 1, product_qty: 2 };
 * deleteItemFromCart(cartProduct, details, setCartProduct);
 *
 */
  const deleteItemFromCart=(cartProduct,details,setCartProduct)=>{
      let resArr=cartProduct.map((prod)=>{
          if(prod.id===details.id){
            return({
              product_qty:0,
            })
          }else{
            return{
              ...prod
            }
          }
      })
      var newArray = resArr.filter(value=>{
        if(value.product_qty!==0){
            return value;
        }
        });
    setCartProduct([...newArray])

  }

  /**
 * Updates the quantity of a specific item in the cart based on user input.
 *
 * @param {Object} event - The event object representing the user input (e.g., change event).
 * @param {Array} cartProduct - The current array of products in the cart.
 * @param {Object} details - The details of the product whose quantity needs to be updated.
 * @param {Function} setCartProduct - A function to update the cart with the modified products array.
 * @returns {undefined} - This function does not return a value.
 *
 * @example
 * // Sample usage of updateQuantity function
 * const event = { target: { value: 3 } };
 * const cartProduct = [{ id: 1, product_qty: 2 }, { id: 2, product_qty: 1 }];
 * const details = { id: 1, product_qty: 2 };
 * updateQuantity(event, cartProduct, details, setCartProduct);
 *
 * // After the function call, cartProduct will be updated to [{ id: 1, product_qty: 3 }, { id: 2, product_qty: 1 }].
 */
  const updateQuantity=(event,cartProduct,details,setCartProduct)=>{
      let qty=event.target.value;
      console.log(qty)
      let newArr=cartProduct.map((prod)=>{
        if(prod.id===details.id){
          console.log("true")
          return(
            {
              ...details,
              product_qty:Number(qty)
            }
          )
        }else{
          return({
            ...prod
          })
        }
      })
      setCartProduct([...newArr]);
  }

  /**
 * Generates an array of numbers representing options from 1 to the specified value (inclusive).
 *
 * @param {number} values - The upper limit of the options to be generated.
 * @returns {Array} - An array of numbers from 1 to the specified value.
 *
 * @example
 * // Sample usage of the option function
 * const values = 5;
 * const options = option(values);
 * console.log(options); // Output: [1, 2, 3, 4, 5]
 *
 * // You can use this function to generate options for a dropdown menu or any other similar UI component.
 */
  const option=(values)=>{
    let opt=[];
    for(let i=1;i<=values;i++){
      opt.push(i)
    }
    return opt;
  }

  return (
    <div className='cart-card-container'>
        <Box className="image-container">
            <img src={details.imageURL} alt="" />
        </Box>
        <Box className="cart-card-detail">
            <div><b style={{color:"black"}}>Name</b>  <b>{details.name}</b></div>
            <div><b style={{color:"black"}}>Rs </b>  <b>₹{details.price}</b></div>
            <div>
              {selector?
              <select name="Qty" id="Qty" onChange={(e)=>updateQuantity(e,cartProduct,details,setCartProduct)}>
                  {
                    option(details.quantity).map((value)=>{
                      return(<option value={value}>{value}</option>)
                    })
                  }
              </select>:
                  <Button onClick={()=>setSelector(true)}>
                      Qty
                  </Button>
              }
                
                
              <Button onClick={()=>{deleteItemFromCart(cartProduct,details,setCartProduct)}}>Delete</Button>
            </div>
        </Box>
    </div>
  )
}

export default CartProductCard