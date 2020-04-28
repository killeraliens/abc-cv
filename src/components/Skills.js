import React from 'react'
import PropTypes from 'prop-types'

export default function Skills({ skills }) {
  const bullet = <span className="bullet">•</span>;
  return(
    <p className="Skills">{skills.map((skill, i) => {
           return skills[skills.length - 1] === skill
           ? <span key={i}>{skill}</span>
           : <React.Fragment key={i}><span>{skill}</span>{bullet}</React.Fragment>
    })}</p>
  )
}

Skills.defaultProps = {
  skills: []
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.string
  )
}
