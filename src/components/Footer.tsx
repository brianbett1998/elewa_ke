
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
    <div>
        <h1>HeadQuaters</h1>
        <p>The Promenade, 19 General Mathenge Rd, Nairobi, Kenya</p>
    </div>
    <div>
        <h1>Contact us</h1>
        <p>T +254 78 92 27 755</p>
        <p>E info@elewa.ke</p>
    </div>
    <div className="footer-section">
      <h3>Navigation</h3>
      <p>About us</p>
      <p>Social Impact</p>
      <p>Invest</p>
      <p>News</p>
      <p>Contact</p>
    </div>
    <div className="footer-section">
      <h3>Brands</h3>
        <p>Elewa</p>
        <p>Iitalanta</p>
        <p>Venture Labs</p>
    </div>
    <div className="footer-section">
      <h3>Privacy</h3>
      <p>Terms and conditions</p>
      <p>Cookie preference</p>      
    </div>
  </footer>
);
};

export default Footer;