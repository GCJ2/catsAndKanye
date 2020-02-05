import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";
import './Welcome.scss'

const Welcome = ({setQuotes, history, quotes}) => {

  const [catPhoto, setCatPhoto] = useState('');

  const getCatPhoto = () => {
    axios.get('https://aws.random.cat/meow')
      .then(res => {
        console.log(res.data.file);
        setCatPhoto(res.data.file);
      })
  };

  useEffect(() => {
    getCatPhoto()
  }, []);


  const handleChange = e => {
    setQuotes(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (quotes === '') {
      alert('Please select an option')
    } else {
      history.push('/mainview')
    }
  };

  return (
    <div>
      <h1>Kanye and Cats.</h1>
      <form className='welcome-option' onSubmit={handleSubmit}>
        <h1>I want to see photos of cats accompanied by</h1>
        <label>
          <input type='radio'
                 value='facts about cats'
                 name='quotes'
                 onChange={handleChange}/>
          Facts about Cats
        </label>
        <br/>
        <label>
          <input type='radio'
                 value='quotes from Kanye'
                 name='quotes'
                 onChange={handleChange}/>
          Quotes by Kanye West
        </label>
        <br/>
        <button type='submit'>Submit</button>
      </form>
      <img className='welcome-photo' src={catPhoto} alt='A cat'/>
    </div>
  );
};

export default Welcome;