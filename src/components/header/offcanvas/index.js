import React from 'react';
import Link from 'gatsby-link';
import Social from '../../socialicons/';
import './index.scss';

export default (props) => {
  return (
    <aside className='card offcanvas'>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {props.nav.map(item => (
              <li>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
        </ul>
        <Social social={props.social} />
      </div>
    </aside>
  )
}
