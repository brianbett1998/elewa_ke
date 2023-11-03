import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Care from './components/Care';
import TeamManagement from './components/TeamManagement';
import Culture from './components/Culture';
import Directions from './components/Directions';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <HomePage/> 
      <Care/>
      <TeamManagement/>
      <Culture/>
      <Directions/>
      <Footer/>
    
    </div>
  );
}

export default App;
