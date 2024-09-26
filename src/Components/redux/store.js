import { configureStore } from '@reduxjs/toolkit'
import formDataReducer from './formData'

export const store = configureStore({
  reducer: {
    mealdata:formDataReducer,
  },
})

