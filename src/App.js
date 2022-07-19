import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import SingleMovie from './pages/SingleMovie'

function App() {
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/movies/:id' element={<SingleMovie/>}/>  
      </Routes>
    </div>
  )
}

export default App
