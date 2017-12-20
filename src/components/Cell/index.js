import React, { Component } from 'react';
import PropTypes from 'prop-types';
import subToCurrentAgg from '../../../utils/api';
import './cell-style.css';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      change24Hour: '',
      change24HourPCT: '',
      flags: '',
    };
  }

  componentDidMount() {
    subToCurrentAgg((err, currentData) => {
      const {
        PRICE,
        CHANGE24HOUR,
        CHANGE24HOURPCT,
        FLAGS,
        FROMSYMBOL,
      } = currentData[this.props.currencyType];
      this.setState({
        name: FROMSYMBOL,
        price: PRICE,
        change24Hour: CHANGE24HOUR,
        change24HourPCT: CHANGE24HOURPCT,
        flags: FLAGS,
      });
    });
  }

  render() {
    // sets class for appropriate styling for increase or decrease
    let flagState;
    switch (this.state.flags) {
      case '1':
        flagState = 'caret-up';
        break;
      case '2':
        flagState = 'caret-down';
        break;
    }

    return [
      <h4 key="currency-name">{this.state.name}</h4>,
      <div key="price">{this.state.price}</div>,
      <div key="change-24">{this.state.change24Hour}</div>,
      <div key="change-24-PCT">{`${this.state.change24HourPCT} %`}</div>,
      <i key="flag" className={`fa fa-${flagState} ${flagState}`}></i>,
    ];
  }
  // render() {
  //   // sets class for appropriate styling for increase or decrease
  //   const data = this.props.currUpdates;
  //   console.log(this.props.currUpdates);
  //   let flagState;
  //   switch (data.flags) {
  //     case '1':
  //       flagState = 'caret-up';
  //       break;
  //     case '2':
  //       flagState = 'caret-down';
  //       break;
  //   }

  //   return [
  //     <h4 key="currency-name">{data.name}</h4>,
  //     <div>{data.currencyType}</div>,
  //     <div key="price">{data.price}</div>,
  //     <div key="change-24">{data.change24Hour}</div>,
  //     <div key="change-24-PCT">{data.change24HourPCT}</div>,
  //     <i key="flag" className={`fa fa-${flagState} ${flagState}`}></i>,
  //   ];
  // }
}

Cell.propTypes = {
  currencyType: PropTypes.string.isRequired,
};

export default Cell;
