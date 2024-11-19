import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const Feed = () => {

  const user = useSelector((store) => store.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [])

  return (
    <div>Feed</div>
  )
}

export default Feed