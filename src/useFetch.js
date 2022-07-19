import React, {useState, useEffect} from "react";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

//using the url params for making the function works dynamically in both cases
const useFetch = (urlParams) =>{
    const[isLoading, setIsLoading] = useState(true)
    const[error, setError] = useState({
      show:false,
      msg: ''
    })
    // we changed name to data and set data to make the data work for both arrays(movies) and objects(single movie)
     const[data, setData] = useState([])

     const fetchMovies = async(url) =>{
        setIsLoading(true)
        try {
          const response = await fetch(url)
          const data = await response.json() 
          if(data.Response === 'True'){
            setData(data.Search || data)
            setError({show:false, msg:''})
          }else{
            setError({show:true, msg:data.Error})
          } 
          setIsLoading(false)
        } catch (error) {
            console.log(error)
         }
       }
      // the use of urlParams parameters is to make the function used dynamically in both cases whether its '&s=' OR '&i=' for search and ID
      useEffect(() => {
        fetchMovies(`${API_ENDPOINT}${urlParams}`)
      }, [urlParams])

      return{isLoading, error, data}
}

export default useFetch