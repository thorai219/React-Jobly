import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from './UserContext'

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext)
  
  function loggedInNavbar() {
    return (
      <ul className="navlinks flex-row">
        <li className="nav-item">
          <NavLink to='/companies'>Companies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/jobs'>Jobs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/profile'>Profile</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/' onClick={logout}>Logout</NavLink>
        </li>
      </ul>
    )
  }

  function loggedOutNavbar() {
    return (
      <ul className="navlinks flex-row">
        <li className="nav-item">
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    )
  }

  return (
    <nav className="navbar flex-row">
      <NavLink className="logo" to='/'>Jobly</NavLink>
      {currentUser ? loggedInNavbar() : loggedOutNavbar()}
    </nav>
  )
}

export default NavBar