const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('user/addOrEdit', {viewTitle: 'Add/Edit User'});
});

module.exports = router;
