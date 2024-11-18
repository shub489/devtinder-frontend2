import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from "./components/Layout.jsx"
import Feed from "./components/Feed.jsx"
import Login from "./components/Login.jsx"
import Connections from "./components/Connections.jsx"
import NoPage from "./components/NoPage.jsx"
import ProtectedRoutes from './components/ProtectedRoutes.jsx'
import Profile from './components/Profile.jsx'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
          <Route path="connections" element={<ProtectedRoutes><Connections /></ProtectedRoutes>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App