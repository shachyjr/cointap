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
    this.state = {
      BTC: {},
      ETH: {},
    }
  }
  componentDidMount() {
    // console.log('COMPDID MOUNT');
    subToCurrentAgg((err, currentData) => {
      console.log(currentData);
      let { BTC, ETH } = currentData;
      this.setState({
        BTC: {
          name: BTC.FROMSYMBOL,
          price: BTC.PRICE,
          change24Hour: BTC.CHANGE24HOUR,
          change24HourPCT: BTC.CHANGE24HOURPCT,
          flags: BTC.FLAGS,
        },
        ETH: {
          name: ETH.FROMSYMBOL,
          price: ETH.PRICE,
          change24Hour: ETH.CHANGE24HOUR,
          change24HourPCT: ETH.CHANGE24HOURPCT,
          flags: ETH.FLAGS,
        }
      });
    });
    // console.log(subToCurrentAgg('BTC'));
  }
  render() {
    console.log("this is the state: ", this.state);
    return [
      <h1 key="heading">Hello world, WELCOME to coinTAP</h1>,
      <Cell key="btc" currUpdates={this.state.BTC}/>,
      <Cell key="eth" currUpdates={this.state.ETH}/>,
    ];
  }
}

export default Dashboard;
