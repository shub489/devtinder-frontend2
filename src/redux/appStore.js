import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice.js'
import feedReducer from './feedSlice.js'
import connectionsReducer from './connectionsSlice.js'


export const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: connectionsReducer
  },
})