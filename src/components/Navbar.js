// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAdmin }) => {
  return (
    <nav className="navbar">
      <ul>
        {isAdmin ? (
          <>
            <li><NavLink to="/admin">Home</NavLink></li>
            <li><NavLink to="/learning">Learning</NavLink></li>
            <li><NavLink to="/daily-tips">Daily Tips</NavLink></li>
            <li><NavLink to="/manage-money">Manage Money</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
          </>
        ) : (
          <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/learning">Learning</NavLink></li>
            <li><NavLink to="/daily-tips">Daily Tips</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

