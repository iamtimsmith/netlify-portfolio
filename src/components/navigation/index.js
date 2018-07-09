import React from 'react';
import Link from 'gatsby-link';

/*
Props available:
navClass: Classes to be applied to the ul,
itemClass: Classes to be applied to the individual list items,
showHome: Should nav show the home link?,
nav: this will be the navigation items to show
*/

export default (props) => {
  return (
    <ul className={props.navClass}>
      {props.showHome && 
        <li className={props.itemClass}>
          <Link to='/'>Home</Link>
        </li>
      }
      {props.nav.map(item => (
        <li style={{marginTop:0}} className={props.itemClass}>
          <Link to={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  )
}
