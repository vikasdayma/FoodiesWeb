import React from 'react'

const Hero = () => {
  return (
    <div className=' mt-20'>
    <h1  className='text-white text-center font-bold lg:text-5xl text-3xl'>iPhone 15 Pro</h1>
    <div className='flex justify-center'>
    <video src="hero.mp4"  autoPlay   muted className='lg:h-[50vh] lg:w-[80vw]  right-10 h-60 w-60s'></video>  
    </div>
    <div className='text-white flex justify-center  '>
        <button className='text-xl rounded-full  bg-blue-600 h-10 w-20'>Buy</button>
        </div>
    <h1 className='text-center text-white flex justify-center mt-2 text-xl'>from 199$/Month or 899$ </h1>

    </div>
  )
}

export default Hero
