import React, { useState, useContext } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import JoblyApi from './JoblyAPI'
import UserContext from './UserContext'

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const [saved, setSaved] = useState(false)
  const [userData, setUserData] = useState({
    first_name: currentUser.first_name || "",
    last_name: currentUser.last_name || "",
    email: currentUser.email || "",
    photo_url: currentUser.photo_url || "",
    username: currentUser.username,
    password: "",
    errors: []
  })

  async function handleSubmit(e) {
    e.preventDefault()
    
    try {
      let profileData = {
        first_name: userData.first_name || undefined,
        last_name: userData.last_name || undefined,
        email: userData.email || undefined,
        photo_url: userData.photo_url || undefined,
        password: userData.password
      }

      let username = currentUser.username;
      let updatedUser = await JoblyApi.saveProfile(username, profileData)
      setSaved(true)
      setUserData(f => ({
        ...f,
        errors: [],
        saveConfirmed: true,
        password: ""
      }))
      setCurrentUser(updatedUser)
    } catch (e) {
      setUserData(f => ({ ...f, e }))
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData(f => ({
      ...f,
      [name]: value,
      errors: []
    }))
  }

  return (
    <div className="form flex-col">
      <Card>
        <CardContent>
          <form className="flex-col" onSubmit={handleSubmit}>
            <h3 className="text-center">{userData.username}</h3>
            <div className="form-group flex-col">
              <label htmlFor="first_name">First Name:</label>
              <input 
                name='first_name'
                value={userData.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group flex-col">
              <label htmlFor="last_name">Last Name: </label>
              <input 
                name='last_name'
                value={userData.last_name}
                onChange={handleChange}
              />
            </div>            
            <div className="form-group flex-col">
              <label htmlFor="email">Email: </label>
              <input 
                name='email'
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group flex-col">
              <label htmlFor="photo_url">Photo URL: </label>
              <input 
                name='photo_url'
                value={userData.photo_url}
                onChange={handleChange}
              />
            </div>
            <div className="form-group flex-col">
              <label htmlFor="password">Confirm Password: </label>
              <input 
                name='password'
                value={userData.password}
                onChange={handleChange}
              />
            </div>
            {userData.errors.length 
              ? <p className="text-center">{userData.errors}</p>
              : null}
            {saved
              ? <p className="text-center">Saved!</p>
              : null}
            <button className="submit-btn" onSubmit={handleSubmit}>Save Changes</button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Profile