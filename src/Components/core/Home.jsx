import React from 'react'
import Navbar from '../common/Navbar/Navbar'
import Button from '../common/Button';
const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url('bgfood1.jpg')`, // Path to your image
    backgroundSize: 'cover', // Ensures the image covers the entire container
   
    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    height: '140vh', // Full viewport height to create the illusion of distance
   
  };
  return (
    <div className='bg-black h-[100vh] opacity-95'
    style={backgroundStyle}
    >
   
     <Navbar></Navbar>
     <div className='h-[50vh] w-full flex justify-cent3er items-center'>
      {/* <h1 className='text-start ml-3  text-8xl o opacity-80 text-white font-bold'
      style={
        {
          textShadow:"10px 10px black"
        }
      }>Eat Food Of Your Choice</h1> */}
      <h1 className='text-7xl text-white font-bold mt-28 ml-6  '>Explore AI Tools </h1>
    
     </div>
     <div className='w-2/5'>
     <p className='text-2xl text-white ml-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quo nesciunt pariatur  .</p>
     <br />
     <Button className='bg-orange-600 text-3xl border-2 ml-6 border-white  text-white font-bold h-12 w-48 rounded-lg' text='Explore'></Button>
    </div>
    </div>
  )
}

export default Home
