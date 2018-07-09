import React from 'react';
import './index.scss';

export default (props) => {
  return (
    <div>
      <iframe name="hide" className='is-hidden'></iframe>
      <form name='contact' target='hide' method="POST" id='contact' netlify>
        <p id='formResponse'>Thanks for reaching out to me. I'll be in contact as soon as possible!</p>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="email" placeholder="Email" required />
        <p style={{display:'none'}}>Empty: <input type="text" name="url" /></p>
        <textarea name="message" placeholder="Your Message" required></textarea>
        <input type="submit" name="submit" value={props.buttonText} onClick={() => formSumbit()} />
    </form>
    </div>
  )
}

const formSumbit = () => {
  setTimeout( () => {
    document.getElementById('contact').reset();
    document.getElementById('formResponse').style.display = 'block';
    document.getElementById('formResponse').style.opacity = '1';
  }, 1000)
}