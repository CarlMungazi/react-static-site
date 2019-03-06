import React from 'react';
import { withRouteData } from 'react-static';
import { Link } from '@reach/router';

export default withRouteData(({ category }) => (
  <div>
    <span><Link to="/">Home</Link> / { category.data.title }</span>
    <ul className="list ph3 ph5-ns pv4">
    {
      category.topics.map(topic => {
        return (
          <Link 
            className="dib mr1 mb2"
            to={`/${category.name}/${topic.name}`}
            key={topic.name}
          >
            <li className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">{topic.data.title}</li>
          </Link>
        )
      })
    }
    </ul>
  </div>
))
