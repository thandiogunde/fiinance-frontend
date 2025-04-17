import React from 'react';
import './About.css';
import aboutImage from '../assets/about-image.png'; // adjust the path/image name if needed
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import HeaderBar from '../components/HeaderBar';
import Navbar from '../components/Navbar';

const AboutUs = ({ user, onLogout}) => {
  return (
    <>
    <HeaderBar isLoggedIn={!!user} onLogout={onLogout} />
    <Navbar isAdmin={!!user} />
    <div className="about-container">
      <div className="about-left">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
          Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar 
          sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
          Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
        </p>
      </div>

      <div className="about-right">
        <img src={aboutImage} alt="About Visual" />
      </div>
    </div>
    </>
  );
};

export default AboutUs;
