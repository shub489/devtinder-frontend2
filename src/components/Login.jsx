import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addUser, removeUser } from "../redux/userSlice.js"
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants.js'

const Login = () => {

  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "shubham@gmail.com",
    password: "password",

  })
  const [showLogin, setShowLogin] = useState(false)

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })

  }

  async function handleLogin(e) {
    e.preventDefault()
    try {
      setIsLoading(true)
      const response = await axios.post(`${BASE_URL}/login`, data, { withCredentials: true })
      if (response.data.success) {
        toast.success('Login succesfully!', {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        dispatch(addUser(response.data.user))
        return navigate("/")

      }
    } catch (error) {
      toast.error("Login failed! ", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
  }

  async function handleSignup(e) {
    e.preventDefault()
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!data.firstName) {
      toast.error("Firstname is required!")
      return
    }
    if (!data.firstName) {
      toast.error("Lastname is required!")
      return
    }
    if (!data.email) {
      toast.error("Please enter email!")
      return
    }
    if (!data.password) {
      toast.error("Please enter password!")
      return
    }

    // http://localhost:4000/signup
    try {
      setIsLoading(true)
      const response = await axios.post(`${BASE_URL}/signup`, data, { withCredentials: true })
      if (response.data.success) {
        toast.success('Signup succesfully!', {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        dispatch(addUser(response.data.user))
        return navigate("/profile")

      }
    } catch (error) {
      toast.error("Signup failed! ", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }

    console.log(data)
  }


  useEffect(() => {
    console.log("user login", user)
    if (user) {
      navigate("/")
    }
  }, [user])



  return (
    <div>

      {/* Card */}
      <form
        className="card bg-base-300 w-96 shadow-xl  mx-auto  gap-y-5 p-7"
        onSubmit={showLogin ? handleLogin : handleSignup}
      >

        {/* Heading */}
        <h2 className=' text-center font-bold text-3xl'>{showLogin ? "LOGIN" : "REGISTER"}</h2>

        {/* FirstName */}
        {!showLogin && <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Firstname"
            name='firstName'
            value={data.firstName}
            onChange={(e) => handleChange(e)}
          />
        </label>}

        {/* LastName */}
        {
          !showLogin && <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Lastname"
              name='lastName'
              value={data.lastName}
              onChange={(e) => handleChange(e)}
            />
          </label>
        }


        {/* Email */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            name='email'
            value={data.email}
            onChange={(e) => handleChange(e)}
          />
        </label>

        {/* Password */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd" />
          </svg>
          <input
            type="password"
            className="grow"
            name='password'
            placeholder='Password'
            value={data.password}
            onChange={(e) => handleChange(e)}
          />
        </label>

        {/* <button className='w-6/12 mx-auto font-bold text-2xl border rounded-md py-1'>Submit</button> */}
        <button className="btn btn-neutral text-2xl">Submit</button>

        <div>
          {
            showLogin
              ? <p>Not Registered Yet? Click here to <span className='text-blue-500 cursor-pointer' onClick={() => {
                setShowLogin((prev) => !showLogin)
              }}>Register</span></p>
              : <p>Already Registered? Click here to <span className='text-blue-500 cursor-pointer' onClick={() => {
                setShowLogin((prev) => !showLogin)
              }}>Login</span></p>
          }
        </div>

      </form>

    </div >
  )
}

export default Login