import React from 'react'
import PropTypes from 'prop-types'
import SectionTitle from './SectionTitle'
import ProjectTitle from './ProjectTitle'

export default function EducationSection({ educationArray }) {
  return(
    <section>
      <SectionTitle title="Education" />
      {educationArray.map((course, i) => {
        return (
          <div className="course" key={i}>
            <SectionTitle className="date" title={course.date} />
            <ProjectTitle title={course.title} />
          </div>
        )
      })}
    </section>
  )
}

EducationSection.defaultProps = {
  educationArray: []
}

EducationSection.propTypes = {
  educationArray: PropTypes.arrayOf(
    PropTypes.shape( {
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  )
}
