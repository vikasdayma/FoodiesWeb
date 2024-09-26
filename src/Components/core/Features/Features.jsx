import React from 'react'
import FeaturesCard from './FeaturesCard'
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
const Features = () => {
  const a =useSelector((state)=>state.mealdata.value)
  console.log(a)
  return (
    <>

{/* <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={()=>{
  
}}
style={{width:"60rem"}}
/> */}
  <div className='lg:flex-row   lg:justify-evenly justify-center flex items-center flex-col  mt-20 '   >
  
      <div className='lg:mt-0 lg-10 lg:p-0 '>

      <FeaturesCard animation='fade-up' />

   
     </div> 
     

     <div className='lg:mt-0 mt-10'>
      <FeaturesCard  animation='fade-up' / >
      
    

      
     </div> 
      
    </div>

    
    <div className='lg:flex-row   lg:justify-evenly justify-center flex items-center flex-col  mt-20 '   >
  
  <div className='lg:mt-0 lg-10 lg:p-0 '>

  <FeaturesCard animation='fade-up' />


 </div> 
 

 <div className='lg:mt-0 mt-10'>
  <FeaturesCard  animation='fade-up' / >
  


  
 </div> 
  
</div>

<div className='lg:flex-row   lg:justify-evenly justify-center flex items-center flex-col  mt-20 '   >
  
  <div className='lg:mt-0 lg-10 lg:p-0 '>

  <FeaturesCard animation='fade-up' />


 </div> 
 

 <div className='lg:mt-0 mt-10'>
  <FeaturesCard  animation='fade-up-' / >
  


  
 </div> 
  
</div>
<div className='lg:flex-row   lg:justify-evenly justify-center flex items-center flex-col  mt-20 '   >
  
  <div className='lg:mt-0 lg-10 lg:p-0 '>

  <FeaturesCard animation='fade-up' />


 </div> 
 

 <div className='lg:mt-0 mt-10'>
  <FeaturesCard  animation='fade-up' / >
  


  
 </div> 
  
</div>
<div className='lg:flex-row   lg:justify-evenly justify-center flex items-center flex-col  mt-20 '   >
  
  <div className='lg:mt-0 lg-10 lg:p-0'>

  <FeaturesCard animation='fade-up' />


 </div> 
 

 <div className='lg:mt-0 mt-10'>
  <FeaturesCard  animation='fade-up' / >
  


  
 </div> 
  
</div>

    </>
  )
}

export default Features

