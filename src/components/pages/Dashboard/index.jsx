import React, { Component } from 'react';
import Cell from '../../Cell/index.jsx';
import './style.css';

class Dashboard extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="dashboard">
        <Cell currencyType="BTC"/>
        <Cell currencyType="ETH"/>
        <Cell currencyType="LTC"/>
        <Cell currencyType="XMR"/>
        <Cell currencyType="DASH"/>
        <Cell currencyType="NXT"/>
        <Cell currencyType="ZEC"/>
        <Cell currencyType="DGB"/>
      </div>
    );
  }
}

export default Dashboard;
