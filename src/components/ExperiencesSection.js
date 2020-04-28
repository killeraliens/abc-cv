import React from 'react'
import PropTypes from 'prop-types'
import SectionTitle from './SectionTitle'
import ProjectTitle from './ProjectTitle'

export default function ExperiencesSection({ experienceArray }) {
  return(
    <section>
      <SectionTitle title="Experience" />
      {experienceArray.map((exp, i) => {
        return (
          <div className="experience" key={i}>
            <SectionTitle className="date" title={exp.date} />
            <ProjectTitle title={exp.title} link={exp.link} role={exp.role} />
            <ul className="section-list">
              {exp.textBullets.map((bull, i) => <React.Fragment key={i}><span style={{ float: 'left' }}>•</span><li>{bull}</li></React.Fragment>)}
            </ul>
          </div>
        )
      })}
    </section>
  )
}

ExperiencesSection.defaultProps = {
  experienceArray: []
}

ExperiencesSection.propTypes = {
  experienceArray: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      textBullets: PropTypes.arrayOf(
        PropTypes.string
      ).isRequired // Use an empty array if no bullets.
    })
  )
}
