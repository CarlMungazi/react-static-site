import React from 'react';
import { withRouteData } from 'react-static';
import { Link } from '@reach/router';

export default withRouteData(({ category }) => (
  <div>
    <span><Link to="/">Home</Link> / { category.data.title }</span>
    <ul className="list ph3 ph5-ns pv4">
    <div className="flex flex-row flex-wrap justify-center">
    {
      category.topics.map(topic => {
        return (
          <Link 
            className="mr3 w5 dib mr1 mb2"
            to={`/${category.name}/${topic.name}`}
            key={topic.name}
          >
            <article class="br3 hidden ba b--black-10 mv4">
              <p class="f5 bg-near-white br3 br--top black-60 mv0 pv2 ph3">{topic.data.title}</p>
              <div class="pa3 bt b--black-10">
                <p class="f6 f5-ns lh-copy measure">{topic.data.description}</p>
              </div>
            </article>
          </Link>
        )
      })
    }
    </div>
    </ul>
  </div>
))
