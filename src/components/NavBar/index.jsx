import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class NavBar extends Component {
  render() {
    return (
      <div id="navbar-container">
        <div id="navbar">
          <NavLink className="nav-link" key="dashboard-link" to="/"><i className="fa fa-dashboard"></i></NavLink>
          <NavLink className="nav-link" key="track-link" to="/track">Track</NavLink>
          <NavLink className="nav-link" key="login-btn" to="/login">Log In</NavLink>
          <NavLink className="nav-link" key="register-btn" to="/register">Register</NavLink>
        </div>
      </div>
    );
  }
}

export default NavBar;
