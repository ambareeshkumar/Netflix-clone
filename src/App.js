import React from 'react'
import Row from './components/Row';
import './App.css';
import requests from './request';

function App() {
  return (
    <div className="App">
      <h1> let's build netflix </h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
