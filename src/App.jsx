import { useState } from 'react'
import './App.css'
import Home from './Components/core/Home'
import { Link } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Features from './Components/core/Features/Features'

import Feature1 from './Components/core/Features/Feature1'
import Meal from './Components/core/Ai Meal/Meal'

function App() {
 

  return (
    <div className='' >
 
   <Routes>
   <Route path='/' element={<Home/>} /> 
 
    <Route path='/ourfeatures' element={<Features/>} />
    <Route path='/' element={<Home/>} />
    <Route path='/feature1' element={<Feature1/>} />
  </Routes> 
  <Meal></Meal>
  <Features></Features>
  
    </div>
  )
}

export default App
