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
      tracking: false,
    };
  }

  componentDidMount() {
    /* Get tracked prices */
    const { currencyType } = this.props;
    console.log(currencyType);
    /* Get subscription information */
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

      // if (PRICE )
    });
  }

  startTracking() {
    // default 15%
    this.setState({ tracking: true });
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
        {/*<button onClick={this.startTracking}>Track</button>*/}
      </div>
    );
  }
}

Cell.propTypes = {
  currencyType: PropTypes.string.isRequired,
};








// const Cell = () => {
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

//   const { attribs } = this.props;
//   return (
//     <div className="cell-block">
//       <h2 key="currency-name">{attribs.name}</h2>
//       <div className="emphasize"key="price">{attribs.price}</div>
//       <i key="flag" className={`fa fa-${flagState} ${flagState}`}></i>
//       <div key="change-24">{attribs.change24Hour}</div>
//       <div key="change-24-PCT">{`${attribs.change24HourPCT} %`}</div>
//       <button onClick={this.startTracking}>Track</button>
//     </div>
//   );

// }





export default Cell;
