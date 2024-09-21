import React from 'react'
import FeaturesCard from './FeaturesCard'
import TextField from '@mui/material/TextField';
const Features = () => {
  return (
    <>

{/* <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={()=>{
  
}}
style={{width:"60rem"}}
/> */}
  <div className='lg:flex-row   lg:justify-evenly justify-center flex items-center flex-col  mt-20 '   >
  
      <div className='lg:mt-0 lg-10 lg:p-0 p-10'>

      <FeaturesCard animation='fade-up-left' />

   
     </div> 
     

     <div className='lg:mt-0 mt-10'>
      <FeaturesCard  animation='fade-up-right' / >
      
    

      
     </div> 
      
    </div>

    
    <div className='lg:flex-row   lg:justify-evenly justify-center flex items-center flex-col  mt-20 '   >
  
  <div className='lg:mt-0 lg-10 lg:p-0 p-10'>

  <FeaturesCard animation='fade-up-left' />


 </div> 
 

 <div className='lg:mt-0 mt-10'>
  <FeaturesCard  animation='fade-up-right' / >
  


  
 </div> 
  
</div>

<div className='lg:flex-row   lg:justify-evenly justify-center flex items-center flex-col  mt-20 '   >
  
  <div className='lg:mt-0 lg-10 lg:p-0 p-10'>

  <FeaturesCard animation='fade-up-left' />


 </div> 
 

 <div className='lg:mt-0 mt-10'>
  <FeaturesCard  animation='fade-up-right' / >
  


  
 </div> 
  
</div>
<div className='lg:flex-row   lg:justify-evenly justify-center flex items-center flex-col  mt-20 '   >
  
  <div className='lg:mt-0 lg-10 lg:p-0 p-10'>

  <FeaturesCard animation='fade-up-left' />


 </div> 
 

 <div className='lg:mt-0 mt-10'>
  <FeaturesCard  animation='fade-up-right' / >
  


  
 </div> 
  
</div>
<div className='lg:flex-row   lg:justify-evenly justify-center flex items-center flex-col  mt-20 '   >
  
  <div className='lg:mt-0 lg-10 lg:p-0 p-10'>

  <FeaturesCard animation='fade-up-left' />


 </div> 
 

 <div className='lg:mt-0 mt-10'>
  <FeaturesCard  animation='fade-up-right' / >
  


  
 </div> 
  
</div>

    </>
  )
}

export default Features


