import React from 'react'
import { SiteData, RouteData } from 'react-static'

export default () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <SiteData>
        {({ siteTitle }) => (
          <div>
            Welcome to {siteTitle}
          </div>
        )}
      </SiteData>
      <RouteData>
        {
          ({ categories }) => {
            
            return (
              <div>
                {
                  categories.map( (category) => {
                    return (<ul> <li>{ category } </li></ul>)
                  })
                }
              </div>
          )}
        }
      </RouteData>
    </div>
  )
}