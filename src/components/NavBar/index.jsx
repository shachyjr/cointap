import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class NavBar extends Component {
  render() {
    return (
      <div id="navbar-container">
        <div>
          <NavLink className="nav-link" key="login-btn" to="/login"><i className="fa fa-user-circle"></i></NavLink>
          <NavLink className="nav-link" key="dashboard-link" to="/"><i className="fa fa-dashboard"></i></NavLink>
          <NavLink className="nav-link" key="track-link" to="/track"><i className="fa fa-line-chart"></i></NavLink>
        </div>
        <div className="nav-link">
          <i className="fa fa-gears"></i>
        </div>
      </div>
    );
  }
}

export default NavBar;
