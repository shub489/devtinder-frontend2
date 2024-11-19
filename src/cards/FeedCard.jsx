import React from 'react'

const FeedCard = ({ feedUser }) => {
  console.log(feedUser)
  const { _id, firstName, lastName, photoUrl, about } = feedUser
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img
          src={photoUrl}
          alt="Display User Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{about}</p>
        <div className="card-actions justify-between">
          <button className="btn btn-primary bg-red-500">Ignore</button>
          <button className="btn btn-primary bg-green-500">Interested</button>
        </div>
      </div>
    </div>
  )
}

export default FeedCard