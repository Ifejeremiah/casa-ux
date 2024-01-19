require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const { ControllerAdvice } = require('./controllers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.use(ControllerAdvice.notFoundHandler);
app.use(ControllerAdvice.errorHandler);

module.exports = app;
