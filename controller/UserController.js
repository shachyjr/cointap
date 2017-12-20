const bcrypt = require('bcrypt');

const User = require('../model/User.js');
const { SALT_ROUNDS } = require('../utils/env.js');

const UserController = {};

UserController.add = (req, res) => {
  // check if user name already exists
  User.find({ username: req.body.username }, (err, user) => {
    if (err) return res.sendStatus(500);
    if (user) {
      res.status = 409;
      res.write('Username already exists');
      return res.end();
    }
  });

  // encrypt password
  bcrypt.hash(req.body.password, SALT_ROUNDS, (err, hash) => {
    if (err) throw new Error(err);

    // create user and store in db
    User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hash,
    }, (dbErr, user) => {
      if (dbErr) return res.sendStatus(500);
      res.status = 200;
      res.write(user);
      return res.end();
    });
  });
};

UserController.verify = (req, res) => {
  User.find({ username: req.body.username }, (dbErr, user) => {
    if (dbErr) return res.sendStatus(500);
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (!user || !result) {
        res.status(401);
        res.write('Username or password is incorrect');
        return res.end();
      }
      res.status = 200;
      res.write(user);
      return res.end();
    });
  });
};

module.exports = UserController;

