import React, { Component } from 'react';
import Cell from '../Cell';

import { subToCurrentAgg } from '../../../utils/api';


class Dashboard extends Component {
  constructor() {
    super();
  }
  render() {
    return [
      <h1 key="heading">Hello world, WELCOME to coinTAP</h1>,
      <Cell key="btc" currencyType="BTC"/>,
      <Cell key="eth" currencyType="ETH"/>,
      <Cell key="ltc" currencyType="LTC"/>,
      <Cell key="xmr" currencyType="XMR"/>,
      <Cell key="dash" currencyType="DASH"/>,
      <Cell key="nxt" currencyType="NXT"/>,
      <Cell key="zec" currencyType="ZEC"/>,
      <Cell key="dgb " currencyType="DGB"/>
    ];
  }
}

export default Dashboard;
