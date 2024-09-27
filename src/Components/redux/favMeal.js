import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const favMeal = createSlice({
  name: 'meal',
  initialState,
  reducers: {
    addFavouriteMeals: (state,action) => {
     state.value.push(action.payload);
    
    },
 
  },
})

// Action creators are generated for each case reducer function
export const {addFavouriteMeals} = favMeal.actions

export default favMeal.reducer