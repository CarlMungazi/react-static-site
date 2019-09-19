import React from 'react';
import { Head, SiteData } from 'react-static';
import styled from 'styled-components';

export default () => {  
  return (
    <SiteData>
      {({ siteTitle, siteTitleTag, siteTag }) => (
          <div className='mb4'>
            <Head>
              <title>{siteTitle} | {siteTitleTag}</title>
            </Head>

            <div className='tc-l' >
              <h1 className='f2 f1-l fw2 mt0 lh-title'>
                <a className='gray' href="/">{siteTitle}</a>
              </h1>
              <h2 className='fw1 f3 gray mt0'>{siteTag}</h2>
            </div>
            <hr/>
          </div>
      )}
    </SiteData>
  )
}