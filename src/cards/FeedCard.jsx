import React from 'react'

const FeedCard = ({ feedUser }) => {
  const { firstName, lastName, photoUrl, about, age, gender, showIgnoreInterestedButton } = feedUser
  return (
    <div className="card bg-base-300 w-96 shadow-xl ">
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
            <button className="btn btn-primary bg-red-500">Ignore</button>
            <button className="btn btn-primary bg-green-500">Interested</button>
          </div>
        }
      </div>
    </div>
  )
}

export default FeedCard