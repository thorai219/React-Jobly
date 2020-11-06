import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import JoblyApi from './JoblyAPI'

const Form = ({ setToken }) => {
  const history = useHistory()
  const [activeView, setActiveView] = useState('login')
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
    errors: []
  })
  
  function setLoginView() {
    setActiveView('login')
  }

  function setSignupView() {
    setActiveView('signup')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    let data;
    let endpoint;

    if (activeView === 'signup') {
      data = {
        username: userData.username,
        password: userData.password,
        first_name: userData.first_name || undefined,
        last_name: userData.last_name || undefined,
        email: userData.email || undefined
      }
      endpoint = 'register'
    } else {
      data = {
        username: userData.username,
        password: userData.password
      }
      endpoint = 'login'
    }

    let token;
  
    try {
      token = await JoblyApi[endpoint](data)
    } catch (err) {
      return setUserData(d => ({...d, err}))
    }
    console.log(token)
    setToken(token)
    history.push('/jobs')
  }
  
  function handleChange(e) {
    const { name, value } = e.target;
    setUserData(d => ({...d, [name]: value}))
  }

  let loginActive = activeView === 'login'

  const signupFields =  (
    <div>
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
    </div>
  )

  return (
    <div className="form flex-col">
      <p className="welcome text-center">Welcome</p>
      <div>
        <button className={`toggle-btn ${loginActive ? "highlight": ""}`} onClick={setLoginView}>Login</button>
        <button className={`toggle-btn ${loginActive ? "": "highlight"}`} onClick={setSignupView}>Signup</button>
      </div>
      <Card>
        <CardContent>
          <form className="flex-col" onSubmit={handleSubmit}>
            <div className="form-group flex-col">
              <label htmlFor="username">Username: </label>
              <input 
                name='username'
                value={userData.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group flex-col">
              <label htmlFor="password">Password: </label>
              <input 
                type='password'
                name='password'
                value={userData.password}
                onChange={handleChange}
              />
            </div>
            {loginActive ? "" : signupFields}
            {userData.errors.length
              ? <div>{userData.errors}</div>
              : null
            }
            <button className="submit-btn" onSubmit={handleSubmit}>Submit</button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Form