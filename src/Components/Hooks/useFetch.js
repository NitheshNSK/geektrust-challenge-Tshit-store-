import axios from "axios";
import { useEffect, useState } from "react"


/**
 * A custom hook for making HTTP GET requests and handling loading and error states.
 *
 * @param {string} URL - The URL from which to fetch data.
 * @returns {object} - An object containing the fetched data and error state.
 *
 * @example
 * // Sample usage of useFetch custom hook in a functional component
 * const ExampleComponent = () => {
 *   const { data, error } = useFetch('"https://geektrust.s3.ap-southeast');
 *
 *
 *   
 */
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
    },[URL])
    return {data,error}
}

export default useFetch;