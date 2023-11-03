import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import HomeBlack from './components/HomeBlack';
import Cooperative from './components/Cooperative';
import Business from './components/Business';
import Knowledge from './components/Knowledge';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <HomePage/>
      <HomeBlack/>
      <Cooperative/>
      <Business/>
      <Knowledge/>
      <Partners/>
      <Footer/>

    </div>
  );
}

export default App;
