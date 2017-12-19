import React, { Component } from 'react';
import Cell from '../Cell.jsx';


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return [
      <h1>Hello world, WELCOME to coinTAP</h1>,
      <Cell type="BTC"/>,
      // <Cell type="ETH"/>
    ];
  }
}

export default Dashboard;
