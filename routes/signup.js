var express = require('express');
var app = express();
var session = require('express-session');
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var db=require('../databse');
var ezp = require('../constants');

var usi ='5';

router.get('/', function(req, res, next) {
	var cid = req.session.usrid;


    var sql='SELECT * FROM customer where cust_id=5 ';
    var sql2='SELECT * FROM passbook5 where trans_id=25 ';
    var sql3='SELECT * FROM orde5 where tba=426 ';
    
    db.query(sql, function (err, data, fields) {
    	db.query(sql2, function (err, dat, fields) {
    		db.query(sql3, function (err, da, fields) {
    if (err) throw err;

   //res.send(cid);
   if (ezp.bnk==='ab') {
    res.render('sign-up', { title: 'User List',ab:true, userData: data[0], passData: dat[0], orderData: da[0]});
   } else if (ezp.bnk==='com') {
    res.render('sign-up', { title: 'User List',com:true, userData: data[0], passData: dat[0], orderData: da[0]});

   } else if (ezp.bnk==='nb'){
    res.render('sign-up', { title: 'User List',nb:true, userData: data[0], passData: dat[0], orderData: da[0]});

   }

   
  }); 
        
});

});
    });
router.get('/merchant', function(req, res, next) {
  var cid = req.session.usrid;


    var sql='SELECT * FROM customer where cust_id=5 ';
    var sql2='SELECT * FROM passbook5 where trans_id=25 ';
    var sql3='SELECT * FROM orde5 where tba=426 ';
    
    db.query(sql, function (err, data, fields) {
      db.query(sql2, function (err, dat, fields) {
        db.query(sql3, function (err, da, fields) {
    if (err) throw err;

   //res.send(cid);

   res.render('msignup', { title: 'User List', userData: data[0], passData: dat[0], orderData: da[0]});
  }); 
        
});

});
    });
  

  
/* GET home page. */



module.exports = router;

