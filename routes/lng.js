var express = require('express');
var cors=require("cors");
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var mysqli = require('mysqli'); 
var db=require('../databse');
var app = express();
var cons =require('../constants');
//var check = require('express-validator')(alidationResult);
var hash = require('pbkdf2-password')()
var path = require('path');
var session = require('express-session');
const { check, validationResult } = require('express-validator');
const json = require('body-parser/lib/types/json');
//const json = require('body-parser/lib/types/json');
var urlencodedparser = bodyparser.urlencoded({  extended: false});
var MySQLStore = require('express-mysql-session')(session);
var urlencodedparser = bodyparser.urlencoded({  extended: false});
var fs = require('fs');
var schemaFilePath = path.join(__dirname, 'schema.sql');
var app = express();
router.use(express.json());
router.use(bodyparser.json());

var sessionStore = new MySQLStore(cons.options);
  router.use(session({
    key: cons.ses.key,
    secret: cons.ses.secret,
    store: sessionStore,
    resave: cons.ses.resave,
    saveUninitialized: cons.ses.saveUninitialized
  }));



/* GET home page. */
var sess;
router.get('/', function(req, res, next) {
sess= req.session;
lng='am';
sess.lng= lng;
var sql = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';

		var params = [
			'customer',
			'lng',
			lng,
			'cust_id',
			sess.logid
		];

		db.query(sql, params, function(error) {
	if (!error) {
        
        res.redirect('dashboard');
      } else {

      	 res.render('/');
      }
 
});

});

module.exports = router;

