import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
// import Home from './pages/Home';
// import Search from './pages/Search';
import {useEffect} from "react";
import axios from 'axios';


// import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
  
  return (
    
        <div className="App">
          <h1>Hello Youtube</h1>
          <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying}/>
          <Row title="Up Coming" fetchUrl={requests.fetchUpcoming}/>
          {/* <Row title="Now Playing"/> */}
        </div>
    
  );
}

export default App;
