import React from 'react'
import PropTypes from 'prop-types'

export default function ContactSection({ contactObject }) {
  return (
    <section>
      <ul className="contact-ul">
        <li><b>{contactObject.name}</b></li>
        {contactObject.location ? <li><b>{contactObject.location}</b></li> : null }
        {contactObject.phone ? <li><b>{contactObject.phone}</b></li> : null}
        {contactObject.email
          ? <li>
              <b>email </b>
              <a href={`mailto:${contactObject.email}`} aria-label="link to email" >{contactObject.email}</a>
            </li>
          : null}
        {contactObject.github
          ? <li>
              <b>github </b>
              <a href={contactObject.github.href} aria-label="link to my Github" target="_blank" rel="noopener noreferrer">{contactObject.github.label}</a>
            </li>
          : null}
        {contactObject.linkedin
          ? <li>
              <b>linkedin </b>
              <a href={contactObject.linkedin.href} aria-label="link to my LinkedIn" target="_blank" rel="noopener noreferrer">{contactObject.linkedin.label}</a>
            </li>
          : null}
        {contactObject.website
          ? <li>
              <b>www </b>
              <a href={contactObject.website.href} aria-label="link to my Website" target="_blank" rel="noopener noreferrer">{contactObject.website.label}</a>
            </li>
          : null}
      </ul>
    </section>
  )
}

ContactSection.defaultProps = {
  contactObject: {
    name: 'My Full Name'
  }
}
ContactSection.propTypes = {
  contactObject: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    github: PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }),
    linkedin: PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }),
    website: PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  })
}
