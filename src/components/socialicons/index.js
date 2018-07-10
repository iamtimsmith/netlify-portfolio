import React from 'react';
import './index.scss';

export default (props) => {
  return (
    <ul className="social">
      {props.social.map(item => (
        <li key={item.icon}>
          <a href={item.href} style={{ fontSize:`${props.size}rem`}}>
            <i className={`fa fa-${item.icon}`}></i>
          </a>
        </li>
      ))}
    </ul>
  )
}
