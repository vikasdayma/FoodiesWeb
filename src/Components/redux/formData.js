import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const formData = createSlice({
  name: 'mealdata',
  initialState,
  reducers: {
    collectData: (state,action) => {
     state.value=action.payload;
     console.log(action.payload)
    },
 
  },
})

// Action creators are generated for each case reducer function
export const { collectData} = formData.actions

export default formData.reducer