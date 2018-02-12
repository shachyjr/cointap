import React, { Component } from 'react';
import Cell from '../Cell.jsx';

import subToCurrentAgg from '../../../utils/api';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.isLoading();
  }

  componentDidMount() {
    this.props.isLoaded();
  }

  render() {
    return (
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
    )
  }
}

export default Dashboard;
