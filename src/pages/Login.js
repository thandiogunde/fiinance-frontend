import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../assets/logo.png';
import loginImage from '../assets/register-banner.png';
import axios from 'axios';



const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5050/api/login', loginData);
      console.log("Login response:", res.data);
      alert(res.data.message || "Logged in!");
      
      localStorage.setItem('user', JSON.stringify(res.data.user)); // Save user in local storage
      setUser(res.data.user); // Save user in App.js
      navigate('/admin');     // Redirect to dashboard
      
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Something went wrong. Try again.");
      }
    }
  };  

  return (
    <div className="login-container">
      <div className="login-form">
        <Link to="/" className="close-btn">×</Link>

        <Link to="/">
          <img src={logo} alt="Fortuna Logo" className="login-logo" />
        </Link>

        <h1>Welcome back!</h1>

        <form onSubmit={handleSubmit}>
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            placeholder="yourname@gmail.com"
            required
          />

          <label>Password *</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="min. 8 characters"
            required
          />

          <p className="forgot-password">Forgot password?</p>

          <button type="submit" className="btn-main">Sign in</button>
        </form>

        <button className="btn-google">Sign in with Google</button>

        <p className="switch-form">
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>

      <div className="login-illustration">
        <img src={loginImage} alt="Login Visual" />
      </div>
    </div>
  );
};

export default Login;

