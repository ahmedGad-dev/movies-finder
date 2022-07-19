import React, {useEffect, useRef, useState} from 'react'
import {  Link, useParams } from 'react-router-dom'
import { API_ENDPOINT } from '../context'
import useFetch from '../useFetch'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'


const SingleMovie = () => {
  let { id }= useParams()
  const {isLoading, error, data:movie} = useFetch(`&i=${id}`)


  if(isLoading){
     return <div className='loading'></div>
  } else if(error.show){
      return( 
        <div className='page-error'>
          <h1>{error.msg}</h1>
          <Link to='/' className='btn'>
            back to movies
          </Link>
        </div>
       ) 
    }else{
      const{Title:title, Year: year , Poster:poster, Plot:plot} = movie
      return(
        <section className='single-movie'>
          <img src={poster === 'N/A'? url:  poster} alt={title} />
          <div className='single-movie-info'>
            <h2>{title}</h2>
            <p>{plot}</p>
            <h4>{year}</h4>
            <Link to='/' className='btn'>
              back to movies
            </Link>
          </div>
        </section>
      )
    }        
}

export default SingleMovie


// the old fetch function
/* 
  const fetchMovie = async(url) =>{
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    if(data.Response === 'False'){
         setError({show:true, msg:data.error})
         setLoading(false)
    }else{
      setMovie(data)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`)
  }, [id])

*/