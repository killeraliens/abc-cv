import React from 'react'
import PropTypes from 'prop-types'

export default function MoreLink({ text, link }) {
  return(
    <p><b>{text}{' '}
      <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
    </b></p>
  )
}

MoreLink.defaultProps = {
  text: 'Check out more projects on my website',
  link: {
    href: 'https://reactjs.org/docs/typechecking-with-proptypes.html',
    label: 'My awesome website'
  }
}

MoreLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string
  })
}
