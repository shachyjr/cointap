const jwt = require('jsonwebtoken');
const { JWT_PRIVATE_KEY } = require('../utils/env');
const User = require('../model/User');

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  const token = jwt.sign({ user: res.locals.user }, JWT_PRIVATE_KEY);
  console.log(`>>>> inside setCookie <<<< \ntoken: ${token}`);
  res.cookie('ctsid', token, { httpOnly: true });
  return next();
};

cookieController.verifyCookie = (req, res, next) => {
  const { ctsid } = req.cookies;
  // no cookie representing session exists on browser - session not valid
  if (!ctsid) return res.sendStatus(401);

  jwt.verify(ctsid, JWT_PRIVATE_KEY, (jwtErr, data) => {
    if (jwtErr) {
      res.status(500).json({ error: jwtErr });
      return res.end();
    }
    const { user } = data;
    User.findOne({ username: user.username }, (dbErr, dbUser) => {
      if (dbErr) {
        res.status(500).json({ error: dbErr });
        return res.end();
      }
      if (!dbUser) return res.sendStatus(401);
      res.locals.user = dbUser;
      return next();
    });
  });
};

module.exports = cookieController;
