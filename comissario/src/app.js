const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');
const app = express();

app.use(bodyParser.json());

app.db = database();

require('./indes.routes')(app);

app.get('/health', (req, res) => {
    res.send('Hello')
});

module.exports = app;