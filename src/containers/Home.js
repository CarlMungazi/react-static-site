import React from 'react'
import { RouteData } from 'react-static'

import CategoryCard from '../components/Cards/CategoryCard'

export default () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <RouteData>
        {
          ({ categories }) => {
            
            return (
              <div>
                {
                  categories.map( (category) => {
                    return <CategoryCard category={category} />
                  })
                }
              </div>
          )}
        }
      </RouteData>
    </div>
  )
}