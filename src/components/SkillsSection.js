import React from 'react'
import PropTypes from 'prop-types'
import SectionTitle from './SectionTitle'
import Skills from './Skills'

export default function SkillsSection({ skillsTitle, skillsArray }) {
  return (
    <section>
      <SectionTitle title={ skillsTitle } />
      <Skills skills={ skillsArray } />
    </section>
  )
}

SkillsSection.defaultProps = {
  skillsTitle: 'Skillsets Title',
  skillsArray: []
}

SkillsSection.propTypes = {
  skillsTitle: PropTypes.string,
  skillsArray: PropTypes.arrayOf(
    PropTypes.string
  )
}
