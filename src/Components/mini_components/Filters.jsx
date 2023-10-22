import React, { useEffect, useState } from 'react'
import "./Filters.css"
import { Typography } from '@mui/material'
function Filters({DataForFilterContainer,displayFilterContainer}) {
  const [FilteringCheckBox,setFilteringCheckBox]=useState(
    {
      colors:[],
      gender:[],
      price:[],

    })
    
  function removeItemOnce(arr, value) {
    let arrayToRet= arr.filter(elem=>elem!==value)
    return arrayToRet;
  }

  const changing=(e)=>{
    
    
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
                    <input type="checkbox" name={element} id="" />
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
              <input type="checkbox" name="male" id="" />
              <Typography><b>Male</b></Typography>
            </span>
            <span style={{display:"flex"}}>
              <input type="checkbox" name="female" id="" />
              <Typography><b>Female</b></Typography>
            </span>
          </div>

          <div>
            <b>Price</b>
            <span style={{display:"flex",alignItems:"center"}}>
              <input type="checkbox" name="0-250" id="" />
              <Typography><b>0-Rs250</b></Typography>
            </span>
            <span style={{display:"flex",alignItems:"center"}}>
              <input type="checkbox" name="251-450" id="" />
              <Typography><b>Rs251-Rs450</b></Typography>
            </span>
            <span style={{display:"flex",alignItems:"center"}}>
              <input type="checkbox" name="450" id="" />
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
