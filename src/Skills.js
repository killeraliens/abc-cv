import React from 'react';

export default function Skills({skills}) {
  const bullet = <span className="bullet">•</span>;

  return(
    <p className="Skills">{skills.map(skill => {
          const skillSpan = <span>{skill}</span>;
           return skills[skills.length - 1] === skill
           ? skillSpan
           : <React.Fragment>{skillSpan}{bullet}</React.Fragment>
    })}</p>
  )
}


