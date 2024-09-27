import React, { useEffect, useState } from 'react'
import { PiStarFourFill } from "react-icons/pi";
import { useTypewriter } from 'react-simple-typewriter'
import { Typewriter } from 'react-simple-typewriter';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import anime from 'animejs';
import Button from '../../common/Button';
import { addFavouriteMeals } from '../../redux/favMeal';
import { useDispatch } from 'react-redux';
import { LottiePlayer } from 'lottie-react';
import preloadAnimation from '../../../animations/Animation - 1727410242994.json'
const Meal = () => {
  const mealFormData=useSelector((state)=>state.mealdata.value)
  const a= useSelector(state=>state.meal.value)
  console.log(a)
  const dispatch=useDispatch();
  const [question, setQuestion] = useState(mealFormData)
  const [loading, setLoading] = useState(true);
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const handleFavourite=()=>{
   dispatch(addFavouriteMeals(answer))
   console.log("BH")
  }
   
 
  // const [text, helper] = useTypewriter({

  //   words:[
  //    " Create a healthy, vegetarian dinner recipe that features quinoa and seasonal vegetables. Include cooking instructions and a list of ingredients",
  //    "I have chicken, broccoli, and rice. Can you provide a quick and easy one-pot recipe that combines these ingredients? Please include cooking times and any seasonings.",
  //    "Give me a delicious dessert recipe using chocolate, berries, and cream cheese. I'd like step-by-step instructions and tips for presentation",
  //      "Message Foodgpt" ],
  
  //    //
  //   typeSpeed:10,
  //   deleteSpeed: 10,
  //   delaySpeed: 500,
  // })

  // const { isType, isDelete, isDelay, isDone } = helper
  useEffect(()=>{

    const timer = setTimeout(() => {
      setLoading(false); 
    }, 7000);

    

    async function generateAnswer(e) {
  
      setAnswer("Loading your answer... \n It might take upto 10 seconds");
      try {
        const response = await axios({         
          url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDmAI0e1dLDxRYAb22Dhi24W7hlptODP9c",
  
          method: "post",
          data: {
            contents: [{ parts: [{ text: mealFormData }] }],
          },
        });
      
  
        setAnswer(
          response["data"]["candidates"][0]["content"]["parts"][0]["text"]
        );
       console.log(answer)
      } catch (error) {
        console.log(error);
        setAnswer("Sorry - Something went wrong. Please try again!");
      }
  
      setGeneratingAnswer(false);
    }
    generateAnswer();
  },[mealFormData,question]);
  

    return (
   <>
  


  {loading ? 
     
        <div className='flex justify-center items-center w-full h-[50vw]'>
        <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      </div>
    //   <LottiePlayer
    //   autoplay
    //   loop
    //   src={preloadAnimation}
    //   style={{ height: '300px', width: '300px' }}
    // />
       : 
       
   <div className='flex justify-center items-center mt-10 w-[100%] h-auto'>
    <div className='lg:w-1/2 border-2 w-3/4 border-blue-500 p-10'>
     <h1 className='text-center text-2xl font-semibold'> Your Desired Meal</h1>
     <br />
   <h1 className='text-sm text-medium font-normal'>{answer}</h1>
   <br />
   <br />
   <Button  onClick={handleFavourite}  className='rounded-lg h-10 border-2 w-36 bg-green-600 text-white font-semibold' text='Save This Meal'></Button>
   <button  className='rounded-lg h-10 ml-4 border-2 font-semibold w-44 text-white bg-blue-600' > 
   <a href="/mealplanner">Genrate Other Meal</a>
   </button>
   </div>
   
   </div>
      }
 
 </>
  )
}

export default Meal



