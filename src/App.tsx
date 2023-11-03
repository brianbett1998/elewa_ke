import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import About from './components/About';
import Information from './components/Information';
import CreativePage from './components/CreativePage';
import Interest from './components/Interest';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HomePage/>     
      <About/>
      <Information/>
      <CreativePage/>
      <Interest/>
      <Footer/>
    </div>
  );
}

export default App;
