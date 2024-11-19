import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const user = useSelector((store) => store.user)
  console.log("Protected route component called")
  if (!user) {
    return <Navigate to="/login" replace />;

  }
  return children
}

export default ProtectedRoutes