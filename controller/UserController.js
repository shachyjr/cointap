const bcrypt = require('bcrypt');
require('dotenv').config();

const User = require('../model/User.js');

const UserController = {};

UserController.add = (req, res, next) => {
  // check if user name already exists
  const username = req.body.username.toLowerCase();
  User.findOne({ username }, (dbFindErr, foundUser) => {
    if (dbFindErr) return res.status(500).json({ error: dbFindErr }).end();
    if (foundUser) return res.status(409).json({ error: 'Username already exists' }).end();

    // encrypt password
    bcrypt.hash(req.body.password, Number(process.env.SALT_ROUNDS), (err, hash) => {
      if (err) throw new Error(err);
      // create user and store in db
      User.create({
        name: req.body.name,
        username,
        email: req.body.email,
        password: hash,
      }, (dbErr, user) => {
        if (dbErr) return res.status(500).json({ error: dbErr }).end();
        res.locals.user = user;
        return next();
      });
    });
  });
};

UserController.verify = (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (dbErr, user) => {
    if (dbErr) return res.status(500).json({ error: dbErr }).end();

    // username specified is not a registered user
    if (!user) return res.status(400).json({ error: 'Username specified does not exist' }).end();
    // make password check even if user specified does not exist to increase security
    const passw = user ? user.password : 'temp';
    bcrypt.compare(req.body.password, passw, (err, result) => {
      if (!result) return res.status(401).json({ error: 'Username or password is incorrect' }).end();
      res.locals.user = user;
      return next();
    });
  });
};

UserController.getTracked = (req, res, next) => {
  const username = req.body.username.toLowerCase();
  User.findOne({ username }, (dbErr, user) => {
    if (dbErr) {
      // res.jsonn({})
    }
    return res.sendStatus(500);
  });
};

module.exports = UserController;

