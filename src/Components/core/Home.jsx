import React from 'react'
import Navbar from '../common/Navbar/Navbar'
const Home = () => {
  return (
    <div className='bg-black h-[100vh] opacity-95'
    style={{
    backgroundImage:'url(foodbackground.jpg)',
    backgroundSize:'cover',
    height:'140vh',
    width:"100%",
    
    }}
    >
   
     <Navbar></Navbar>
     <div className='h-[50vh] w-full flex justify-cent3er items-center'>
      <h1 className='text-start ml-3  text-8xl o opacity-80 text-white font-bold'
      style={
        {
          textShadow:"10px 10px black"
        }
      }>Eat Food Of Your Choice</h1>
     </div>
    </div>
  )
}

export default Home
