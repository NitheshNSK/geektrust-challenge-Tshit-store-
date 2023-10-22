import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box, Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import "./SearchField.css"
import { useSnackbar } from 'notistack';
const SearchField=({displayFilterContainer,setDisplayContainer,FilteringCategories,setFilterCard})=>{
  let [searchText,setSearch]=useState(null);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  
  const SearchingFunction=(searchText)=>{
    let {colors,BrandNames}=FilteringCategories;
    colors=colors.map(ele=>ele.toLowerCase());
    BrandNames=BrandNames.map(ele=>ele.toLowerCase());
  
    
    if(colors.includes(searchText.toLowerCase())||BrandNames.includes(searchText.toLowerCase()))
      setFilterCard([searchText])
    else{
      enqueueSnackbar({variant:"warning",message:"Not found",autoHideDuration:1000})
      setFilterCard([])
    }

      
  }
  useEffect(()=>{
    if(searchText=" "){
      setFilterCard([])
    }
  },[searchText])

  const displayFilter=()=>{
    displayFilterContainer=="none"?setDisplayContainer("block"):setDisplayContainer("none")
  }
return (
    <>
    <div className='search-container'>
        <TextField id="standard-basic" label="Search for products" variant="standard" 
        onChange={(e)=>{setSearch(e.target.value)}} value={searchText} />
        <Button onClick={()=>{SearchingFunction(searchText)}} style={{backgroundColor:"black",marginLeft:"1rem"}}  variant="contained"><SearchIcon/></Button>
        <Button id="filter-btn" onClick={()=>{displayFilter()}} style={{backgroundColor:"black",marginLeft:"1rem"}} variant='contained'><FilterAltIcon/></Button>
    </div>
    </>
  )
}

export default SearchField