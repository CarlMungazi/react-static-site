import React from 'react';
import { withRouteData } from 'react-static';
import { Link } from '@reach/router';

export default withRouteData(({ topic }) => (
  <div>
    <Link to={`/${topic.parent}`}>{'<'} Back</Link>
    <br />
    <h3>{topic.data.title}</h3>
    <h4>{topic.data.description}</h4>

    <ul className="list pl0 measure center">
      {
        topic.conditions.map((condition, idx) => {
          return ( 
            <Link 
              className="link hover-mid-gray" 
              to={`/${topic.parent}/${topic.name}/${condition.name}`}
            >
              <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" key={idx}>{condition.title}</li>
            </Link>
          )
        })
      }
    </ul>
  </div>
))
