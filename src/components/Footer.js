import React from 'react';
import './Footer.css';
import footerLogo from '../assets/footer-logo.png';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={footerLogo} alt="Fortuna Footer Logo" style={{ height: '40px' }} />
      </div>
      <div className="footer-right">
        <Link to="/faqs">FAQs</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <a href="#">Cookies</a>
        <a href="#">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
