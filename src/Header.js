import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons'

export default function Header({contact, className}) {
  return(
    <header className={`contact ${className}`}>
      <ul className="contact-ul">
        <li><b>Alexandra Campbell</b></li>
        <li><b>{contact.phone}</b></li>
        <li><b>{contact.email.label}</b></li>
        <li>
          <b>{contact.github.preLabel}:</b>
          {' '}
          <a href={contact.github.href} aria-label="link to my Github">
            {contact.github.label}
          </a>
        </li>
      </ul>
      <ul className="contact-ul">
        <li >
          <a href={contact.github.href} aria-label="link to my Github">
            <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
          </a>
          {'  '}
          <a href={contact.linkedin.href} aria-label="link to my LinkedIn">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
          {'  '}
          <a href={contact.email.href} aria-label="link to my Email">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </a>
          {'  '}
        </li>
      </ul>
    </header>

  )
}
