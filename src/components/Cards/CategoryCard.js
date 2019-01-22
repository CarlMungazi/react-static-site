import React from 'react'

export default ({ category, reverse, index }) => {
  return (
    <article className={`${index ? "bt" : ""} bb b--black-10`}>
      <a className="db pv4 ph3 ph0-l no-underline black dim">
        <div className="flex flex-column flex-row-ns">
          { !reverse ?
            [ <div className="w-100 w-60-ns pr3-ns">
                <h1 className="f3 fw1 baskerville mt0 lh-title">{ category.name }</h1>
                <p className="f6 f5-l lh-copy">
                  This is even.
                </p>
              </div>,
              <div className="pl3-ns mb4 mb0-ns w-100 w-40-ns">
                <img src="http://placekitten.com/g/600/300" className="db w-100 br2 br--top" alt="" />
              </div> ]
            :
            [ <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img src="http://placekitten.com/g/600/300" className="db w-100 br2 br--top" alt="" />
              </div>, 
              <div className="w-100 w-60-ns pl3-ns">
                <h1 className="f3 fw1 baskerville mt0 lh-title">{ category.name }</h1>
                <p className="f6 f5-l lh-copy">
                  This is odd.
                </p>
              </div> ]
          }
        </div>
      </a>
    </article>
  )
}