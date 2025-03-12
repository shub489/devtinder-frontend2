import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addUser, removeUser } from "../redux/userSlice";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogout() {
    const response = await axios.post(
      `${BASE_URL}/logout`,
      {},
      { withCredentials: true }
    );
    if (!response.data.success) {
      toast.error("Unable to logout!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    toast.success("Logout succesfully!", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch(removeUser());
    navigate("/");
  }

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Dev Tinder 👩‍💻
        </Link>
      </div>

      <div className="border">
        
          {/* <ul className="p-2 flex gap-4">
            <li>
              <NavLink to={`/cancellation-policy`}>
                Cancellation & Refund
              </NavLink>
            </li>
            <li>
              <NavLink to={`/privacy`}>Shipping</NavLink>
            </li>
            <li>
              <NavLink to={`/shipping`}>Private Policy</NavLink>
            </li>
            <li>
              <NavLink to={`/termandconditions`}>
                CancellationRefundPolicy
              </NavLink>
            </li>
          </ul> */}
        {/* <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={`/cancellation-policy`}>Cancellation & Refund</NavLink>
          </li>
          <li>
          <NavLink to={`/privacy`}>Shipping</NavLink>
          </li>
          <li>
          <NavLink to={`/shipping`}>Private Policy</NavLink>
          </li>
          <li>
          <NavLink to={`/termandconditions`}>CancellationRefundPolicy</NavLink>
          </li>
        </ul> */}
      </div>

      <div className="flex-none gap-2 mx-5">
        <div className="dropdown dropdown-end flex items-center gap-5">
          <div className=" font-semibold text-sm">
            {user && `Welcome ${user?.firstName}`}
          </div>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={
                  user && user?.photoUrl
                    ? user?.photoUrl
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABqQIdskCD9BK0I81EbVfV9tTz320XvJ35A&s"
                }
              />
            </div>
          </div>
          {user && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-40 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/connections" className="justify-between">
                  Connections
                </Link>
              </li>
              <li>
                <Link to="/requests" className="justify-between">
                  Requests
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li onClick={() => handleLogout()}>
                <a>Logout</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
