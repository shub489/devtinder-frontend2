import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice = createSlice({
  name: "connections",
  initialState: [],
  reducers: {
    getConnections: (state, action) => {
      return state
    },
    setConnections: (state, action) => {
      return action.payload
    },
    removeConnections: (state, action) => {
      const newState = state.filter((s) => s._id != action.payload._id)
      return newState
    }
  }
})


export const { getConnections, setConnections } = connectionsSlice.actions

export default connectionsSlice.reducer