import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './UserContext'

const Home = () => {
  const { currentUser } = useContext(UserContext)
  return (
    <div className="text-center center">
      <h2>Jobly</h2>
      <h4>All jobs in one, conveinent place</h4>
      {currentUser 
        ? null
        : <Link to="/login">Log in</Link>
      }
      
    </div>
  )
}

export default Home
