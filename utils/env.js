process.env.MONGO_URI = 'mongodb://admin-cointap-17:adminUSER171812@ds147821.mlab.com:47821/cointap';
const SALT_ROUNDS = 10;
process.env.JWT_PRIVATE_KEY = 'tC3OINaprTivA42kdwPoe42';

module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  SALT_ROUNDS,
  JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY,
};
