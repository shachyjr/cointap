const jwt = require('jsonwebtoken');
const { JWT_PRIVATE_KEY } = require('../utils/env');
const User = require('../model/User');

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  const token = jwt.sign({ user: res.locals.user }, JWT_PRIVATE_KEY, { expiresIn: '1m' });
  res.cookie('ctsid', token, { httpOnly: true, path: '/' });
  return next();
};

cookieController.removeCookie = (req, res) => res.clearCookie('ctsid', { httpOnly: true, path: '/' }).end();

cookieController.verifyCookie = (req, res, next) => {
  const { ctsid } = req.cookies;
  // no cookie representing session exists on browser - session not valid
  if (!ctsid) return res.status(401).json({ error: 'Unauthorized' }).end();

  jwt.verify(ctsid, JWT_PRIVATE_KEY, (jwtErr, data) => {
    // remove cookie if it is there and causes an error
    if (jwtErr) return cookieController.removeCookie(req, res);

    const { user } = data;
    User.findOne({ username: user.username }, (dbErr, dbUser) => {
      if (dbErr) return res.status(500).json({ error: dbErr }).end();
      if (!dbUser) return res.status(401).json({ error: 'Unauthorized' }).end();
      res.locals.user = dbUser;
      return next();
    });
  });
};

module.exports = cookieController;
