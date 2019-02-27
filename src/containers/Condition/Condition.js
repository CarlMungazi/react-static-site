import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'

export default withRouteData(({ condition }) => (
  <div>
    <Link to={`/${condition.backLink}`}>{'<'} Back</Link>
    <br />
    <div dangerouslySetInnerHTML={{ __html: condition.markdown }} />
  </div>
))
