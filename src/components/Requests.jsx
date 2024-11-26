import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRequests, getRequests, setLoading, reviewRequest } from "../redux/requestsSlice.js"
import LoadingPage from './LoadingPage.jsx'
import FeedCard from '../cards/FeedCard.jsx'
import RequestCard from '../cards/RequestCard.jsx'
import { ToastContainer, toast } from 'react-toastify';

const Requests = () => {

  const requests = useSelector((store) => store.requests)
  const dispatch = useDispatch()

  useEffect(() => {
    async function getRequestsApiCall() {
      try {
        dispatch(setLoading(true))
        const response = await axios.get("http://localhost:4000/user/requests", { withCredentials: true })

        if (!response.data.success) {
          console.log("Cannot find all pending requests")
          return
        }
        dispatch(setRequests(response.data.requests))
      } catch (error) {
        console.log("Error occur while fetching all requests")
        console.log(error)
      } finally {
        dispatch(setLoading(false))
      }
    }
    getRequestsApiCall()
  }, [])

  async function handleRequest(status, requestId) {
    try {
      const response = await axios.post(`http://localhost:4000/request/review/${status}/${requestId}`, {}, { withCredentials: true })
      dispatch(reviewRequest({ status, requestId }))

      toast.success(`Request ${status} succesfully 🎉`, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return

    } catch (error) {
      console.log("Error while reviewing the request")
      console.log(error)
      toast.error(`Unable to ${status} request`, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return

    }
  }

  if (requests.loading) {
    return <div className=' flex justify-center min-h-screen'>
      <LoadingPage></LoadingPage>
    </div>
  }

  if (requests.requests.length === 0) {
    return <h1>No Request Found</h1>
  }

  return (
    <div>
      <h1 className=' text-center text-3xl font-bold mt-4'>Your Pending Requests</h1>
      <div className=' flex justify-evenly mt-5 flex-wrap gap-y-5 mb-52'>
        {
          requests && requests.requests && requests.requests.map((request) => {
            return <RequestCard
              key={request?._id}
              requestUser={{
                firstName: request?.fromUserId?.firstName,
                lastName: request?.fromUserId?.lastName,
                photoUrl: request?.fromUserId?.photoUrl,
                about: request?.fromUserId?.about,
                gender: request?.fromUserId?.gender,
                age: request?.fromUserId?.age,
              }}
              requestId={request?._id}
              handleRequest={handleRequest}
            />
          })
        }
      </div>

    </div>
  )
}

export default Requests