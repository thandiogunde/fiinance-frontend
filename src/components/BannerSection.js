import React from 'react';
import './BannerSection.css';
import manageImage from '../assets/manage-banner.png'; 
import { Link } from 'react-router-dom';

const BannerSection = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <h1>Plan for tomorrow's goals, today</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
        </p>
        <Link to="/register">
          <button className="banner-btn">Get started</button>
        </Link>
      </div>
      <div className="banner-image">
        <img src={manageImage} alt="Girl calculating finances" />
      </div>
    </section>
  );
};

export default BannerSection;
