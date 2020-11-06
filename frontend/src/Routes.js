import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Home from './Home'
import Companies from './Companies'
import Company from './Company'
import Jobs from './Jobs'
import Profile from './Profile'
import Form from './Form'

function Routes({ setToken }) {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/companies'>
        <Companies />
      </Route>
      <Route exact path='/companies/:handle'>
        <Company />
      </Route>
      <Route exact path='/jobs'>
        <Jobs />
      </Route>
      <Route exact path='/login'>
        <Form setToken={setToken} />
      </Route>
      <Route exact path='/profile'>
        <Profile />
      </Route>
      <Redirect to='/' />
    </Switch>
  )
}

export default Routes