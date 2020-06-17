import React, {useState} from 'react';
import {Route} from 'react-router-dom'
// import Welcome from "./components/Welcome/Welcome";
import LazyMode from "./components/LazyMode/LazyMode";
import './App.css';
// import MainView from "./components/MainView/MainView";
// import axios from "axios";

function App() {
  const [quotes, setQuotes] = useState('');

  return (
    <div className="App">
      {/*<Welcome selection={selection} setSelection={setSelection}/>*/}
      <Route exact path = '/'
             render={(props) => <LazyMode {...props} setQuotes={setQuotes} quotes={quotes}/>}/>
             {/*<Route exact path = '/'*/}
             {/*render={(props) => <Welcome {...props} setQuotes={setQuotes} quotes={quotes}/>}/>*/}
      {/*<Route exact path = '/mainview'*/}
      {/*       render={(props) => <MainView {...props} quotes={quotes} />}/>*/}
    </div>
  );
}

export default App;
