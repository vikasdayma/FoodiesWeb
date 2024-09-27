
import React from "react"
import { Link } from "react-router-dom"
const DekstopView = () => {
    return (
      <>
      <section className='lg:flex justify-between items-center  hidden '>
        
        <div className='w-1/2'> 
        <Navlink text='FoodieWeb'></Navlink>
        </div>
        
        <div className='flex w-1/2 items-center  justify-evenly'>
        <Navlink text='Our Features' to='/mealplanner' />
        <Navlink text='Search And Discover' to='/searchanddiscover' />
        <Navlink text='Recipe' to='/recipe' />
        <Navlink text='XYZSS' to='/starship' />
        <Navlink text='COMMUNITY' to='/community' />
        <button className="relative">
          <img src='black.png'  className="h-10 w-10" alt="" 
          style={{borderRadius:"50%"}}/>
          <h1 className="absolute bottom-2 left-1 text-white">V D</h1>
        </button>
      

        </div>
  
      </section>
     
      </>
    )
  }
  
  export default DekstopView
  
  const  Navlink =({text,to})=>{
   return(
      <>
     
      <Link to={to} className='text-white text-sm font-bold'>{text}</Link>
      </>
   )
  }
  