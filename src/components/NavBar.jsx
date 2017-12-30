import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div id="navbar-container">
        <div>
          <NavLink id="user" className="nav-link" key="login-btn" to="/login"><i className="fa fa-user-circle"></i></NavLink>
          <NavLink className="nav-link" key="dashboard-link" to="/">
            <i className="fa fa-home"></i>
            <h4>DASHBOARD</h4>
          </NavLink>
          <NavLink className="nav-link" key="track-link" to="/track">
            <i className="fa fa-line-chart"></i>
            <h4>TRACK</h4>
          </NavLink>
        </div>
        <div className="nav-link setting">
          <i className="fa fa-gears"></i>
          <h4>SETTINGS</h4>
        </div>
      </div>
    );
  }
}

export default NavBar;
