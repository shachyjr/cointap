import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import './navbar-style.css';

class NavBar extends Component {
  render() {
    return [
      <NavLink key="dashboard-link" to="/">Dashboard</NavLink>,
      <NavLink key="track-link" to="/track">Track</NavLink>,
      <NavLink key="login-btn" to="/login">Log In</NavLink>,
      <NavLink key="register-btn" to="/register">Register</NavLink>,
    ];
  }
}

export default NavBar;
