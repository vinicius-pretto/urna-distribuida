const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const httpServer = require('http').Server(app);
const io = require('socket.io')(httpServer);
const config = require('../config');
const PAINEL_URL = config.painelUrl;
const ELEITOR_URL = config.eleitorUrl;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

io.on('connection', (socket) => {
  console.log('Connected ', socket.id);
});

app.webSocket = io;

require('./index.routes')(app);

module.exports = httpServer;