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
var ezp = require('../constants');
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



var sessionStore = new MySQLStore(ezp.options);

  router.use(session({
    key: ezp.ses.key,
    secret: ezp.ses.secret,
    store: sessionStore,
    resave: ezp.ses.resave,
    saveUninitialized: ezp.ses.saveUninitialized
  }));

/* GET home page. */
router.get('/pall', function(req, res) {
  var sess= req.session;
  var home = 'landx';
  var title ='Payroll';
  if(sess.pp==='1'){
    var ppt ='pp'
    var ppf='ppf'
  } else if (sess.pp==='0'){
   var ppt='lela';
    var ppf='nopp'
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
  } 
  if (!sess.pp) {
    var pp='lst';
  } else if(sess.pp.length>0)
  {var pp =sess.pp} 
  res.render(home, {[ppf]:sess.pmg,pyr:true,byphn:ezp.byphn[sess.ln],byEml:ezp.byEml[sess.ln],tran:ezp.transactions[sess.ln],sndm:ezp.sndm[sess.ln],bynthr:ezp.bynthr[sess.ln],[sess.ln]:true,
    title: title,[ezp.bnk]:true, [pp]:true, [ppt]:true, p:'00',[bnz]:true,[gent]:true,bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],
    withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],
  invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln] });



//var usrnv= [{sndm:ezp.sndm[sess.ln],tran:ezp.transactions[sess.ln],bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln]}]

  
 
  if (req.session.isvalid != true) {
        //sessionStore.close();
        res.redirect('/').end();
      }
});
router.get('/psng/:id', function(req, res) {
  var idd = req.params.id
  var sess= req.session;
  var home = 'landx';
  var title ='Payroll';
  if(sess.pp==='1'){
    var ppt ='pp'
    var ppf='ppf'
  } else if (sess.pp==='0'){
   var ppt='lela';
    var ppf='nopp'
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
  } 
  if (!sess.pp) {
    var pp='lst';
  } else if(sess.pp.length>0)
  {var pp =sess.pp} 
  res.render(home, {eid:idd,[ppf]:sess.pmg,pyr:true,byphn:ezp.byphn[sess.ln],byEml:ezp.byEml[sess.ln],tran:ezp.transactions[sess.ln],sndm:ezp.sndm[sess.ln],bynthr:ezp.bynthr[sess.ln],[sess.ln]:true,
    title: title,[ezp.bnk]:true, [pp]:true, [ppt]:true, p:'00',[bnz]:true,[gent]:true,bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],
    withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],
  invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln] });



//var usrnv= [{sndm:ezp.sndm[sess.ln],tran:ezp.transactions[sess.ln],bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln]}]

  
 
  if (req.session.isvalid != true) {
        //sessionStore.close();
        res.redirect('/').end();
      }
});
router.get('/', function(req, res, next) {
  var sess= req.session;
  var home = 'pyr';
  var title ='Payroll';
  if(sess.pp==='1'){
    var ppt ='pp'
    var ppf='ppf'
  } else if (sess.pp==='0'){
   var ppt='lela';
    var ppf='nopp'
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
  } 
  if (!sess.pp) {
    var pp='lst';
  } else if(sess.pp.length>0)
  {var pp =sess.pp} 
  res.render(home, {[ppf]:sess.pmg,byphn:ezp.byphn[sess.ln],byEml:ezp.byEml[sess.ln],tran:ezp.transactions[sess.ln],sndm:ezp.sndm[sess.ln],bynthr:ezp.bynthr[sess.ln],[sess.ln]:true,
    title: title,[ezp.bnk]:true, [pp]:true, [ppt]:true, p:'00',[bnz]:true,[gent]:true,bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],
    withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],
  invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln] });



//var usrnv= [{sndm:ezp.sndm[sess.ln],tran:ezp.transactions[sess.ln],bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln]}]

  
 
  if (req.session.isvalid != true) {
        //sessionStore.close();
        res.redirect('/').end();
      }
});

router.get('/am', function(req, res, next) {
  res.render('send-am', { title: 'send money' });
  if (req.session.isvalid != true) {
        //sessionStore.close();
        res.redirect('/').end();
      }
});
router.get('/err', function(req, res, next) {
  var sess = req.session;
  //sess.payn = JSON.parse(sess.payn);
  //next();
if(sess.bz == true){
if (ezp.bnk==='ab') {
  res.render('send', { title: 'send money',bz:true,ab:true,errs:sess.errs });
} else if(ezp.bnk==='com') {
  res.render('send', { title: 'send money',bz:true,com:true,errs:sess.errs });
}} else if (sess.usr == true){

  if (ezp.bnk==='ab') {
    res.render('send', { title: 'send money',usr:true,ab:true,errs:sess.errs });
  } else if(ezp.bnk==='com') {
    res.render('send', { title: 'send money',usr:true,com:true,errs:sess.errs });
  }
}
//res.send(sess.errs);
})
module.exports = router;

