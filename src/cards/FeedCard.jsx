import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../redux/feedSlice.js'
import { toast } from 'react-toastify'

const FeedCard = ({ feedUser }) => {
  const { firstName, lastName, photoUrl, about, age, gender, showIgnoreInterestedButton, _id } = feedUser
  const dispatch = useDispatch()
  async function handleSendRequest(status) {
    console.log(_id)
    try {
      const response = await axios.post(`http://localhost:4000/request/send/${status}/${_id}`, {}, { withCredentials: true })
      dispatch(removeUser(_id))
      status === "interested" ? toast.success(`Request send succesfully 🎉`) : toast.warning("Ignored!!!")
    } catch (error) {
      console.log(error)
      toast.error(`Something went wrong!!!`)
    }
  }


  return (
    <div className="card bg-base-300 w-96 shadow-xl self-start">
      <figure>
        <img
          src={photoUrl}
          alt="Display User Image"
          className='w-[80%]  rounded-full p-3'
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <div className=' flex justify-evenly' >
          {/* <p>{gender[0].toUpperCase() + gender.slice(1)}</p> */}
          <p>{gender}</p>
          <p>{age}</p>
        </div>
        <p className='text-wrap'>{about}</p>

        {
          showIgnoreInterestedButton &&
          <div className="card-actions justify-between">
            <button className="btn btn-primary bg-red-500" onClick={() => handleSendRequest("ignored")}>Ignore</button>
            <button className="btn btn-primary bg-green-500" onClick={() => handleSendRequest("interested")}>Interested</button>
          </div>
        }
      </div>
    </div>
  )
}

export default FeedCard