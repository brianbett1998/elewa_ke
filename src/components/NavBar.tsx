import React from 'react';


const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about-us">About Us</a>
        </li>
        <li>
          <a href="/social-impact">Social Impact</a>
        </li>
        <li>
          <a href="/invest">Invest</a>
        </li>
        <li>
          <a href="/venture-labs">Venture Labs</a>
        </li>
        <li>
          <a href="/brands">Brands</a>
        </li>
        <li>
          <a href="/careers">Careers</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
