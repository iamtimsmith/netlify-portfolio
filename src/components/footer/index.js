import React from 'react';
import Social from '../socialicons';
import Nav from '../navigation';
import './index.scss';

export default (props) => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <Social size='2.5' social={props.social} />
          </div>
        </div>
          <Nav 
            navClass='columns is-centered'
            itemClass='column is-narrow' 
            showHome={true} 
            nav={props.nav} />
      </div>
    </footer>
  )
}
