import React from 'react';

export default function Contact(props) {

  return(
    <p>
      {props.items.map(item =>
        {
        return typeof item === 'object' && props.items[props.items.length - 1] !== item
          ?  <React.Fragment><span>{item.preLabel ? item.preLabel + ' ' : null}{React.createElement('a', {href: item.href, target: item.targetBlank ? '_blank' : null}, item.label)}</span>{'  '}</React.Fragment>
          : typeof item === 'object'
          ?  <React.Fragment><span>{React.createElement('a', {href: item.href, target: item.targetBlank ? '_blank' : null}, item.label)}</span></React.Fragment>
          : props.items[props.items.length - 1] === item
          ? <span>item</span>
          : <React.Fragment><span>{item}</span>{'  '}</React.Fragment>
        })}
    </p>
  )
}
