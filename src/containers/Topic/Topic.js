import React from 'react';
import { withRouteData } from 'react-static';
import { Link } from '@reach/router';

export default withRouteData(({ topic }) => (
  <div>
    <span><Link to="/">Home</Link> / <Link to={`/${topic.parent}`}>{ topic.parent }</Link> / { topic.data.title } </span>

    <ul className="list pl0 measure center">
      {
        topic.conditions.map(condition => {
          return ( 
            <Link 
              className="link hover-mid-gray" 
              to={`/${topic.parent}/${topic.name}/${condition.name}`}
              key={condition.name}
            >
              <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">{condition.title}</li>
            </Link>
          )
        })
      }
    </ul>
  </div>
))
