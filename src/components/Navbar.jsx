import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const user = useSelector((store) => store.user)

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Dev Tinder 👩‍💻</a>
      </div>
      <div className="flex-none gap-2 mx-5">
        <div className="dropdown dropdown-end flex items-center gap-5">
          <div className=' font-semibold text-sm'>
            {user && `Welcome ${user?.firstName}`}
          </div>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user && user?.photoUrl ? user?.photoUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABqQIdskCD9BK0I81EbVfV9tTz320XvJ35A&s"}

              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-40 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar

