import React from 'react';
import './Footer.scss'

const Footer = ({anotherOne}) => {
  return (
    <div>
      <button className='another-one-button' onClick={anotherOne}>ANOTHER ONE</button>
    </div>
  );
};

export default Footer;