import React from 'react';
import NavBar from './NavBar';

const Header: React.FC = () => {
  return (
    <header>
      <img
        src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg"
        alt="Header Image"
      />
      <NavBar/>
    </header>
  );
};

export default Header;
