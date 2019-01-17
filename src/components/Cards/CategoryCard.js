import React from 'react'
import styled from 'styled-components'

export default ({ category }) => {  
  return (
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <img src="http://placekitten.com/g/600/300" className="db w-100 br2 br--top" alt="" />
      <div className="pa2 ph3-ns pb3-ns">
        <div className="dt w-100 mt1">
          <div className="dtc">{ category }</div>
        </div>
        <p className="f6 lh-copy measure mt2 mid-gray">
          This is where the description appears.
        </p>
      </div>
    </article>
  )
}