var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addfund', { title: 'send money' });
});



module.exports = router;

