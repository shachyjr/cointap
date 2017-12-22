import React from 'react';
import Cell from '../../Cell/index.jsx';
import './style.css';

const Dashboard = () => (
  <div id="dashboard" className="shift">
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

export default Dashboard;
