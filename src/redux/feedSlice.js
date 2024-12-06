import { createSlice } from '@reduxjs/toolkit'


export const feedSlice = createSlice({
  name: 'feed',
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload
    },
    removeUser: (state, action) => {
      console.log("action.payload._id: ", action.payload)
      const newFeed = state.filter((f) => f._id !== action.payload)
      console.log("newFeed: ", newFeed)
      return newFeed
    }
  },
})

// Action creators are generated for each case reducer function
export const { addFeed, removeUser } = feedSlice.actions
export default feedSlice.reducer