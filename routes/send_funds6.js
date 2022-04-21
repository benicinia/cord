var express = require('express');

var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var db=require('../databse');
var app = express();
app.use(express.json());
app.use(bodyparser.json());
app.get('/send_funds_actionx/:submit_val', function (req, res, next) {
  console.log('ID:', req.params.submit_val)
  next()
}, function (req, res, next) {
  res.send('User Info')
})

// handler for the /user/:id path, which prints the user ID
app.get('/send_funds_actionx/:submit_val', function (req, res, next) {
  res.send(req.params.submit_val)
})


/* GET home page. */



module.exports = router;

