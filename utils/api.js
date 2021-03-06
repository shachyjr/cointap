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

const currentData = {
  BTC: {},
  ETH: {},
  LTC: {},
  XMR: {},
  DASH: {},
  NXT: {},
  ZEC: {},
  DGB: {},
  BCH: {},
  XRP: {},
  ETC: {},
  XEM: {},
  DCR: {},
  PIVX: {},
};

/* extract will modify the data recieved from the socket and extract/format the data desired and assign it to the currentData object */
const extract = (data) => {
  // deconstruct and check existance because values that remain consistent will not be updates and will fall through as undefined
  const { PRICE, OPEN24HOUR, FLAGS, FROMSYMBOL } = data;
  if (PRICE) currentData[FROMSYMBOL].PRICE = PRICE;
  if (OPEN24HOUR) currentData[FROMSYMBOL].OPEN24HOUR = OPEN24HOUR;
  if (FLAGS) currentData[FROMSYMBOL].FLAGS = FLAGS;
  if (FROMSYMBOL) currentData[FROMSYMBOL].FROMSYMBOL = FROMSYMBOL;

  const from = data.FROMSYMBOL;
  const to = data.TOSYMBOL;
  // const fsym = CCC.STATIC.CURRENCY.getSymbol(from);
  // const tsym = CCC.STATIC.CURRENCY.getSymbol(to);
  // const pair = from + to;
  currentData[FROMSYMBOL].CHANGE24HOUR = `${(currentData[FROMSYMBOL].PRICE - currentData[FROMSYMBOL].OPEN24HOUR).toFixed(2)}`;
  currentData[FROMSYMBOL].CHANGE24HOURPCT = `${(((currentData[FROMSYMBOL].PRICE - currentData[FROMSYMBOL].OPEN24HOUR) / currentData[FROMSYMBOL].OPEN24HOUR) * 100).toFixed(2)}`;
};

const createSub = (coins) => {
  const subs = [];
  coins.forEach((coin) => {
    subs.push(`5~CCCAGG~${coin}~USD`);
  });
  console.log(subs);
  return subs;
};

/* function subscribes to event on external socket, cleans up data, and envokes the specified callback */
// const subToCurrentAgg = (coins, callback) => {
const subToCurrentAgg = (callback) => {
  const subscribe = ['5~CCCAGG~BTC~USD', '5~CCCAGG~ETH~USD', '5~CCCAGG~LTC~USD', '5~CCCAGG~XMR~USD', '5~CCCAGG~DASH~USD', '5~CCCAGG~NXT~USD', '5~CCCAGG~ZEC~USD', '5~CCCAGG~DGB~USD', '5~CCCAGG~BCH~USD', '5~CCCAGG~XRP~USD', '5~CCCAGG~ETC~USD', '5~CCCAGG~XEM~USD', '5~CCCAGG~DCR~USD', '5~CCCAGG~PIVX~USD'];

  // cpnst subscribe = createSub(coins);


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

export default subToCurrentAgg;
