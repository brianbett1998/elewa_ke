import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <HomePage />     
      <About />
    </div>
  );
}

export default App;
