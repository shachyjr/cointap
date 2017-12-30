const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { MONGO_URI } = require('../utils/env.js');

mongoose.connect(MONGO_URI, { useMongoClient: true }, () => {
  console.log('Connection to database successful');
});

/* Embedded Documents */
const CoinSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, default: new Date() },
  price: { type: Number, required: true },
  notePrice: { type: Number, required: true },
});

const UserSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  tracking: [CoinSchema],
});

module.exports = mongoose.model('User', UserSchema);
