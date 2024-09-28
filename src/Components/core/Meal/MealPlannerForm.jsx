import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { collectData } from '../../redux/formData';
import { Link } from 'react-router-dom';
import Meal from './Meal';
export default function MealPlannerForm() {
  const dispatch=useDispatch();
  const [isGenrated,setIsGenrated]=useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    foodPreference: '',
    cuisinePreference: '',
    mealFrequency: '',
    dailyCalories: '',
    favoriteIngredients: '',
    foodAllergies: '',
    excludeIngredients: '',
    dietGoal: '',
    snackPreference: '',
    preferredMealTime: '',
    drinkPreference: '',
    cookingSkillLevel: '',
    Promt:"On the basis of the given data please genrate meal a plan "
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    
    if(
  //     formData.name!="" && formData.age!="" && formData.email!="" && formData.foodPreference !=""&& formData.cuisinePreference!=""
  //  && formData.mealFrequency!="" && formData.dailyCalories!="" && formData.favoriteIngredients!="" && formData.foodAllergies!="" && formData.dietGoal!=""
  // && formData.excludeIngredients!="" && formData.snackPreference!="" && formData.preferredMealTime!=""
  // && formData.drinkPreference!="" && formData.cookingSkillLevel!=""
  !formData.name && !formData.age && !formData.email && !formData.foodPreference&& !formData.cuisinePreference
  && !formData.mealFrequency && !formData.dailyCalories && !formData.favoriteIngredients && !formData.foodAllergies && !formData.dietGoal
 && !formData.excludeIngredients && !formData.snackPreference && !formData.preferredMealTime
 && !formData.drinkPreference && !formData.cookingSkillLevel
   ){
   }
   else{
 console.log('e')
  dispatch(collectData( Object.entries(formData)
  .map(([key, value]) => `${key}: ${value}`)
  .join(", ")))
  console.log('a')
  setIsGenrated(true);
   
   
}}
  

 


  return (
    <div   >
    {/* // style={{backgroundImage:"url(bgfood.jpg)",backgroundSize:"cover",height:"150vh",width:"100%"}} > */}
    {
      isGenrated ? <Meal/>
      :
    <div className="w-[70vw] mx-auto lg:p-8  shadow-lg rounded-lg bg-w"
  >
    <h2 className="text-2xl font-bold mb-6 text-center">Meal Planner</h2>
    <br />
    <div  className="space-y-4">

      <div className='lg:flex lg:justify-evenly  '>
      <div>
        <label className="block font-medium mb-1">Name</label>
        <Input
          type="text" 
          name="name" 
          value={formData.name} 
          onInput={handleChange}
          required
          placeholder="Your Name"
        />
      </div>

      <div className='lg:mt-0  mt-10'>
        <label className="block font-medium mb-1">Age</label>
        <Input 
          type="number" 
          name="age" 
          value={formData.age} 
          onInput={handleChange} 
          required
          placeholder="Your Age"
        />
      </div>
      </div>
     <br />
      <div className='lg:flex lg:justify-evenly'> 
      <div>
        <label className="block font-medium mb-1">Email</label>
        <Input 
          type="email" 
          name="email" 
          value={formData.email} 
          onInput={handleChange} 
          required
          placeholder="Your Email"
        />
      </div>
      <div className= '  lg:mt-0 mt-10'>
        <label className="block font-medium mb-1">Cuisine Preference</label>
        <Input 
          type="text" 
          name="cuisinePreference" 
          value={formData.cuisinePreference} 
          onInput={handleChange}
          required
          placeholder="e.g., Indian, Italian, Chinese"
        />
      </div>
   
      </div>
      
       <br />
     
  
      <div className='lg:flex lg:justify-evenly'>
      <div>
        <label className="block font-medium mb-1">Meal Frequency (per day)</label>
        <Input 
          type="number" 
          name="mealFrequency" 
          value={formData.mealFrequency} 
          onInput={handleChange} 
          required
          placeholder="e.g., 3"
        />
      </div>
      <div className='lg:mt-0   mt-10'>
        <label className="block font-medium mb-1">Daily Calorie Target</label>
        <Input 
          type="number" 
          name="dailyCalories" 
          value={formData.dailyCalories} 
          onInput={handleChange} 
          required
          placeholder="e.g., 2000"
        />
      </div>
      </div>
   <br />
      <div className='lg:flex lg:justify-evenly'>
      <div >
        <label className="block font-medium mb-1">Favorite Ingredients</label>
        <Input 
          type="text" 
          name="favoriteIngredients" 
          value={formData.favoriteIngredients} 
          onInput={handleChange} 
          required
          placeholder="e.g., Chicken, Avocado, Lentils"
        />
      </div>
      <div className='lg:mt-0  mt-10'>
        <label className="block font-medium mb-1">Food Allergies</label>
        <Input 
          type="text" 
          name="foodAllergies" 
          value={formData.foodAllergies} 
          onInput={handleChange} 
          required
          placeholder="e.g., Nuts, Gluten"
        />
      </div>
      </div>
     
      <br />
    
      <div className='lg:flex lg:justify-evenly'>
      <div className=''>
        <label className="block font-medium mb-1">Diet Goal</label>
        <Input 
          type="text" 
          name="dietGoal" 
          value={formData.dietGoal} 
          onInput={handleChange} 
          required
          placeholder="e.g., Weight loss, Muscle gain"
        />
      </div>

      <div className=' lg:mt-0 mt-10'>
        <label className="block font-medium mb-1">Preferred Meal Time</label>
        <Input 
          type="text" 
          name="preferredMealTime" 
          value={formData.preferredMealTime} 
          onInput={handleChange} 
          required
          placeholder="e.g., 1:00 PM"
        />
      </div>
      </div>
  
      <br />
       <div className='lg:flex lg:justify-evenly'>
      <div className=''>
        <label className="block font-medium mb-1">Snack Preference</label>
        <Input 
          type="text" 
          name="snackPreference" 
          value={formData.snackPreference} 
          onInput={handleChange} 
          required
          placeholder="e.g., Fruits, Nuts"
        />
      </div>
      
      <div className='lg:mt-0 mt-10 '>
        <label className="block font-medium mb-1">Drink Preference</label>
        <Input 
          type="text" 
          name="drinkPreference" 
          value={formData.drinkPreference} 
          onInput={handleChange} 
          required
          placeholder="e.g., Water, Juice, Coffee"
        />
      </div>
      
      </div>
      
     <br />
     
     <div className='lg:flex lg:justify-evenly'>
     <div>
        <label className="block font-medium mb-1">Food Prefrence</label>
        <Input 
          type="text" 
          name="foodPreference" 
          value={formData.foodPreference} np
          onInput={handleChange} 
          required
          placeholder="e.g.,Vegan,Vegeterian,Non-Vegeterian"
        />
      </div>
      

      <div className='lg:mt-0 mt-10'>
        <label className="block font-medium mb-1">Cooking Level </label>
        <Input 
          type="text" 
          name="cookingSkillLevel" 
          value={formData.cookingSkillLevel}
          onInput={handleChange}
          required
          placeholder="e.g.,Begineer, Intermediate, Advanced"
        />
      </div>
      
      </div>
       
     <br />
      <button  onClick={handleSubmit} type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
       Submit  
      </button>
    </div>
  </div>

}

  
  </div>
  
  );
}


const Input=({text,placeholder,value,name,onInput})=>{
  return(
    <input type={text }placeholder={placeholder} onChange={onInput} required value={value} name={name} id=""
    className="lg:w-80 w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}