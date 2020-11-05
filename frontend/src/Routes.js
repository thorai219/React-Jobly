import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Home from './Home'
import Companies from './Companies'
import Jobs from './Jobs'
import Profile from './Profile'
import CompanyCard from './CompanyCard'
import Form from './Form'

function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/companies'>
        <Companies />
      </Route>
      <Route path='/companies/:id'>
        <CompanyCard />
      </Route>
      <Route path='/jobs'>
        <Jobs />
      </Route>
      <Route path='/login'>
        <Form />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
      <Redirect to='/' />
    </Switch>
  )
}

export default Routes