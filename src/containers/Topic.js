import React from 'react'
import { RouteData } from 'react-static'

const Topic = () => (
  <RouteData render={({
    title
  }) => (
    <p> {title} </p>
  )} />
)

export default Topic