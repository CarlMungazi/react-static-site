import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'

export default withRouteData(({ topic }) => (
  <div>
    <Link to="/">{'<'} Back</Link>
    <br />
    <h3>{topic.name}</h3>
    {
      // topic.conditions.map((condition, idx) => {
      //   return <Link to={`/${category.name}/${topic.name}/${condition.name}`}><li key={idx}>{condition.name}</li></Link>
      // })
    }
  </div>
))
