import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import "./SearchField.css"
const SearchField=({displayFilterContainer,setDisplayContainer})=>{
  let [searchText,setSearch]=useState("");
  const displayFilter=()=>{
    displayFilterContainer=="none"?setDisplayContainer("block"):setDisplayContainer("none")
  }
return (
    <>
    <div className='search-container'>
        <TextField id="standard-basic" label="Search for products" variant="standard" 
        onChange={(e)=>{setSearch(e.target.value)}} value={searchText} />
        <Button onClick={()=>{}} style={{backgroundColor:"black",marginLeft:"1rem"}}  variant="contained"><SearchIcon/></Button>
        <Button id="filter-btn" onClick={()=>{displayFilter()}} style={{backgroundColor:"black",marginLeft:"1rem"}} variant='contained'><FilterAltIcon/></Button>
    </div>
    </>
  )
}

export default SearchField