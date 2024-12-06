import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useFetcher, useNavigate } from 'react-router-dom'
import { addFeed } from "../redux/feedSlice.js"
import FeedCard from '../cards/FeedCard.jsx'
import { toast } from 'react-toastify'


const Feed = () => {

  const user = useSelector((store) => store.user)
  const feed = useSelector((store) => store.feed)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  async function getFeed() {
    if (!feed) {
      const response = await axios.get("http://localhost:4000/user/feed", { withCredentials: true })
      dispatch(addFeed(response.data.feedUsers))
    }
  }

  useEffect(() => {
    getFeed()
  }, [])

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [user])

  if (!feed || !feed.length) {
    return <h1>No feed found</h1>
  }

  return (
    <div className=' flex justify-center mt-4'>


      {feed && feed.length && <FeedCard
        feedUser={{ ...feed[0], showIgnoreInterestedButton: true }}
      />
      }
      {/* {
        feed && feed.map((feedUser) => {
          return <FeedCard
            key={feedUser._id}
            feedUser={{ ...feedUser, showIgnoreInterestedButton: true }}
          />
        })
      } */}
      {/* <FeedCard /> */}
    </div>
  )
}

export default Feed