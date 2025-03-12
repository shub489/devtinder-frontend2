import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addUser } from '../redux/userSlice';
import { BASE_URL } from '../utils/constants';

const Layout = () => {
  
  const location = useLocation()  // This will give you the current route
  const user = useSelector((store) => store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (location.pathname !== '/cancellation-policy') {

    try {
      async function fetchProfile() {
        try {
          const response = await axios.get(`${BASE_URL}/profile`, { withCredentials: true })
          console.log(response)
          dispatch(addUser(response.data.user))
        } catch (error) {
          console.log(error)
        }
      }
      fetchProfile()
    } catch (error) {
      console.log(error)
      navigate("/login")
    }
  }
  }, [])


  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout