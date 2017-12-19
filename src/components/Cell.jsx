import React, { Component } from 'react';
import { subToCurrentAgg } from '../../utils/api';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.type, price: '', change24Hour: '', change24HourPCT: '', flags: ''};
  }

  componentDidMount() {
    subToCurrentAgg(this.state.name, (err, currentData) => {
      const { PRICE, CHANGE24HOUR, CHANGE24HOURPCT, FLAGS } = currentData;
      this.setState({ price: PRICE, change24Hour: CHANGE24HOUR, change24HourPCT: CHANGE24HOURPCT, flags: FLAGS });
    });
    
    // console.log(subToCurrentAgg('BTC'));
  }

  render() {
    return [
      <h4 key="currency-name">{this.state.name}</h4>,
      <div key="price">{this.state.price}</div>,
      <div key="change-24">{this.state.change24Hour}</div>,
      <div key="change-24-PCT">{this.state.change24HourPCT}</div>,
      <div key="flag">{this.state.flags}</div>
    ];
  }
}

export default Cell;
