const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/', (req, res) => {
  User.find( (err, docs) => {
    if(!err) {
      console.log(docs);
      res.render("users/list", {
        users: docs
      });
    }
    else console.log('Error retriving users');
  })
});

router.get('/create', (req, res) => {
  res.render('users/addOrEdit', {viewTitle: 'Add/Edit User'});
});

router.post('/', (req, res) => {
  insertUser(req, res);
});

function insertUser(req, res) {
  console.log("Req: ", req.body);
  var user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.mobile = req.body.mobile;
  user.city = req.body.city;
  user.save( (err, doc) => {
    if(!err) res.redirect('users');
    else
      console.log("Error saving user.");
  });
}
module.exports = router;
