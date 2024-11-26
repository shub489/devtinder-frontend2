
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const user = useSelector((store) => store.user)
  const navigate = useNavigate()

  useEffect(() => {
    console.log("user protected ", user)
    if (!user) {
      navigate("/login")
    }
  }, [user])

  return children
}

export default ProtectedRoutes