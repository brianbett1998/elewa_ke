import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import About from './components/About';
import Information from './components/Information';

function App() {
  return (
    <div className="App">
      <HomePage />     
      <About />
      <Information />
    </div>
  );
}

export default App;
