import React from 'react'
import PropTypes from 'prop-types'

export default function AboutSection({ children }) {
  return(
    <section>
      <p className="intro-p" >
        { children }
      </p>
    </section>
  )
}

AboutSection.propTypes = {
  children: PropTypes.node
}
