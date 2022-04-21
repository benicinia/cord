var express = require('express');
var router = express.Router();



/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('sign-up', { title: 'Add bank account' });
});



module.exports = router;

