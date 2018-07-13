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
            <Link onClick={closeOffCanvas} to='/'>Home</Link>
          </li>
          {props.nav.map(item => (
              <li key={item.label}>
                <Link onClick={closeOffCanvas} to={item.href}>{item.label}</Link>
              </li>
            ))}
        </ul>
        <Social social={props.social} />
      </div>
    </aside>
  )
}


const closeOffCanvas = () => {
  document.querySelector('.offcanvas-toggle').classList.remove('active');
  document.querySelector('.offcanvas').classList.remove('showing');
  
}