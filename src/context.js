import React, { useState, useContext, useEffect } from 'react'
import useFetch from './useFetch'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
  const[query, setQuery] = useState('john wick')
  const {isLoading, error, data: movies} = useFetch(`&s=${query}`)

  return(<AppContext.Provider value={{
    isLoading,
    movies,
    error,
    query,
    setQuery
  }}
   >
    {children}
  </AppContext.Provider>
)}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
