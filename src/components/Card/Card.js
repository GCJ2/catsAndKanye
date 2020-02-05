import React from 'react';
import './Card.scss'

const Card = ({catURL, quote}) => {

  return (
    <div className='card'>
      <img className='cat-card-photo' src={catURL} alt='A cat'/>
      <p className='quote'>"{quote}"</p>
    </div>
  );
};

export default Card;