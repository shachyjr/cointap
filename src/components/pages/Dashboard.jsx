import React, { Component } from 'react';
import Cell from '../Cell';

import { subToCurrentAgg } from '../../../utils/api';


class Dashboard extends Component {
  constructor() {
    super();
    // this.state = {
    //   name: '',
    //   price: '',
    //   change24Hour: '',
    //   change24HourPCT: '',
    //   flags: '',
    // };
    // this.state = {
    //   BTC: {},
    //   ETH: {},
    //   LTC: {},
    // }
  }
  // componentDidMount() {
  //   // console.log('COMPDID MOUNT');
  //   subToCurrentAgg((err, currentData) => {
  //     let { BTC, ETH, LTC } = currentData;
  //     this.setState({
  //       BTC: {
  //         name: BTC.FROMSYMBOL,
  //         price: BTC.PRICE,
  //         change24Hour: BTC.CHANGE24HOUR,
  //         change24HourPCT: BTC.CHANGE24HOURPCT,
  //         flags: BTC.FLAGS,
  //       },
  //       ETH: {
  //         name: ETH.FROMSYMBOL,
  //         price: ETH.PRICE,
  //         change24Hour: ETH.CHANGE24HOUR,
  //         change24HourPCT: ETH.CHANGE24HOURPCT,
  //         flags: ETH.FLAGS,
  //       },
  //       LTC: {
  //         name: LTC.FROMSYMBOL,
  //         price: LTC.PRICE,
  //         change24Hour: LTC.CHANGE24HOUR,
  //         change24HourPCT: LTC.CHANGE24HOURPCT,
  //         flags: LTC.FLAGS,
  //       },
  //     });
  //   });
  //   // console.log(subToCurrentAgg('BTC'));
  // }
  render() {
    return [
      <h1 key="heading">Hello world, WELCOME to coinTAP</h1>,
      // <Cell key="btc" currUpdates={this.state.BTC}/>,
      // <Cell key="eth" currUpdates={this.state.ETH}/>,
      // <Cell key="ltc" currUpdates={this.state.LTC}/>,
      <Cell key="btc" type="BTC"/>,
      <Cell key="eth" type="ETH"/>,
      <Cell key="ltc" type="LTC"/>,
      <Cell key="xmr" type="XMR"/>,
      <Cell key="dash" type="DASH"/>,
      <Cell key="nxt " type="NXT"/>,
    ];
  }
}

export default Dashboard;