const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 6789;

const app = express();

app.use(express.static('build'));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`coinTAP listening on ${PORT}`);
});
