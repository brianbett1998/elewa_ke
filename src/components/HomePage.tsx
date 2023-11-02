import React from 'react';
import NavBar from './NavBar';


const HomePage: React.FC = () => {
  return (
    <div className="home">
      <NavBar />
      <h2>Trade, not aid</h2>
      <h1>Southern innovations addressing global problems.</h1>
    </div>
  );
};

export default HomePage;
