import React from 'react'
import { Head, SiteData } from 'react-static'
import styled from 'styled-components'

const BackgroundWrapper = styled.div.attrs({
  className: 'cover bg-left bg-center-l'
})`
  background-image: url(http://mrmrs.github.io/photos/u/011.jpg)
`

export default () => {  
  return (
    <SiteData>
      {({ siteTitle, siteTitleTag, siteTag }) => (
        <BackgroundWrapper>
          <div className='bg-black-80 pb5 pb5-m pb5-l'>
            <Head>
              <title>{siteTitle} | {siteTitleTag}</title>
            </Head>

            <div className='tc-l pt4 pt5-m pt5-l ph3' >
              <div className='f2 f1-l fw2 white-90 mb0 lh-title'>
                <a href="/">{siteTitle}</a>
              </div>
              <div className='fw1 f3 white-80 mt3 mb4'>{siteTag}</div>
            </div>
          </div>
        </BackgroundWrapper>
      )}
    </SiteData>
  )
}