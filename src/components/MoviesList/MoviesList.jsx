import React from 'react'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'
import { MoviesList, MoviesItem } from './MoviesList.styles.jsx'
import PropTypes from 'prop-types'

export default function MoviesListTrend({ movies }) {
  const location = useLocation()
  const { url } = useRouteMatch()

  return (
    <MoviesList>
      {movies.map(({ id, title }) => (
        <MoviesItem key={id}>
          <Link
            to={{
              pathname: `${url}movies/${id}`,
              state: { from: location },
            }}
          >
            {title}
          </Link>
        </MoviesItem>
      ))}
    </MoviesList>
  )
}
MoviesListTrend.propTypes = {
  movies: PropTypes.array.isRequired,
}
