const express = require('express');
const bodyParser = require('body-parser');
const ELEITOR_URL = require('../config').eleitorURL;

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', ELEITOR_URL);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

require('./index.routes')(app);

module.exports = app;