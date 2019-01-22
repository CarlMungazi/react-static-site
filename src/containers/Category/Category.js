import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'

export default withRouteData(({ category }) => (
  <div>
    <Link to="/">{'<'} Back</Link>
    <br />
    <h3>{category.name}</h3>
    <ul>
    {
      category.topics.map((topic, idx) => {
        return <Link to={`/${category.name}/${topic.name}`}><li key={idx}>{topic.name}</li></Link>
      })
    }
    </ul>
  </div>
))
