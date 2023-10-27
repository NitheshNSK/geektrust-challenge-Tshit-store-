import { Box, Button, Stack } from '@mui/material'
import React, {  useState } from 'react'
import "./ProductCard.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSnackbar } from 'notistack';

function ProductCard({cardDetail,setCartProduct,cartProduct}) {
    const { enqueueSnackbar } = useSnackbar()
    const [counter,setCounter]=useState(0);

const productExistInCart=(cartProduct,cardDetail,counter)=>{
    if(counter===1){
        let res=cartProduct.map((elem=>{
            if(elem.id===cardDetail.id){
                return true
            }else{
                return false
            }
        }))
        if(res.includes(true)){
            enqueueSnackbar({variant:'error',message:"Already added in your cart"});
            setCounter(0)
        }else{
            setCartProduct([...cartProduct,{...cardDetail,product_qty:1}])
        }
       
    }
    else{
        let resArr=cartProduct.map((product)=>{
            if(product.id===cardDetail.id){
                return({
                    ...product,
                    product_qty:counter
                })
            }
            else{
                return({
                    ...product
                })
            }
        })
        var newArray = resArr.filter(value=>{
            if(value.product_qty!==0){
                return value;
            }
            });
        setCartProduct([...newArray])
    }
   
}


const addCounterValue=(cartProduct,cardDetail)=>{
    if(counter+1>cardDetail.quantity){
        enqueueSnackbar({variant:"warning",message:"We have enough quantity for this product",autoHideDuration: 2000 })
    }else{
        setCounter(counter+1)
        productExistInCart(cartProduct,cardDetail,counter+1)
    }
}
const decreaseCounterValue=(cartProduct,cardDetail)=>{
    setCounter(counter-1)
    productExistInCart(cartProduct,cardDetail,counter-1)
    
}

  return (
    <Box className="card-container" id={cardDetail.id}>
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
                {
                    counter<=0?
                    <Button 
                    variant="contain" 
                    sx={{backgroundColor:"green",color:"white"}} 
                    startIcon={<AddShoppingCartIcon/>}
                    onClick={()=>addCounterValue(cartProduct,cardDetail)}
                    >
                    ADD TO CART
                    </Button>
                    :
                    <Box>
                    <Button onClick={()=>decreaseCounterValue(cartProduct,cardDetail)} ><RemoveIcon/></Button><b>{counter}</b><Button onClick={()=>addCounterValue(cartProduct,cardDetail)} ><AddIcon/></Button>
                    </Box>
                }
                
            </Box>
            
        </Stack>
        
    </Box>
  )
}

export default ProductCard;
