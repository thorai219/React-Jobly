import React from 'react'
import { NavLink } from 'react-router-dom'

export function NavBar() {
  return (
    <nav>
      <NavLink exact to='/'>Home</NavLink>
      <NavLink exact to='/companies'>Companies</NavLink>
      <NavLink exact to='/companies/:id'>Company</NavLink>
      <NavLink exact to='/jobs'>Jobs</NavLink>
      <NavLink exact to='/profile'>Profile</NavLink>
      <NavLink exact to='/login'>Login</NavLink>
    </nav>
  )
}

export default NavBar