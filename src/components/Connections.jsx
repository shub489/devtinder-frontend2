import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingPage from './LoadingPage'
import FeedCard from '../cards/FeedCard'
import { setConnections } from '../redux/connectionsSlice'

const Connections = () => {
  const connections = useSelector((store) => store.connections)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    async function getConnections() {
      setLoading(true)
      try {
        const response = await axios.get("http://localhost:4000/user/connections", { withCredentials: true })
        console.log(response)
        console.log(response.data.status)
        if (!response.data.status) {
          console.log("Some error occur while fetching connections")
          return
        }
        // setConnections(response.data.data)
        dispatch(setConnections(response.data.data))
      } catch (error) {
        console.log("Cannot fetch user connections")
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getConnections()
  }, [])

  if (loading) {
    return <div className=' flex justify-center min-h-screen'>
      <LoadingPage></LoadingPage>
    </div>
  }

  if (!connections.length) {
    return <h1>No connections Found</h1>
  }

  return (
    <div>
      <h1 className=' text-center text-3xl font-bold mt-4'>Your Connections</h1>

      <div className=' flex justify-evenly mt-5 flex-wrap gap-y-5 mb-52'>
        {
          connections && connections.length && connections.map((connection) => {
            return <FeedCard
              key={connection._id}
              feedUser={{
                firstName: connection.firstName,
                lastName: connection.lastName,
                photoUrl: connection.photoUrl,
                about: connection.about,
                age: connection.age,
                gender: connection.gender,
                showIgnoreInterestedButton: false
              }}
            />
          })
        }
      </div>
    </div>
  )
}

export default Connections

