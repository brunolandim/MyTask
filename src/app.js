const express = require('express');
const taskRouter = require('./api/routes/tarefaRouter');

const app = express();
app.use(express.json());

const userRouter = require('./api/routes/userRouter');

app.use(userRouter);
app.use(taskRouter);

module.exports = app;
