// src/components/NavBar.tsx
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My App</div>
      <ul className="navbar-links">
        <li><a href="/about">About</a></li>
        <li><a href="/social-impact">Social impact</a></li>
        <li><a href="/invest">Invest</a></li>
        <li><a href="/venture-labs">Venture Labs</a></li>
        <li><a href="/brands">Brands</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
