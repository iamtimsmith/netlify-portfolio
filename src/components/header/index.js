import React from 'react';
import Link from 'gatsby-link';
import OffCanvas from './offcanvas/';
import Nav from '../navigation/';
import './index.scss';

export default (props) => {
  return (
    <nav className='navbar clear'>
      <div className="container">
        <div className="navbar-start">
          {/* Navbar Brand */}
          <div className="navbar-brand">
            <Link to='/' className="navbar-item is-size-3">{props.title}</Link>
          </div>
          {/* offCanvas Toggle */}
          <button 
            className="offcanvas-toggle" 
            onClick={toggleOffCanvas} ><span></span></button>
          <OffCanvas 
            nav={props.nav}
            social={props.social} />
        </div>

        {/* Desktop Menu */}
        <Nav 
          navClass='navbar-menu navbar-end' 
          itemClass='navbar-item'
          nav={props.nav} />
      </div>
    </nav>
  )
}

const toggleOffCanvas = () => {
  const brand = document.querySelector('.navbar-brand').classList;
  const button = document.querySelector('.offcanvas-toggle').classList;
  const offcanvas = document.querySelector('.offcanvas').classList;
  brand.contains('hidden') ? brand.remove('hidden') : brand.add('hidden');
  button.contains('active') ? button.remove('active') : button.add('active');
  offcanvas.contains('showing') ? offcanvas.remove('showing') : offcanvas.add('showing');
}