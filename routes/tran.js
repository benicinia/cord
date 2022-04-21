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

//app.use(bodyParser.urlencoded({ extended: false }));

router.use(express.json());


router.get('/:id', function(req, res, next) {
 
  var cuid=req.params.id;
  
    
	var pa6= 'passbook'+cuid;
var dat = [];
  
db.query('SELECT * FROM ?? ORDER BY `trans_id` DESC ', [pa6], function (err, data, fields) {
    
    	
    if (err) throw err;

    
//res.send(data);
  res.render('transaction', {data: data});
  
  
        
});
});
router.get('/am', function(req, res, next) {
  sess= req.session;
	if (!sess.isvalid) {
        
        res.redirect('/');
      } 
  
      var sessionStore = new MySQLStore(ezp.options);
      router.use(session({
        key: ezp.ses.key,
        secret: ezp.ses.secret,
        store: sessionStore,
        resave: ezp.ses.resave,
        saveUninitialized: ezp.ses.saveUninitialized
      }));
  
  if (req.session.isvalid == true) {
    sessionStore.close();
  } else {res.redirect('/');}
    
	var pa6= 'passbook'+req.session.logid;
var dat = [];
  
db.query('SELECT * FROM ?? ORDER BY `trans_id` DESC ', [pa6], function (err, data, fields) {
    //var sql='SELECT * FROM passbook5 ';
    db.query('SELECT * FROM ?? where cust_id = ? ', ['customer', sess.logid], function (err, lg, fields) { 
    var lng = lg[0].lng;
   // db.query(sql, function (err, data, fields) {
    	
    if (err) throw err;

    //db.query(sql, function (err, data, fields) {
    	dat.push(data);
      lng = {
        lng
        
      }
//res.send(data);
  res.render('transactions-am', {data: data, lng: lng});
  
  }); 
        
});
});


   

  
/* GET home page. */



module.exports = router;

