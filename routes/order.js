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

router.use(express.json());

var sessionStore = new MySQLStore(cons.options);
  router.use(session({
    key: cons.ses.key,
    secret: cons.ses.secret,
    store: sessionStore,
    resave: cons.ses.resave,
    saveUninitialized: cons.ses.saveUninitialized
  }));
var usi ='5';

router.get('/:tid', function(req, res, next) {
  var sess = req.session;
	var t_id = req.params.tid;
  var pa6 = 'orde'+ sess.logid;
    var sql='SELECT * FROM ?? WHERE ?? = ? ';
    var par = [             
             pa6,
             'tba',
             t_id
          ]; 
    
    db.query(sql,par, function (err, data, fields) {
    	
    if (err) throw err;
    var home = 'Order';
  var title ='Order';
  if(sess.pp==='1'){
    var ppt ='pp'
  } else if (sess.pp==='0'){
   var ppt='lela'
   if(sess.gen==='male'){
    var gent='m';
  } else if(sess.gen==='female'){
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
  res.render(home, {byphn:ezp.byphn[sess.ln],byEml:ezp.byEml[sess.ln],tran:ezp.transactions[sess.ln],sndm:ezp.sndm[sess.ln],bynthr:ezp.bynthr[sess.ln],[sess.ln]:true,
    title: title,[ezp.bnk]:true, [pp]:true, [ppt]:true, p:'00',[bnz]:true,[gent]:true,bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],
    withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],
  invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln],data:data });

   
    	

  // res.send(t_id);
  }); 
        
});


   

  
/* GET home page. */



module.exports = router;

