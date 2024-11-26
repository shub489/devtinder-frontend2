import React from 'react'
import axios from 'axios'


const RequestCard = ({ requestUser, requestId, handleRequest }) => {
  const { firstName, lastName, photoUrl, about, age, gender } = requestUser




  return (
    <div className="card bg-base-300 w-72 shadow-xl ">
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
          <div className="card-actions justify-between">
            <button onClick={() => handleRequest("accepted", requestId)} className="btn btn-primary bg-green-500">Accept</button>
            <button onClick={() => handleRequest("rejected", requestId)} className="btn btn-primary bg-red-500">Reject</button>
          </div>
        }
      </div>
    </div>
  )
}

export default RequestCard