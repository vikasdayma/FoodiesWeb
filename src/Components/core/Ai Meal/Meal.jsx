import React, { useState } from 'react'
// import { PiStarFourFill } from "react-icons/pi";
import { useTypewriter } from 'react-simple-typewriter'

const Meal = () => {
  const[prompt,setPrompt]=useState();

  const [text, helper] = useTypewriter({

    words:[
     " Create a healthy, vegetarian dinner recipe that features quinoa and seasonal vegetables. Include cooking instructions and a list of ingredients",
     "I have chicken, broccoli, and rice. Can you provide a quick and easy one-pot recipe that combines these ingredients? Please include cooking times and any seasonings.",
     "Give me a delicious dessert recipe using chocolate, berries, and cream cheese. I'd like step-by-step instructions and tips for presentation",
       "Message Foodgpt" ],
    loop: 1, //
    typeSpeed:10,
    deleteSpeed: 10,
    delaySpeed: 500,
  })

  const { isType, isDelete, isDelay, isDone } = helper
  
  const handlePrompt=(e)=>{
  if(e.target.value!=""){
    console.log(e.target.value)
  }
  }
    return (
  <section className='mb-10'>

  <div className='lg:flex-row flex flex-col items-center lg:justify-center mt-28' >
   <h1 className='sm:text-6xl text-4xl text-blue-600 font-bold'> AI Meal Planner</h1>
   <h1 className='sm:text-6xl text-4xl lg:ml-2 font-bold '> on Demand. </h1>


  </div>
  <br />
  <br />
  <br />
  <br />



  <div className='flex justify-center '>
  <div className='bg-gray-600 w-[80vw] xl:h-[12vw] h-[45vh] flex-col overflow-hidden relative rounded-md'>
  <div className='xl:h-1/2 h-[82%] ml-3 mr-3  '>
    
  <textarea type="text" placeholder={`${text}`} className='w-[79vw] pr-5 mt-2 text-lg font-medium  text-white h-14 overflow-hidden resize-none bg-gray-600 outline-none' 
  onChange={handlePrompt} />
  </div>


 
   <div className= ' flex md:justify-end justify-center items-end   xl:h-1/2'>
   <button className='bg-white font-medium h-[2.6rem] flex justify-center items-center  md:w-[8rem] w-[70vw] rounded-lg mb-5 md:mr-5 '>
   {/* <PiStarFourFill className='mr-2'/> */}
   Genrate
   </button>
   </div>

 

</div>
 </div>
 </section>
  )
}

export default Meal
