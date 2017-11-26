const express = require('express');
const { resolve } = require('path');
const app = express();

app.use(express.static(resolve('public')));

module.exports = app;