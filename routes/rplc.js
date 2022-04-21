var express = require('express');
var cors=require("cors");
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var mysqli = require('mysqli'); 
var db=require('../databse');
var app = express();
//var check = require('express-validator')(alidationResult);
var hash = require('pbkdf2-password')()
var path = require('path');
var session = require('express-session');
var cons=require('../constants');
var ezp=require('../constants');
const { check, validationResult } = require('express-validator');
const json = require('body-parser/lib/types/json');
//const json = require('body-parser/lib/types/json');
var urlencodedparser = bodyparser.urlencoded({  extended: false});
var MySQLStore = require('express-mysql-session')(session);
var urlencodedparser = bodyparser.urlencoded({  extended: false});
var fs = require('fs');
var schemaFilePath = path.join(__dirname, 'schema.sql');
var app = express();
var fs = require('fs')
//app.use(bodyParser.urlencoded({ extended: false }));

router.use(express.json());

var sessionStore = new MySQLStore(cons.options);
  

/* GET users listing. */
router.get('/:bnk', function(req, res, next) {
  router.use(session({
    key: cons.ses.key,
    secret: cons.ses.secret,
    store: sessionStore,
    resave: cons.ses.resave,
    saveUninitialized: cons.ses.saveUninitialized
  }));
  var bnk =req.params.bnk;
  var sess = req.session;
  req.session.bnk = bnk;
  if (bnk==='ab') {
    var msg = 'Switched to Abysinian theme!';
  } else if (bnk==='com') {
    var msg = 'Switched to CBE theme!';
  } else if (bnk==='nb') {
    var msg = 'Switched to NIB theme!';
  } else if (bnk==='dash') {
    var msg = 'Switched to Dashen bank theme!';
  }

  
  if (ezp.bnk==='ab') {
   
   
    fs.readFile('./constants.js', 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      var result = data.replace(/ab/g, bnk);
    
      fs.writeFile('./constants.js', result, 'utf8', function (err) {
        if (!err) {
          res.send(msg);} else {res.send(err);}
      });
    });

  } else if (ezp.bnk==='com'){
    fs.readFile('./constants.js', 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      var result = data.replace(/com/g, bnk);
    
      fs.writeFile('./constants.js', result, 'utf8', function (err) {
         if (!err) {
         res.send(msg);} else {res.send(err);}
      });
    });
  } else if (ezp.bnk==='nb'){
    replace({
      regex: "nb",
      replacement: bnk,
      paths: ['../constants'],
      recursive: true,
      silent: true,
  });
  } else if (ezp.bnk==='dash'){
    replace({
      regex: "dash",
      replacement: bnk,
      paths: ['../constants'],
      recursive: true,
      silent: true,
  });
  }

  

  
});

module.exports = router;
