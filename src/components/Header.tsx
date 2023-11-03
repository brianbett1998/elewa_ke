import React from 'react';
import Navbar from './NavBar';

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg" alt="Logo" />
      </div>
      <Navbar/>
      </header>
     
  );
};

export default Header;
