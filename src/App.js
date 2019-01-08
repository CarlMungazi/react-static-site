import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import { hot } from 'react-hot-loader'


import './app.css'

const App = () => (
  <Router>
    <div className="content">
      <Routes />
    </div>
  </Router>
)

export default hot(module)(App)
