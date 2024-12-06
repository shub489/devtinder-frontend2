import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addUser } from '../redux/userSlice';

const Layout = () => {

  const user = useSelector((store) => store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    try {
      async function fetchProfile() {
        try {
          const response = await axios.get("http://localhost:4000/profile", { withCredentials: true })
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