import React from 'react'
import { Root, Routes } from 'react-static'
import Header from './Header'
import 'tachyons'

import './app.css'

const App = () => (
  <Root>
    <Header />
    <div className="content">
      <Routes />
    </div>
  </Root>
)

export default App
