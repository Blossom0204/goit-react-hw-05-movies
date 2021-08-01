import React, { useState, useEffect, lazy, Suspense } from 'react'
import {
  useParams,
  useRouteMatch,
  Link,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom'
import noimage from '../../images/noimage.jpg'
import Loader from '../../components/Loader/Loader'
import ShowMoreText from 'react-show-more-text'
import { fetchMovie } from '../../services/api'
import {
  MovieTitle,
  MovieInfo,
  MovieImg,
  MovieYear,
  MovieScore,
  Overview,
  TextOverview,
  MovieGenres,
  ListGenres,
  Item,
  MovieDetails,
  ListInfo,
  BtnWrap,
  BtnGoBack,
} from './MovieDetailsPage.styles'

const Cast = lazy(() => import('../../components/Cast/Cast'))
const Reviews = lazy(() => import('../../components/Reviews/Reviews'))

export default function MovieDetailsPage() {
  const history = useHistory()
  const location = useLocation()
  const { url } = useRouteMatch()
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetchMovie(movieId).then(setMovie)
  }, [movieId])

  const handleGoBack = () => {
    history.push(location?.state?.from ?? '/')
  }

  const createYear = (movie) => {
    return movie.release_date ? movie.release_date.slice(0, 4) : ''
  }

  return (
    <>
      {movie && (
        <>
          <BtnGoBack type="button" onClick={handleGoBack}>
            Go back
          </BtnGoBack>
          <MovieInfo>
            <MovieImg
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : noimage
              }
              width="300px"
              height="200px"
            />
            <MovieDetails>
              <MovieTitle>{`${movie.title}`}</MovieTitle>
              <MovieYear>Reliase year: {`${createYear(movie)}`}</MovieYear>
              <MovieScore>User score: {movie.vote_average}</MovieScore>
              <Overview>Overview</Overview>
              <ShowMoreText
                lines={3}
                more="Show more"
                less="Show less"
                className="content-css"
                anchorClass="my-anchor-css-class"
                expanded={false}
                truncatedEndingComponent={'... '}
              >
                <TextOverview>{movie.overview}</TextOverview>
              </ShowMoreText>
              <MovieGenres>Genres</MovieGenres>
              <ListGenres>
                {movie.genres &&
                  movie.genres.map(({ id, name }) => (
                    <Item key={id}>{name}</Item>
                  ))}
              </ListGenres>
            </MovieDetails>
          </MovieInfo>
        </>
      )}
      <ListInfo>
        <BtnWrap>
          <Link
            to={{
              pathname: `${url}/cast`,
              state: { from: location?.state?.from },
            }}
          >
            Cast
          </Link>
        </BtnWrap>
        <BtnWrap>
          <Link
            to={{
              pathname: `${url}/reviews`,
              state: { from: location?.state?.from },
            }}
          >
            Reviews
          </Link>
        </BtnWrap>
      </ListInfo>
      <Suspense fallback={<Loader />}>
        <Route path="/movies/:movieId/cast">
          <Cast movieId={movieId} />
        </Route>

        <Route path="/movies/:movieId/reviews">
          <Reviews movieId={movieId} />
        </Route>
      </Suspense>
    </>
  )
}
