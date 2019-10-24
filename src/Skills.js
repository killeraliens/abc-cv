import React from 'react';

export default function Skills({skills}) {
  const bullet = <span className="bullet">•</span>;

  return(
    <p className="Skills">{skills.map((skill, i) => {

           return skills[skills.length - 1] === skill
           ? <span key={i}>{skill}</span>
           : <React.Fragment key={i}><span>{skill}</span>{bullet}</React.Fragment>
    })}</p>
  )
}


