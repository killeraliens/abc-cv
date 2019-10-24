import React from 'react';

export default function SectionText({text, className}) {
  return(
    <p className={`SectionText ${className}`}>{text}</p>
  )
}
