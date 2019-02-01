import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'

export default withRouteData(({ condition }) => (
  <div>
    <Link to="/">{'<'} Back</Link>
    <br />
    <p dangerouslySetInnerHTML={{ __html: condition.markdown.content }} />
  </div>
))
