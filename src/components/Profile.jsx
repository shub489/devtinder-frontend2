import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FeedCard from '../cards/FeedCard'
import { toast } from 'react-toastify'
import { addUser } from '../redux/userSlice'
import LoadingPage from './LoadingPage'

const Profile = () => {

  const user = useSelector((store) => store.user)
  const [firstName, setFirstName] = useState(user?.firstName || "")
  const [lastName, setLastName] = useState(user?.lastName || "")
  const [age, setAge] = useState(user?.age || "")
  const [gender, setGender] = useState(user?.gender || "")
  const [about, setAbout] = useState(user?.about || "")
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl)
  const [isUpdating, setIsUpdating] = useState(false)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  function handleChange(e) {
    if (e.target.name === "firstName") {
      setFirstName(e.target.value)
      return
    }

    if (e.target.name === "lastName") {
      setLastName(e.target.value)
      return
    }

    if (e.target.name === "age") {
      setAge(e.target.value)
      return
    }

    if (e.target.name === "gender") {
      setGender(e.target.value)
      return
    }

    if (e.target.name === "about") {
      setAbout(e.target.value)
      return
    }
  }

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setAge(user.age?.toString() || "");
      setGender(user.gender || "");
      setAbout(user.about || "");
      setPhotoUrl(user.photoUrl || "");
      setLoading(false)
    }
  }, [user]);



  async function handleSubmit() {
    try {
      setIsUpdating(true)
      const response = await axios.patch(
        "http://localhost:4000/profile/edit",
        { firstName, lastName, age, gender, about },
        { withCredentials: true }
      )
      setIsUpdating(false)
      const responseProfile = await axios.get("http://localhost:4000/profile", { withCredentials: true })
      dispatch(addUser(responseProfile.data.user))
      toast.success('Profle Updated Successfully!', {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        // toast.error(`Error in profile`, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setIsUpdating(false)

      console.log(error)
    }
  }

  if (loading) {
    return <div className=' flex justify-center min-h-screen'>
      <LoadingPage></LoadingPage>
    </div>
  }

  return (
    <div className=' flex justify-evenly mt-4 '>
      {/* PROFILE */}
      <div className=' w-3/12 bg-base-300 flex flex-col gap-3 p-4'>
        <label className="input input-bordered flex items-center gap-2">
          Firstname
          <input
            type="text"
            className="grow"
            placeholder="Daisy"
            name='firstName'
            value={firstName}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          Lastname
          <input
            type="text"
            className="grow"
            placeholder="Daisy"
            name='lastName'
            value={lastName}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          Age
          <input
            type="text"
            className="grow"
            placeholder="Age"
            name='age'
            value={age}
            onChange={(e) => handleChange(e)}
          />
        </label>

        {/* <label className="input input-bordered flex items-center gap-2">
          Gender
          <input
            type="text"
            className="grow"
            placeholder="Gender"
            name='gender'
            value={gender}
            onChange={(e) => handleChange(e)}
          />
        </label> */}

        <select
          className="select select-primary w-full max-w-xs"
          onChange={handleChange}
          name='gender'
          value={gender}
        >
          <option disabled value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="About"
          name="about"
          value={about}
          onChange={(e) => handleChange(e)}
        />

        {
          isUpdating ? <button className="btn">
            <span className="loading loading-spinner"></span>
            Updating...
          </button> : <button className="btn btn-success" onClick={handleSubmit}>Update</button>
        }



      </div>

      {/* firstName, lastName, photoUrl, about  */}
      {/* FEED CARD */}
      <FeedCard
        feedUser={{ firstName, lastName, age, gender, about, photoUrl }}
      />
    </div>
  )
}

export default Profile