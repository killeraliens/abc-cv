import React from 'react';

export default function Contact(props) {
  const inlineCircleImg = props.imgObj
    ? <img src={props.img} className="inline-circle-img" alt={props.imgObj.alt}/>
    : null

  return(
    <p>
      {inlineCircleImg}
      {props.items.map((item, i) =>
        {
        return typeof item === 'object' && props.items[props.items.length - 1] !== item
          ?  <React.Fragment key={i}><span>{item.preLabel ? item.preLabel + ' ' : null}{React.createElement('a', {href: item.href, target: item.targetBlank ? '_blank' : null}, item.label)}</span>{'  '}</React.Fragment>
          : typeof item === 'object'
          ?  <React.Fragment key={i}><span>{item.preLabel ? item.preLabel + ' ' : null}{React.createElement('a', {href: item.href, target: item.targetBlank ? '_blank' : null}, item.label)}</span></React.Fragment>
          : props.items[props.items.length - 1] === item
          ? <span>item</span>
          : <React.Fragment key={i}><span>{item}</span>{'  '}</React.Fragment>
        })}
    </p>
  )
}
