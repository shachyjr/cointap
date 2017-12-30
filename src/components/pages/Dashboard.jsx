import React from 'react';
import Cell from '../Cell.jsx';

const Dashboard = () => (
  <div id="dashboard">
    <Cell currencyType="BTC"/>
    <Cell currencyType="ETH"/>
    <Cell currencyType="LTC"/>
    <Cell currencyType="XMR"/>
    <Cell currencyType="DASH"/>
    <Cell currencyType="NXT"/>
    <Cell currencyType="ZEC"/>
    <Cell currencyType="DGB"/>
    <Cell currencyType="BCH"/>
    <Cell currencyType="XRP"/>
    <Cell currencyType="ETC"/>
    <Cell currencyType="XEM"/>
    <Cell currencyType="DCR"/>
    <Cell currencyType="PIVX"/>
  </div>
);

export default Dashboard;
