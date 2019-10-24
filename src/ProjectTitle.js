import React from 'react';

export default function ProjectTitle({title, link}) {
  const linkText = link
    ? <React.Fragment>{' | '}<a href={link.href} target='_blank' rel="noopener noreferrer">{link.label}</a></React.Fragment>
    : null;


  return(
    <div className="ProjectTitle">
      <h3 >{title}{linkText}</h3>
    </div>
  )
}
