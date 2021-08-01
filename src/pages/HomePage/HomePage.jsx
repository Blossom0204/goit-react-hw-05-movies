import React, { useState, useEffect } from 'react'
import { useHistory, Link, useRouteMatch, useLocation } from 'react-router-dom'
import * as fetchMovie from '../../services/api'
import {
  TrendTodayTitle,
  TrendItem,
  TrendList,
  MovieTitle,
  Img,
} from './HomePage.styles'

import noimage from '../../images/noimage.jpg'

export default function HomePage() {
  const { url } = useRouteMatch()
  const [movies, setMovies] = useState([])
  const location = useLocation()
  const history = useHistory()
  const [setError] = useState()

  useEffect(() => {
    fetchMovie
      .fetchTrendingMovies()
      .then((data) => {
        history.push('/')
        setMovies(data.results)
      })
      .catch((error) => setError(error))
  }, [])

  return (
    <>
      {movies && (
        <>
          <TrendTodayTitle>Trending today</TrendTodayTitle>
          <TrendList>
            {movies.map((movie) => (
              <TrendItem key={movie.id}>
                <Link
                  to={{
                    pathname: `${url}movies/${movie.id}`,
                    state: { from: { location } },
                  }}
                >
                  <Img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : noimage
                    }
                    alt={movie.title}
                  />
                  <MovieTitle>{movie.title}</MovieTitle>
                </Link>
              </TrendItem>
            ))}
          </TrendList>
        </>
      )}
    </>
  )
}
