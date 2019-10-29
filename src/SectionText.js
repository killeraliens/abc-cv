import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function SectionText({text, className, imgObj, img, project}) {
  const inlineCircleImg = imgObj
    ? <img src={img} className="inline-circle-img" alt={imgObj.alt}/>
    : null;

  const gitHubProject = project
    ? <a href={project.github.href} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub}/> View on GitHub{' '}</a>
    : null;

  return(
    <p className={`SectionText ${className}`}>{gitHubProject}{inlineCircleImg}{text}</p>
  )
}
