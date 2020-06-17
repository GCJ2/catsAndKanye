import React, {useState, useEffect} from 'react';
import axios from 'axios'
// import Header from "../Header/Header";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

const LazyMode = ({quotes}) => {
  // console.log(quotes)

  const [catURL, setCatURL] = useState('');
  const [kanyeQuote, setKanyeQuote] = useState('');
  // const [catFact, setCatFact] = useState('');
  // const [quote, setQuote] = useState('');

  const getCatPhoto = () => {
    // axios.get('https://aws.random.cat/meow')
    axios.get('https://api.thecatapi.com/v1/images/search')
      .then(res => {
        console.log(res.data[0].url);
        setCatURL(res.data[0].url)
      })
  };

  const getKanye = () => {
    axios.get('https://api.kanye.rest/')
      .then(res => {
        // console.log(res.data.quote);
        setKanyeQuote(res.data.quote);
      })
  };

  // const getCatFacts = () => {
  //   axios.get('https://catfact.ninja/fact')
  //     .then(res => {
  //       console.log(res.data.fact);
  //       setCatFact(res.data.fact);
  //     })
  // };

  useEffect(() => {
    getCatPhoto();
    // getCatFacts();
    getKanye();
  }, []);

  const anotherOne = (e) => {
    e.preventDefault();
    getCatPhoto();
    // getCatFacts();
    getKanye();
  };

  // if (quotes === "quotes from Kanye"){
  //   setQuote(kanyeQuote);
  // } else {
  //   setQuote(catFact);
  // }


  return (
    <div>
      <h1>Cats and Kanye</h1>
      <p>Pictures of cats with quotes from Ye.</p>
      <Card catURL={catURL} quote={kanyeQuote}/>
      <Footer anotherOne={anotherOne}/>
    </div>
  );
};

export default LazyMode;