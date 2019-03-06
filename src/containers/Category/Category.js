import React from 'react';
import { withRouteData } from 'react-static';
import { Link } from '@reach/router';

export default withRouteData(({ category }) => (
  <div>
    <Link to="/">{'<'} Back</Link>
    <br />
    <h3>{category.data.title}</h3>
    <h4>{category.data.description}</h4>
    <ul className="list ph3 ph5-ns pv4">
    {
      category.topics.map((topic, idx) => {
        return (
          <Link 
            className="dib mr1 mb2" 
            to={`/${category.name}/${topic.name}`}
          >
            <li className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20" key={idx}>{topic.data.title}</li>
          </Link>
        )
      })
    }
    </ul>
  </div>
))
