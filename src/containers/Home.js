import React from 'react'
import { RouteData } from 'react-static'

const Home = () => (
  <RouteData render={({ topics = [] }) => {
    return (
      <div>
      {
        topics.map(topic => {
          return (
            <p>topic</p>
          )
        })
      }
      </div>
    )
  }}  
  />
)

export default Home