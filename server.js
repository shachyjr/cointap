const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const UserController = require('./controller/UserController');
const cookieController = require('./controller/cookieController');


const PORT = process.env.PORT || 6789;

const app = express();

app.use(express.static('build'));
app.use(bodyParser.json());
app.use(cookieParser());

/* * * * * * * * * *
  API END POINTS
 * * * * * * * * * * */

/* API ENDPOINT RESPONSE GUIDE

  * Response type: JSON object
  * For 401 unauthorized responses, expect just a status with no message
  {
    user: 'user object',
    error: 'error message',
    message: 'response message - including extra details about response'
  }

*/

app.post('/api/login', UserController.verify, cookieController.setCookie, (req, res) => res.status(200).json({ user: res.locals.user }).end());

app.post('/api/register', UserController.add, cookieController.setCookie, (req, res) => res.status(200).json({ user: res.locals.user }).end());

app.get('/api/logout', cookieController.removeCookie);

/*
  * retrieve user from cookie, if valid cookie exists
  * replace old jwt token with a refreshed one - this is a secure alternative to expiring the session and making the user login again often
*/
app.get('/api/userFromSession', cookieController.verifyCookie, cookieController.setCookie, (req, res) => res.status(200).json({ user: res.locals.user }).end());

app.post('/api/trackedCoins', UserController.getTracked, (req, res) => res.status(200).json({ user: res.locals.user }).end());

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, () => {
  console.log(`cointap listening on ${PORT}`);
});
