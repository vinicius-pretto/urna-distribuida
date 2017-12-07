const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ELEITOR_URL = require('../config').eleitorURL;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', ELEITOR_URL);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

require('./index.routes')(app);
  
module.exports = app;
