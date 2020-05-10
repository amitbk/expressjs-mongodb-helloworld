require('./models/db');

const express = require('express');
const userController = require('./controllers/userController');
const path = require('path');
const expresshbs = require('express-handlebars');

var app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', expresshbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');


app.listen(3000, () => {
  console.log("Server started at post number: 3000");
})

app.use('/users', userController);
