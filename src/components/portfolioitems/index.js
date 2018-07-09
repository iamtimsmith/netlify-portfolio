import React from 'react';
import Link from 'gatsby-link';
import './index.scss';

export default (props) => {
  return (
    <Link className='portfolio-item column is-one-third' to={props.url}>
      <div>
        <p className='is-size-4'>{props.name}</p>
        <span></span>
        <p className='is-italic is-lowercase'>{props.tags}</p>
      </div>
      <img src={props.img} alt={props.name} />
    </Link>
  )
}
