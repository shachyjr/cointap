const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const UserController = require('./controller/UserController');


const PORT = process.env.PORT || 6789;

const app = express();

app.use(express.static('build'));
app.use(bodyParser.json());

/* * * * * * * * * *
  API END POINTS
 * * * * * * * * * * */

app.post('/api/login', UserController.verify);
app.post('/api/register', UserController.add);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`coinTAP listening on ${PORT}`);
});
