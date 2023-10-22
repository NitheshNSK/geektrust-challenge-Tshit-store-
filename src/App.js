import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './Components/pages/HomePage';
import ProductPage from './Components/pages/ProductPage';
import CartPage from './Components/pages/CartPage';
import useFetch from './Components/Hooks/useFetch';
import { GEEK_TRUST_ENDPOINT } from './configs/config';
import { useState } from 'react';

function App() {
  const [cartProduct,setCartProduct]=useState([])
  const {data,error}=useFetch(GEEK_TRUST_ENDPOINT)
  
  return (
    <div>
    <Routes>
      <Route index path='/' element={<HomePage FeturedProductData={data} setCartProduct={setCartProduct} cartProduct={cartProduct}/> } />
      <Route path='product' element={<ProductPage />}/>
      <Route path='cart' element={<CartPage cartProduct={cartProduct}/>} />
    </Routes>
    </div>
  );
}


export default App;
