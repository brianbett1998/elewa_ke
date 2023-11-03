import React from 'react';
import Header from './Header';

const HomePage: React.FC = () => {
  return (
    <div className='home'>
        <Header/>
    <div className='home-h2'>
      <h2>Scaling impact. Beyond the norm</h2>
      </div>
      <div className='home-h1'>
      <h1>
        Human and Environmental Impact through Social Enterprise
      </h1>    
    </div>
    </div>
  );
};

export default HomePage;
