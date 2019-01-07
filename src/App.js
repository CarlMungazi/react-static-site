import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import { Link } from '@reach/router'

import './app.css'

function App() {
  return (
    // <Root>
    //   <nav>
    //     <Link to="/">Home</Link>
    //     <Link to="/about">About</Link>
    //     <Link to="/blog">Blog</Link>
    //     <Link to="/resources">Resources</Link>
    //   </nav>
      <Router>
        <div className="content">
          <Routes />
        </div>
      </Router>
    // </Root>
  )
}

export default App
