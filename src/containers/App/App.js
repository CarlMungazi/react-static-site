import React from 'react'
import { Root, Routes } from 'react-static'
import Header from './Header'
import 'tachyons'

import './app.css'

const App = () => (
  <Root>
    <Header />
      <Routes />
  </Root>
)

export default App
