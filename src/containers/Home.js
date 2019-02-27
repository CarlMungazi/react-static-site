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
            <div>
              {
                categories.map( (category, idx) => {
                  return ( 
                    <Link to={`/${category.name}`}>
                      <CategoryCard 
                        index={idx} 
                        key={idx} 
                        reverse={ idx % 2 == 0 } 
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