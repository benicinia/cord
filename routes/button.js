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

var sessionStore = new MySQLStore(cons.options);
  router.use(session({
    key: cons.ses.key,
    secret: cons.ses.secret,
    store: sessionStore,
    resave: cons.ses.resave,
    saveUninitialized: cons.ses.saveUninitialized
  }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('button2', { title: 'send money' });
  if (req.session.isvalid != true) {
        //sessionStore.close();
        res.redirect('/').end();
      }
});
router.get('/cbtn', function(req, res, next) {
 var sess=req.session;
  var inv = 'inv'+sess.logid;
  if (req.session.isvalid = true) {
  var sqla = 'SELECT * FROM ?? ';      //Get buyer name & id 
  var param = [
    
    inv,
    
  ];
     
          db.query(sqla, param, function (err, btdt, fields) {
  var opt = {"colors":{"opt1":'black',"opt2":'white',"opt3":'gray'}};
  //var op = JSON.parse(btdt[0].optnz);
        //sessionStore.close();
       //res.send(opt)
       
        res.render('button3', { title: 'create button',btdt:btdt[0], opt:opt }); 
      })
      } else{res.redirect('/').end();}

});

router.post('/dspb', function(req, res, next) {
  var sess = req.session;
  var map=req.body;
  var prnm = map.product_name;
  var price = map.item_price;
  var quantity = map.item_Quantity;
  var wei = map.weight;
  var itno =map.selectedDropDown;
  var prd = map.prd;
  var oo=[];
  var inv = 'inv'+req.session.logid;
  var sqla = 'SELECT * FROM ?? WHERE ?? = ? ';      //Get buyer name & id 
  var param = [
    
    inv,
    'prd',
    prd,
    
  ];
  
          db.query(sqla, param, function (err, btdt, fields) {
            if(!err)
            //var optt = 'opt'+sess.logid;
  var oo = btdt[0].optnz;
 
  oo = JSON.parse(oo);
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
  } if(sess.pp==='1'){
    var ppt ='pp'
  } else if (sess.pp==='0'){
   var ppt='lela';}
  var home='btndsp';
    var title ='Render button'; var tyEr;
       tyEr ={nm:prnm, pr:price,qu:quantity,oo:oo,bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],
                invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],ana:ezp.ana[sess.ln],
                shpk:ezp.shpk[sess.ln],infb:ezp.infb[sess.ln],inlrt:ezp.invlrt[sess.ln],or:ezp.orders[sess.ln],
                task:ezp.task[sess.ln],tran:ezp.transactions[sess.ln],[sess.ln]:true,[bnz]:true, 
               [ppt]:true, [gent]:true,
                title: title,[ezp.bnk]:true,}
               res.render(home, tyEr);
  //res.render('btndsp', { title: 'Render button' , nm:prnm, pr:price,qu:quantity,oo:oo});
          })
  if (req.session.isvalid != true) {
        //sessionStore.close();
        res.redirect('/').end();
      }
});
router.get('/err', function(req, res, next) {
  var sess = req.session;
  //sess.payn = JSON.parse(sess.payn);
  //next();
res.render('send',{errs:sess.errs})
//res.send(sess.errs);
})
module.exports = router;

