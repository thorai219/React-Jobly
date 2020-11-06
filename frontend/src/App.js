import React, { useState, useEffect } from 'react'
import { decode } from "jsonwebtoken";
import Routes from './Routes'
import NavBar from './Navbar'
import JoblyApi from './JoblyAPI'
import useLocalStorage from './hooks/useLocalStorage'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './UserContext'
import './App.css'

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID)
  
  useEffect(() => {
    async function getCurrUser() {
      try {
        let { username } = decode(token)
        let currUser = await JoblyApi.getCurrentUser(username)
        setCurrentUser(currUser)
      } catch (e) {
        setCurrentUser(null)
      }
      setInfoLoaded(true)
    } 

    setInfoLoaded(false)
    getCurrUser()
  }, [token])

  const handleLogOut = () => {
    setCurrentUser(null)
    setToken(null)
  }

  if (!infoLoaded) {
    return <p>Loadding...</p>
  }


  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <NavBar logout={handleLogOut}/>
          <Routes setToken={setToken} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;
