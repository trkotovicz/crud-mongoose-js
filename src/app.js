require('express-async-errors');
const express = require('express');
const errorMiddleware = require('./middlewares/error');
const universityRouter = require('./routers/University');

const app = express();
app.use(express.json());

app.use(universityRouter);

app.use(errorMiddleware);

module.exports = app;