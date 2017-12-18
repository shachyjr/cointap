const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./env.js');


mongoose.connect(MONGO_URI,{useMongoClient: true}, () => {
  console.log('database connection successful');
})


const PORT = process.env.PORT || 6789;

const app = express();

app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`coinTAP listening on ${PORT}`)
});
