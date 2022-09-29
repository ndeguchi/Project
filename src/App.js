import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
// import Home from './pages/Home';
// import Search from './pages/Search';

// import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

// rfce

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Banner fetchUrl={requests.fetchTrending} />
      <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying} />
      <Row title="Up Coming" fetchUrl={requests.fetchUpcoming} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;
