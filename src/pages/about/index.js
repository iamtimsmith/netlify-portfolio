import React from 'react';
import Contact from '../../components/contactform/';
import './index.scss';

export default () => {
  return (
    <div className="container" id="about">
      <section className="section">
        <div className="headshot" id="animate-img">
          <img src="/assets/tim.jpg" alt="Tim Smith"/>
        </div>
      </section>
      <section className="section">
        <div className="columns">
          <div className="column info">
            <p className="is-size-3">Hey there!</p>
            <p>My name is Tim Smith and I'm a front end web developer. I build responsive websites using modern technologies like React, Vue, Sass, Git, as well as good old jQuery. I also have experience with PHP and Wordpress as a CMS platform.<br/><br/>
            When I'm not building things for the web, I enjoy spending time with my wife and daughter who always know how to have fun. I also attend online classes for my AAS in Web Development, which I will be receiving in 2019.<br/><br/>
            Although I'm a front end developer I like challenges of all sorts so if you are looking for someone to work with, use the fancy contact form to get in touch!</p>
            <a href="https://www.iamtimsmith.com/resume.pdf" target="_blank" className="button">My Resume</a>
          </div>
          <div className="column">
            <Contact buttonText="Hire Me!" />
          </div>
        </div>
      </section>
    </div>
  )
}
