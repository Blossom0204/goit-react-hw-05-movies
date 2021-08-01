import React, { useEffect, useState } from 'react'
import { fetchReviews } from '../../services/api'
import ShowMoreText from 'react-show-more-text'
import {
  ReviewsList,
  ReviewsItem,
  ReviewsTitle,
  ReviewsContent,
} from './Reviews.styles.jsx'
import PropTypes from 'prop-types'

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(null)

  useEffect(() => {
    fetchReviews(movieId).then(({ results }) => setReviews(results))
  }, [movieId])

  const lengthRev = reviews && reviews.length
  return (
    <>
      <ReviewsList>
        {lengthRev > 0 &&
          reviews.map((item) => (
            <ReviewsItem key={item.id}>
              <ReviewsTitle>Author: {item.author}</ReviewsTitle>
              <ShowMoreText
                lines={3}
                more="Show more"
                less="Show less"
                className="content-css"
                anchorClass="my-anchor-css-class"
                expanded={false}
                truncatedEndingComponent={'... '}
              >
                <ReviewsContent>{item.content}</ReviewsContent>
              </ShowMoreText>
            </ReviewsItem>
          ))}
      </ReviewsList>
      {reviews && reviews.length === 0 && (
        <ReviewsTitle>No reviews for this movie</ReviewsTitle>
      )}
    </>
  )
}
Reviews.propTypes = {
  movieId: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}
