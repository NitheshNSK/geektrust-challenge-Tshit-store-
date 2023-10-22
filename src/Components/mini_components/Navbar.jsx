import React from 'react'
import "./Navbar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, TextField } from '@mui/material';

function Navbar({ProductPage}) {
  return (
    <div className='nav-container'>
        <h3>TeeRex Store</h3> 
           <div className='cart-btn-container'>
            {
                ProductPage?
                <h3 className='prod-text' >Home</h3>:
                <h3 className='prod-text' >Product</h3>
            }
            
            <Button style={{backgroundColor:"darkgrey"}}    startIcon={<ShoppingCartIcon color="action"/>}><span className="cart-item-num">1</span> </Button>
           </div>
    </div>
  )
}

export default Navbar