import React, { Component } from 'react';
import PropTypes from 'prop-types';
import subToCurrentAgg from '../../utils/api';

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

    return (
      <div className="cell-block">
        <h2 key="currency-name">{this.state.name}</h2>
        <div className="emphasize"key="price">{this.state.price}</div>
        <i key="flag" className={`fa fa-${flagState} ${flagState}`}></i>
        <div key="change-24">{this.state.change24Hour}</div>
        <div key="change-24-PCT">{`${this.state.change24HourPCT} %`}</div>
      </div>
    );
  }
}

Cell.propTypes = {
  currencyType: PropTypes.string.isRequired,
};

export default Cell;
