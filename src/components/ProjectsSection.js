import React from 'react'
import PropTypes from 'prop-types'
import SectionTitle from './SectionTitle'
import ProjectTitle from './ProjectTitle'
import Skills from './Skills'
import MoreLink from './MoreLink'

export default function ProjectsSection({ projectsArray, moreProjectsLink }) {
  return(
    <section>
      <SectionTitle title="Projects" />
      { projectsArray.map((project, i) => {
        return (
          <div className="project" key={i}>
            <ProjectTitle title={project.title} link={project.link} />
            <p>
              {project.text}{' '}{project.inlineLink && !!project.inlineLink.href
                ? <a href={project.inlineLink.href} target="_blank" rel="noopener noreferrer">{project.inlineLink.label}</a>
                : null}
            </p>
            <Skills skills={project.stackSkills} />
          </div>
        )
      })}
      { moreProjectsLink
        ? <MoreLink text='You can find more projects on my website at' link={moreProjectsLink} />
        : null }
    </section>
  )
}

ProjectsSection.defaultProps = {
  projectsArray: []
}

ProjectsSection.propTypes = {
  projectsArray: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.shape({
        href: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      }),
      inlineLink: PropTypes.shape({
        href: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
    })
  ),
  moreProjectsLink: PropTypes.shape({
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })
}
