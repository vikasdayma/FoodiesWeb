import React from 'react'
import FeaturesCard from './FeaturesCard'
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import card1 from '../../../Utils/card1.jpg'
import card2 from '../../../Utils/card2.jpg'
import card3 from '../../../Utils/card3.jpg'
import card4 from '../../../Utils/card4.jpg'
import Card from '../../../Card';
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

      <Card animation='fade-up' img1={card1} />

   
     </div> 
     

     <div className='lg:mt-0 mt-10'>
     <Card animation='fade-up' img1={card2} />
      
     </div> 

     <div className='lg:mt-0 mt-10'>
     <Card animation='fade-up' img1={card2} />
      
     </div> 
      
    </div>

    
    <div className='lg:flex-row   lg:justify-evenly justify-center flex items-center flex-col  mt-20 '   >
  
  <div className='lg:mt-0 lg-10 lg:p-0 '>

  <Card animation='fade-up' img1={card3} />


 </div> 
 

 <div className='lg:mt-0 mt-10'>
 <Card animation='fade-up' img1={card1} />
  


  
 </div> 

 <div className='lg:mt-0 mt-10'>
     <Card animation='fade-up' img1={card2} />
      
     </div> 
  
</div>

  





    </>
  )
}

export default Features

