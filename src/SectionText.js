import React from 'react';

export default function SectionText({text, className, imgObj, img}) {
  const inlineCircleImg = imgObj
    ? <img src={img} className="inline-circle-img" alt={imgObj.ariaLabel}/>
    : null
  return(
    <p className={`SectionText ${className}`}>{inlineCircleImg}{text}</p>
  )
}
