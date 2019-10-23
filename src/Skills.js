import React from 'react';

export default function Skills(props) {
  const contact = props.className === 'contactArr'
  return(
    <p>
      {props.skills.map(skill =>
        <span>{
          props.skills[props.skills.length - 1] === skill
          ? skill
          : skill + `  •  `
        }</span>)}
    </p>
  )
}
