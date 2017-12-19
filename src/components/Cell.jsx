import React, { Component } from 'react';
import { subToCurrentAgg } from '../../utils/api';

class Cell extends Component {
  constructor() {
    super();
    this.state = { name: '', price: '', change24Hour: '', change24HourPCT: '', flag: ''};
  }

  componentDidMount() {
    subToCurrentAgg('BTC', (err, currentData)=>{
      console.log(currentData.PRICE);
      console.log(currentData.CHANGE24HOUR);
    });
    // if (CHANGE24HOUR) {
    //   this.setState({ change24Hour: CHANGE24HOUR});
    // }
    // if (PRICE) {
    //   this.setState({ price: PRICE});
    // }
    // console.log(subToCurrentAgg('BTC'));
  }

  render() {
    return [
      <h4 key="currency-name">{this.state.name}</h4>,
      <div key="price">{this.state.price}</div>,
      <div key="change-24">{this.state.change24Hour}</div>,
      <div key="change-24-PCT">{this.state.change24HourPCT}</div>
    ];
  }
}

export default Cell;
