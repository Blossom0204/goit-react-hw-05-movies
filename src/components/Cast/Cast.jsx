import React, { useEffect, useState } from 'react'
import { fetchCast } from '../../services/api'
import {
  CastList,
  CastItem,
  Image,
  CastName,
  CastCharacter,
} from './Cast.styles.jsx'
import noimage from '../../images/noimage.jpg'

import PropTypes from 'prop-types'

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null)

  useEffect(() => {
    fetchCast(movieId).then(({ cast }) => setCast(cast))
  }, [movieId])

  return (
    <>
      <CastList>
        {cast &&
          cast.map((item) => (
            <CastItem key={item.id}>
              <Image
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w300${item.profile_path}`
                    : noimage
                }
                alt={item.name}
                width="100"
                height="150"
              />
              <CastName>{item.name}</CastName>
              <CastCharacter>Character: {item.character}</CastCharacter>
            </CastItem>
          ))}
      </CastList>
    </>
  )
}
Cast.defaultProps = {
  cast: [],
  profile_path: '',
}

Cast.defaultProps = {
  cast: [],
  profile_path: '',
}

Cast.propTypes = {
  movieId: PropTypes.arrayOf(
    PropTypes.shape({
      cast: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }),
  ),
}
