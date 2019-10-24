import React from 'react';

export default function SectionTitle(props) {

  return(
    <h2 className={`SectionTitle ${props.className}`}>{props.title}</h2>
  )
}
