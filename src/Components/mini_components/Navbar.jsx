import React from 'react'
import "./Navbar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navbar({ProductPage,cartProduct}) {
  const navigate=useNavigate();


  console.log()
  console.log(cartProduct)
  return (
    <div className='nav-container'>
        <h3>TeeRex Store</h3> 
           <div className='cart-btn-container'>
           {
                ProductPage?
                <h3 className='prod-text' >Home</h3>:
                <h3 onClick={()=>navigate('/')} className='prod-text' >Product</h3>
            }
            
            <Button onClick={()=>navigate('/cart')}  style={{backgroundColor:"darkgrey"}}    startIcon={<ShoppingCartIcon color="action"/>}><span className="cart-item-num">{cartProduct?.length}</span> </Button>
           </div>
    </div>
  )
}

export default Navbar