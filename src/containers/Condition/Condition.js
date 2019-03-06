import React from 'react';
import { withRouteData } from 'react-static';
import { Link } from '@reach/router';

export default withRouteData(({ condition }) => (
  console.log('this'),
  <div>
    <span><Link to="/">Home</Link> / <Link to={`/categorylink`}>categoryname</Link> / <Link to={`/${condition.backLink}`}>{ condition.parent }</Link> / { condition.title }</span>
    <br />
    <div dangerouslySetInnerHTML={{ __html: condition.markdown }} />
  </div>
))
