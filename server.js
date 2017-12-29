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

app.post('/api/login', UserController.verify, cookieController.setCookie, (req, res) => {
  res.status = 200;
  res.json(res.locals.user);
  return res.end();
});

app.post('/api/register', UserController.add, cookieController.setCookie, (req, res) => {
  res.status = 200;
  res.json(res.locals.user);
  return res.end();
});

app.get('/api/getUser', cookieController.verifyCookie, (req, res) => {
  res.status = 200;
  res.json(res.locals.user);
  return res.end();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`coinTAP listening on ${PORT}`);
});
