import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from "./components/Layout.jsx"
import Feed from "./components/Feed.jsx"
import Login from "./components/Login.jsx"
import Connections from "./components/Connections.jsx"
import NoPage from "./components/NoPage.jsx"
import ProtectedRoutes from './components/ProtectedRoutes.jsx'
import Profile from './components/Profile.jsx'
import Requests from './components/Requests.jsx'
import Test from './components/Test.jsx'
import CancellationRefundPolicy from './components/CancellationRefundPolicy.jsx'
import Privacy from './components/Privacy.jsx'
import Shipping from './components/Shipping.jsx'
import TermAndConditions from './components/TermAndConditions.jsx'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/profile" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} /> */}
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="connections" element={<ProtectedRoutes><Connections /></ProtectedRoutes>} /> */}
          <Route path="connections" element={<Connections />} />
          <Route path="requests" element={<Requests />} />
          <Route path="test" element={<Test />} />

          <Route path="cancellation-policy" element={<CancellationRefundPolicy />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="termandconditions" element={<TermAndConditions />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App