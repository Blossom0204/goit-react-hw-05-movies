import React from 'react'
import { DivContainer } from './Container.styles'
import PropTypes from 'prop-types'

export default function Container({ children }) {
  return <DivContainer>{children}</DivContainer>
}
Container.propTypes = {
  children: PropTypes.node,
}
