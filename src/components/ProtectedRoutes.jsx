import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const login = false
  if (!login) {
    return <Navigate to="/login" replace />;

  }

  return children
}

export default ProtectedRoutes