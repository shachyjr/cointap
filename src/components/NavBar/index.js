import React, { Component } from 'react';
import './navbar-style.css';

class NavBar extends Component {
  render() {
    return [
      <button>Log In</button>,
      <button>Register</button>,
    ];
  }
}

export default NavBar;
