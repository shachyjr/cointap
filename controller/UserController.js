const bcrypt = require('bcrypt');

const User = require('../model/User.js');
const { SALT_ROUNDS } = require('../utils/env.js');

const UserController = {};

UserController.add = (req, res, next) => {
  // check if user name already exists
  const username = req.body.username.toLowerCase();
  User.findOne({ username }, (dbFindErr, foundUser) => {
    if (dbFindErr) return res.sendStatus(500);
    if (foundUser) {
      res.status = 409;
      res.write(JSON.stringify({ error: 'Username already exists' }));
      return res.end();
    }

    // encrypt password
    bcrypt.hash(req.body.password, SALT_ROUNDS, (err, hash) => {
      if (err) throw new Error(err);

      // create user and store in db
      User.create({
        name: req.body.name,
        username,
        email: req.body.email,
        password: hash,
      }, (dbErr, user) => {
        if (dbErr) return res.sendStatus(500);
        res.locals.user = user;
        next();
      });
    });
  });
};

UserController.verify = (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (dbErr, user) => {
    if (dbErr) return res.sendStatus(500);
    // TODO: if !user
    // make password check even if user specified does not exist to increase security
    const passw = user ? user.password : 'temp';
    bcrypt.compare(req.body.password, passw, (err, result) => {
      if (!result) {
        res.status(401);
        res.write(JSON.stringify({ error: 'Username or password is incorrect' }));
        return res.end();
      }
      res.locals.user = user;
      next();
    });
  });
};

module.exports = UserController;

