import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Care from './components/Care';
import TeamManagement from './components/TeamManagement';

function App() {
  return (
    <div>
      <Header/>
      <HomePage/> 
      <Care/>
      <TeamManagement/>
    
    </div>
  );
}

export default App;
