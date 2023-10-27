import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import "./SearchField.css"
import { useSnackbar } from 'notistack';
const SearchField=({displayFilterContainer,setDisplayContainer,FilteringCategories,setFilterCard})=>{
  let [searchText,setSearch]=useState(null);
  const { enqueueSnackbar } = useSnackbar()
  

/**
 * Searches for a specific keyword in the filtering categories (colors and brand names).
 * If the keyword matches any color or brand name, it sets the filter card to display the matched item.
 * If no match is found, it displays a warning message using the enqueueSnackbar function and clears the filter card.
 *
 * @param {string} searchText - The text to be searched within the filtering categories.
 * @param {object} FilteringCategories - An object containing filtering categories like colors and brand names.
 * @param {function} setFilterCard - A function to set the filter card with the matched item or clear it.
 * @param {function} enqueueSnackbar - A function to display snackbar notifications.
 * @returns {undefined} - This function does not return a value.
 *
 * @example
 * // Sample usage of SearchingFunction
 * const searchText = 'red';
 * const FilteringCategories = {
 *   colors: ['red', 'green', 'blue'],
 *   BrandNames: ['brand1', 'brand2', 'brand3']
 * };
 * const setFilterCard = (filteredItems) => {
 *   // Function to set the filter card based on the matched items
 * };
 * const enqueueSnackbar = (options) => {
 *   // Function to display snackbar notifications
 * };
 * SearchingFunction(searchText, FilteringCategories, setFilterCard, enqueueSnackbar);
 *
 * // If 'red' is found in colors, setFilterCard(['red']) will be called.
 * // If 'red' is not found, a warning message 'Not found' will be displayed using enqueueSnackbar.
 */
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

  /**
 * Toggles the visibility of the filter container between "block" and "none".
 * If the current display style is "none", sets it to "block" to make the container visible.
 * If the current display style is "block", sets it to "none" to hide the container.
 *
 * @returns {undefined} - This function does not return a value.
 *
 * @example
 * // Sample usage of displayFilter function
 * displayFilter();
 *
 * // When calling this function, it will toggle the visibility of the filter container.
 */

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