import React, { useEffect, useState } from 'react'
import "./Filters.css"
import { Typography } from '@mui/material'
function Filters({DataForFilterContainer,displayFilterContainer,FilterCardData,setFilterCard}) {
  
  /**
   * @function removeItem - remove if check box checked is false it remove it from filtering
   * @param {*} arr 
   * @param {*} value 
   * @returns 
   */
  function removeItem(arr, value) {
    let arrayToRet= arr.filter(elem=>elem!==value)
    return arrayToRet;
  }
/**
 * @function changing - used for filtering data depends upon the check box is selected or not
 * @param {*} e 
 */
  const changing=(e)=>{
    if(e.target.checked){
      setFilterCard([...FilterCardData,e.target.value])
    }else{
      let newArr=removeItem(FilterCardData,e.target.value);
      setFilterCard([...newArr])
    }
  }

  return(
    <>
    {DataForFilterContainer.BrandNames?.length>1
    ?
    <>
    <div style={{display:`${displayFilterContainer}`}} className='filter-container'>
        <form  onChange={(e)=>changing(e)}>
          <div>
            <b>Colours</b>
            {
              DataForFilterContainer.colors?.map(element=>{
                return(
                <>
                <span style={{display:"flex",alignItems:"center"}}>
                    <input type="checkbox" name={element} value={element} id="" />
                    <Typography><b>{element}</b></Typography>
                </span>
                </>
                )
              })
            }
          </div>
          <div>
            <b>Gender</b>
            <span style={{display:"flex",alignItems:"center"}}>
              <input type="checkbox" name="Male" value='Men' id="" />
              <Typography><b>Male</b></Typography>
            </span>
            <span style={{display:"flex"}}>
              <input type="checkbox" name='Female' value="Women" id="" />
              <Typography><b>Female</b></Typography>
            </span>
          </div>

          <div>
            <b>Price</b>
            <span style={{display:"flex",alignItems:"center"}}>
              <input type="checkbox" value={0} id="" />
              <Typography><b>0-Rs250</b></Typography>
            </span>
            <span style={{display:"flex",alignItems:"center"}}>
              <input type="checkbox" value={250} id="" />
              <Typography><b>Rs251-Rs450</b></Typography>
            </span>
            <span style={{display:"flex",alignItems:"center"}}>
              <input type="checkbox" name="450" value={450} id="" />
              <Typography><b>Rs450</b></Typography>
            </span>
          </div>
          <div>
            <b>Type</b>
            {
              DataForFilterContainer.BrandNames?.map(element=>{
                return(
                <>
                <span style={{display:"flex",alignItems:"center"}}>
                    <input type="checkbox" name={element} value={element} id="" />
                    <Typography><b>{element}</b></Typography>
                </span>
                </>
                )
              })
            }
          </div>

          

        </form>
    </div>
    </>
    :
    <>no</>}
    
    </>
  )



}
export default Filters
