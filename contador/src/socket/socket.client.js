const http = require('http');
const app = require('../app.js');
const httpServer = require('http').Server(app);
const io = require('socket.io')(httpServer);

io.on('connection', (socket) => {
  console.log('Connected ', socket.id);
});

module.exports = io;

