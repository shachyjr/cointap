import io from 'socket.io-client';
import CCC from './ccc-streamer';
const socket = io('https://streamer.cryptocompare.com');

/* DATA structure

  FLAGS : "1"
  FROMSYMBOL : "BTC"
  HIGH24HOUR : 19247.94
  HIGHHOUR : 19021.97
  LASTMARKET : "Coinbase"
  LASTTRADEID : 28888756
  LASTUPDATE : 1513644898
  LASTVOLUME : 0.1774
  LASTVOLUMETO : 3347.986822
  LOW24HOUR : 18037.29
  LOWHOUR : 18722.97
  MARKET : "CCCAGG"
  OPEN24HOUR : 18201.78
  OPENHOUR : 18971.19
  PRICE : 18809.85
  TOSYMBOL : "USD"
  TYPE : "5"
  VOLUME24HOUR : 126254.84534385821
  VOLUME24HOURTO : 2356975054.3058977
  VOLUMEHOUR : 4271.0231450022775
  VOLUMEHOURTO : 80547825.1498711

*/

const currentData = {};

/* extract will modify the data recieved from the socket and extract/format the data desired and assign it to the currentData object */
const extract = (data) => {
  // console.log("Price: ", data.PRICE);
  // console.log("24 hours: ", data.OPEN24HOUR);
  const from = data.FROMSYMBOL;
  const to = data.TOSYMBOL;
  const fsym = CCC.STATIC.CURRENCY.getSymbol(from);
  const tsym = CCC.STATIC.CURRENCY.getSymbol(to);
  const pair = from + to;
  // console.log(CCC.convertValueToDisplay(tsym, (data.PRICE - data.OPEN24HOUR)));
  currentData.CHANGE24HOUR = CCC.convertValueToDisplay(tsym, (data.PRICE - data.OPEN24HOUR));
  currentData.PRICE = data.PRICE;
};

const subToTrade = () => {};

const subToCurrent = () => {};

const subToCurrentAgg = (currency, callback) => {
  const subscribe = [`5~CCCAGG~${currency}~USD`];
  socket.emit('SubAdd', { subs: subscribe });
  socket.on('m', (message) => {
    const messageType = message.slice(0, message.indexOf('~'));
    if (messageType === CCC.STATIC.TYPE.CURRENTAGG) {
      const data = CCC.CURRENT.unpack(message);
      extract(data);
      callback(null, currentData);
    }
  });
  
};

export {
  subToTrade,
  subToCurrent,
  subToCurrentAgg,
};
