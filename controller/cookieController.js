const jwt = require('jsonwebtoken');
const { JWT_PRIVATE_KEY } = require('../utils/env');
const User = require('../model/User');

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  const token = jwt.sign({ user: res.locals.user }, JWT_PRIVATE_KEY);
  res.cookie('ssid', token, { httpOnly: true });
  next();
};

cookieController.verifyCookie = (req, res, next) => {
  const { ssid } = req.cookies;
  // TODO: if !ssid
  jwt.verify(ssid, JWT_PRIVATE_KEY, (jwtErr, data) => {
    if (jwtErr) throw new Error(jwtErr);
    const { user } = data;
    User.findOne({ username: user.username }, (dbErr, dbUser) => {
      if (dbErr) return res.sendStatus(500);
      if (!dbUser) return res.sendStatus(401);
      res.locals.user = dbUser;
      next();
    });
  });
};

module.exports = cookieController;
