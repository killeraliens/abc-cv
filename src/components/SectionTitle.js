import React from 'react';
import PropTypes from 'prop-types'

export default function SectionTitle({ className, title }) {
  return(
    <h2 className={`SectionTitle ${className ? className : ''}`}>{title}</h2>
  )
}

SectionTitle.defaultProps = {
  title: 'Section Title'
}

SectionTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
}
