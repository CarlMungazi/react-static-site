import React from 'react'

export default ({ category }) => {
  return (
    <article className='tc w5 mr3 bg-white br3 pa3 pa3-ns ba b--black-10 mb3'>
      <a className="db pv2 ph3 ph0-l no-underline black dim">
        <div>
          <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h3 w3 dib" title="" />
          <h1 className="f4">{ category.data.title }</h1>
          <hr className="mw3 bb bw1 b--black-10" />
        </div>
        <p className="lh-copy measure center f6 black-70"> { category.data.description } </p>
      </a>
    </article>
  )
}