import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import './navbar-style.css';

class NavBar extends Component {
  render() {
    return [
      <NavLink key="dashboard-link" to="/">Dashboard</NavLink>,
      <NavLink key="track-link" to="/track">Track</NavLink>,
      <button key="login-btn">Log In</button>,
      <button key="register-btn">Register</button>,
    ];
  }
}

export default NavBar;
