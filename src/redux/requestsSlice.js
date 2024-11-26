import { createSlice } from "@reduxjs/toolkit";


const requestsSlice = createSlice({
  name: "requests",
  initialState: {
    requests: [],
    loading: false
  },
  reducers: {
    getRequests: (state, action) => {
      return state
    },
    setRequests: (state, action) => {
      state.requests = action.payload
    },
    reviewRequest: (state, action) => {
      const { requestId, status } = action.payload

      state.requests = state.requests.filter((r) => {
        return r._id !== requestId
      })
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})

export const { getRequests, setRequests, setLoading, reviewRequest } = requestsSlice.actions
export default requestsSlice.reducer