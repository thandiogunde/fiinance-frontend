import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './HeaderBar.css';


const HeaderBar = ({ isLoggedIn, onLogout }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
  
    const handleSearch = (e) => {
      e.preventDefault();
      if (searchTerm.trim()) {
        navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
        setSearchTerm('');
      }
    };


  return (
    <div className="header-bar">
      <div className="logo">
        <Link to={isLoggedIn ? "/admin" : "/"}>
          <img src={logo} alt="Fortuna Logo" style={{ height: '60px' }} />
        </Link>
      </div>

       <div className="header-right" onSubmit={handleSearch}>
        {isLoggedIn ? (
          <button className="btn" onClick={onLogout}>Logout</button>
        ) : (
          <>
            <Link to="/register"><button className="btn">Register</button></Link>
            <Link to="/login"><button className="btn">Login</button></Link>
          </>
        )}
          <form onSubmit={handleSearch}>
          <input
            className="search"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          </form>
          </div>
    </div>
  );
};

export default HeaderBar;

