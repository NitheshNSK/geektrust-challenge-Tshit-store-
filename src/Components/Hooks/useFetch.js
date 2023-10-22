import axios from "axios";
import { useEffect, useState } from "react"

const useFetch=(URL)=>{
    const [data,setData]=useState(null);
    const [error,setError]=useState(false);
    const fetchData=async(URL)=>{
        try{
            let response=await axios.get(URL);
            setData(response.data);
        }catch(e){
            setError(true);
        }
    }
    useEffect(()=>{
        fetchData(URL);
    },[])
    return {data,error}
}

export default useFetch;