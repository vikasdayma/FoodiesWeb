import { useState } from 'react'
import './App.css'
import Home from './Components/core/Home'
import { Link } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Features from './Components/core/Features/Features'
import FeaturesCard from './Components/core/Features/FeaturesCard'
import Feature1 from './Components/core/Features/Feature1'
import Meal from './Components/core/Meal/Meal'
import MealPlannerForm from './Components/core/Meal/MealPlannerForm'
import Model   from './Components/common/AI Model/Model'


function App() {
 

  return (
    <div className='' >
 
   <Routes>
  
   <Route path='/' element={<MealPlannerForm/>} />  
   {/* <Route path='/mealplanner' element={<Meal/>}  />
   <Route path='/ourfeatures' element={<Meal/>}  />
   <Route path='/mealplanner' element={<Meal/>}  /> */}
  </Routes>
  



    </div>
  )
}

export default App


