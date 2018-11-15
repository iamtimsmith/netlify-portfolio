import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './index.scss';

export default (props) => {
  return (
    <ul className="social">
      {props.social.map(item => (
        <li key={item.icon}>
          <a href={item.href} style={{ fontSize:`${props.size}rem`}}>
          <FontAwesomeIcon icon={['fab', item.icon]} />
          </a>
        </li>
      ))}
    </ul>
  )
}
