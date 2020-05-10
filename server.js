require('./models/db');

const express = require('express');
const userController = require('./controllers/userController');

var app = express();

app.listen(3000, () => {
  console.log("Server started at post number: 3000");
})

app.use('/users', userController);
