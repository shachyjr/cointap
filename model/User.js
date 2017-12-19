const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
