import React from 'react';

export default function Contact(props) {

  return(
    <React.Fragment>
      {props.items.map(item =>
        <span>{
        typeof item === 'object'
          ? React.createElement('a', {href: item.href, target: item.targetBlank ? '_blank' : null}, item.label)
          : props.items[props.items.length - 1] === item
          ? item
          : item + `|`
        }</span>)}
    </React.Fragment>
  )
}
