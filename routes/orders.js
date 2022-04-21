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
var cons =require('../constants');
var ezp =require('../constants');
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


router.get('/', function(req, res, next) {
  sess= req.session;
	if (!sess.isvalid) {
        
        res.redirect('/');
      } 
  
      var sessionStore = new MySQLStore(cons.options);
      router.use(session({
        key: cons.ses.key,
        secret: cons.ses.secret,
        store: sessionStore,
        resave: cons.ses.resave,
        saveUninitialized: cons.ses.saveUninitialized
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
      var home = 'Transactions';
  var title ='Transactions';
  if(sess.pp==='1'){
    var ppt ='pp'
    var ppf ='ppf'
  } else if (pp==='0'){
   var ppt='lela'
   var ppf ='nopp'
   if(gen==='male'){
    var gent='m';
  } else if(gen==='female'){
    var gent='g';
  }
  }
  if (sess.bz==true) {
    var bnz='bz';
  } if (sess.usr==true){
    var bnz='usr'
  } if (!sess.pp) {
    var pp='lst';
  } else if(sess.pp.length>0)
  {var pp =sess.pp} 
  var cmg = sess.cmgb;
  if (cmg === '0') {
    var cmgt ='nmsg';
  } else if (cmg >'0'){
    
    var cmgt ='cmg';
  }
  res.render(home, {[cmgt]:sess.cmgb,[ppf]:sess.pmg,byphn:ezp.byphn[sess.ln],byEml:ezp.byEml[sess.ln],tran:ezp.transactions[sess.ln],sndm:ezp.sndm[sess.ln],bynthr:ezp.bynthr[sess.ln],[sess.ln]:true,
    title: title,[ezp.bnk]:true, [pp]:true, [ppt]:true, p:'00',[bnz]:true,bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],
    withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],
  invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln],data: data, });
//res.send(data);



  
  }); 
        
});
});
router.get('/new', function(req, res, next) {
  sess= req.session;
	if (!sess.isvalid) {
        
        res.redirect('/');
      } 
  
      var sessionStore = new MySQLStore(cons.options);
      router.use(session({
        key: cons.ses.key,
        secret: cons.ses.secret,
        store: sessionStore,
        resave: cons.ses.resave,
        saveUninitialized: cons.ses.saveUninitialized
      }));
  
  if (sess.isvalid) {
    //sessionStore.close();
 
    
	var pa6= 'orde'+req.session.logid;
var dat = [];
  
db.query('SELECT * FROM ?? WHERE `snn` = ? ', [pa6,'0'], function (err, data, fields) {
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
if (ezp.bnk==='com') {
  res.render('transactionn', {title:'Orders',data: data, lng: lng,com:true});
} else if(ezp.bnk ==='ab') {
  
}
  res.render('transactionn', {title:'Orders',data: data, lng: lng,ab:true});
  
  }); 
        
}); } else {res.redirect('/');}
});
router.get('/am', function(req, res, next) {
  sess= req.session;
	if (!sess.isvalid) {
        
        res.redirect('/');
      } 
  
      var sessionStore = new MySQLStore(cons.options);
      router.use(session({
        key: cons.ses.key,
        secret: cons.ses.secret,
        store: sessionStore,
        resave: cons.ses.resave,
        saveUninitialized: cons.ses.saveUninitialized
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

