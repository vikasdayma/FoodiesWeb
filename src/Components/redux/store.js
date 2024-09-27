import { configureStore } from '@reduxjs/toolkit'
import formDataReducer from './formData'
import favMealReducer from './favMeal'

export const store = configureStore({
  reducer: {
    mealdata:formDataReducer,
    meal:favMealReducer,
  },
})

