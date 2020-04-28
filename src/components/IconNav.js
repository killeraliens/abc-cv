import React from 'react';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default function IconNav({ contactObject }) {

  if (!contactObject) {
    return null;
  }

  return(
    <nav className="IconNav">
        <ul className="contact-ul">
          {!!contactObject.github.href
            ? <li >
              <a href={contactObject.github.href} aria-label="link to my Github" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
              </a>
              {'  '}
            </li>
            : null}
          {!!contactObject.linkedin.href
          ? <li>
              <a href={contactObject.linkedin.href} aria-label="link to my LinkedIn" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>
              {'  '}
            </li>
            : null}
          {!!contactObject.email
              ? <li>
              <a href={`mailto:${contactObject.email}`} aria-label="link to my Email" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </a>
              {'  '}
            </li>
            : null}
        {!!contactObject.website.href
          ? <li>
            <a href={contactObject.website.href} aria-label="link to my Website" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
            </a>
          </li>
          : null}
        </ul>
    </nav>
  )
}

IconNav.propTypes = {
  contactObject: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    github: PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string
    }),
    linkedin: PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string
    }),
    website: PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string
    })
  })
}
