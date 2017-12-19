const mongoose = require('mongoose');
const User = require('../model/User.js');
const { MONGO_URI } = require('../env.js');

mongoose.connect(MONGO_URI, { useMongoClient: true }, () => {
  console.log('Connection to database successful');
});

const UserController = {};

UserController.createUser = (req, res) => {
  User.create({}, (err, user) => {

  });
}

module.exports = UserController;

