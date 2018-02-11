import React, { Component } from 'react';
import Cell from '../Cell.jsx';

import subToCurrentAgg from '../../../utils/api';

const Dashboard = () => (
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
);

// class Dashboard extends Component {
//   constructor() {
//     super();
//     this.state = {
//       coins: ['BTC', 'ETH', 'LTC', 'XMR', 'DASH', 'NXT', 'ZEC', 'DGB', 'BCH', 'XRP', 'ETC', 'XEM', 'ETC', 'XEM', 'DCR', 'PIVX'],
//       coinData: [],
//     }

//   }
//   componentDidMount() {
//     /* Get tracked prices */
//     // const { currencyType } = this.props;
//     // console.log(currencyType);
//     const { coinData } = this.state;
//     /* Get subscription information */
    
//     subToCurrentAgg(this.state.coins, (err, currentData) => {
//       const {
//         PRICE,
//         CHANGE24HOUR,
//         CHANGE24HOURPCT,
//         FLAGS,
//         FROMSYMBOL,
//       } = currentData[this.props.currencyType];
//       this.setState({ 
//         coinData: [...coinData, {
//           name: FROMSYMBOL,
//           price: PRICE,
//           change24Hour: CHANGE24HOUR,
//           change24HourPCT: CHANGE24HOURPCT,
//           flags: FLAGS,
//         }]
//       });
//       console.log("after sub", this.state.coinData);
//       // if (PRICE )
//     });
//   }

//   render() {
//     console.log("data from state", this.state.coinData);
//     const { coinData } = this.state;
//     const cells = [];
//     coinData.forEach((attribs) => {
//       cells.push(<Cell attribs={attribs}/>);
//     });
//     return (
//       <div id="dashboard">
//         {cells}
//       </div>
//     )
//   }
// }


export default Dashboard;
