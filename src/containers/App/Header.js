import React from 'react';
import { Head, SiteData } from 'react-static';
import styled from 'styled-components';

const BackgroundWrapper = styled.div.attrs({
  className: 'cover bg-left bg-center-l mb4'
})``

export default () => {  
  return (
    <SiteData>
      {({ siteTitle, siteTitleTag, siteTag }) => (
        <BackgroundWrapper>
          <div className='bg-black-80 pb4 pb4-m pb4-l'>
            <Head>
              <title>{siteTitle} | {siteTitleTag}</title>
            </Head>

            <div className='tc-l pt3 pt4-m pt4-l ph3' >
              <h1 className='f2 f1-l fw2 mb0 lh-title'>
                <a className='white' href="/">{siteTitle}</a>
              </h1>
              <h2 className='fw1 f3 white-80 mt3 mb4'>{siteTag}</h2>
            </div>
          </div>
        </BackgroundWrapper>
      )}
    </SiteData>
  )
}