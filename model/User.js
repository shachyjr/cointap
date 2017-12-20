const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { MONGO_URI } = require('../utils/env.js');

mongoose.connect(MONGO_URI, { useMongoClient: true }, () => {
  console.log('Connection to database successful');
});

const UserSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
