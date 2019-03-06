import React from 'react'
import { RouteData } from 'react-static'
import { Link } from '@reach/router'
import CategoryCard from '../components/Cards/CategoryCard'

export default () => {
  return (
    <RouteData>
      {
        ({ categories }) => {
          return (
            <div className="flex flex-row flex-wrap justify-center">
              {
                categories.map(category => {
                  return ( 
                    <Link className="" to={`/${category.name}`} key={category.name}>
                      <CategoryCard                         
                        category={category} 
                      />
                    </Link>
                  )
                })
              }
            </div>
        )}
      }
    </RouteData>
  )
}