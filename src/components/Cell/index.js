import React, { Component } from 'react';
// import { subToCurrentAgg } from '../../../utils/api';
import './cell-style.css';

class Cell extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: '',
    //   price: '',
    //   change24Hour: '',
    //   change24HourPCT: '',
    //   flags: '',
    // };
  }

  // componentDidMount() {
  //   subToCurrentAgg((err, currentData) => {
  //     const { PRICE, CHANGE24HOUR, CHANGE24HOURPCT, FLAGS, FROMSYMBOL } = currentData;
  //     // console.log("FROMSYMBOL >>>>> ", FROMSYMBOL);
  //     // console.log("props.type", this.props.type);
  //     if (FROMSYMBOL === this.props.type) {
  //       console.log(FROMSYMBOL, " | ", this.props.type);
  //       this.setState({
  //         name: FROMSYMBOL,
  //         price: PRICE,
  //         change24Hour: CHANGE24HOUR,
  //         change24HourPCT: CHANGE24HOURPCT,
  //         flags: FLAGS,
  //       });
  //     }
  //   });
  //   // console.log(subToCurrentAgg('BTC'));
  // }

  // render() {
  //   // sets class for appropriate styling for increase or decrease
  //   let flagState;
  //   switch (this.state.flags) {
  //     case '1':
  //       flagState = 'caret-up';
  //       break;
  //     case '2':
  //       flagState = 'caret-down';
  //       break;
  //   }

  //   return [
  //     <h4 key="currency-name">{this.state.name}</h4>,
  //     <div>{this.props.type}</div>,
  //     <div key="price">{this.state.price}</div>,
  //     <div key="change-24">{this.state.change24Hour}</div>,
  //     <div key="change-24-PCT">{this.state.change24HourPCT}</div>,
  //     <i key="flag" className={`fa fa-${flagState} ${flagState}`}></i>,
  //   ];
  // }
  render() {
    // sets class for appropriate styling for increase or decrease
    const data = this.props.currUpdates;
    console.log(this.props.currUpdates);
    let flagState;
    switch (data.flags) {
      case '1':
        flagState = 'caret-up';
        break;
      case '2':
        flagState = 'caret-down';
        break;
    }

    return [
      <h4 key="currency-name">{data.name}</h4>,
      <div>{data.type}</div>,
      <div key="price">{data.price}</div>,
      <div key="change-24">{data.change24Hour}</div>,
      <div key="change-24-PCT">{data.change24HourPCT}</div>,
      <i key="flag" className={`fa fa-${flagState} ${flagState}`}></i>,
    ];
  }
}

export default Cell;
