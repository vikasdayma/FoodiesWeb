import React from 'react'
import Navbar from '../common/Navbar/Navbar'
const Home = () => {
  return (
    <div className='bg-black h-[100vh]'
    style={{
    backgroundImage:'url(red.jpeg)',
    backgroundSize:'cover',
    height:'100vh',
    width:"100%",

    }}
    >
     <Navbar></Navbar>
    </div>
  )
}

export default Home
