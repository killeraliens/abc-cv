import React from 'react';

export default function Contact({contactObj}) {
  const contactObjArr = Object.keys(contactObj);
  return(
    <div className="Contact">
      {contactObjArr.map((item, i) =>
        {
        return typeof contactObj[item] === 'object' && contactObjArr[contactObjArr.length - 1] !== contactObj[item]
          ?  <React.Fragment key={i}><span>{contactObj[item].preLabel ? contactObj[item].preLabel + ' ' : null}{React.createElement('a', {href: contactObj[item].href, target: contactObj[item].targetBlank ? '_blank' : null}, contactObj[item].label)}</span>{'  '}</React.Fragment>
          : typeof contactObj[item] === 'object'
          ?  <React.Fragment key={i}><span>{contactObj[item].preLabel ? contactObj[item].preLabel + ' ' : null}{React.createElement('a', {href: contactObj[item].href, target: contactObj[item].targetBlank ? '_blank' : null}, contactObj[item].label)}</span></React.Fragment>
          : contactObjArr[contactObjArr.length - 1] === contactObj[item]
          ? <span>contactObj[item]</span>
          : <React.Fragment key={i}><span>{contactObj[item]}</span>{'  '}</React.Fragment>
        })}
    </div>
  )
}
