import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default function IconNav(props) {

  const { contact } = props;
  const blank = contact && contact.targetBlank;

  if (!contact) {
    return null;
  }

  return(
    <nav className="IconNav">
        <ul className="contact-ul">
          <li >
            <a href={contact.github.href} aria-label="link to my Github" target={`${blank}`}>
              <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
            </a>
          </li>
          {'  '}
          <li>
            <a href={contact.linkedin.href} aria-label="link to my LinkedIn" target={`${blank}`}>
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
          </li>
          {'  '}
          <li>
            <a href={contact.email.href} aria-label="link to my Email" target={`${blank}`}>
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </a>
          </li>
          {'  '}
          <li>
            <a href={contact.website.href} aria-label="link to my Website" target={`${blank}`}>
              <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
            </a>
          </li>

        </ul>
    </nav>
  )
}

