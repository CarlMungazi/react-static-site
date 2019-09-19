import React from 'react'
import { Link } from '@reach/router'
import { withRouteData } from 'react-static';

export default withRouteData (({ posts }) => {
  console.log(posts)
  return (
    <section>
      {
        posts.map(post => 
          <article key={post.data.date} className="bb b--black-10">
            <Link className="db pv4 ph3 ph0-l no-underline black dim" to={`/blog/post/${post.data.slug}`}>
              <div className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                  <img src={post.data.thumbnail} className="db" alt="Photo of a warehouse with stacked shelves." />
                </div>
              <div className="w-100 w-60-ns pl3-ns">
                <h1 className="f3 fw1 baskerville mt0 lh-title">{post.data.title}</h1>
                <p className="f6 f5-l lh-copy">
                 {post.data.content}
                </p>
              </div>
            </div>
            </Link>
          </article>
        )
      }
    </section>
  )
})