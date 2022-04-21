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

router.get('/:prd', function(req, res, next) {
 var sess=req.session;
 var prd = req.params.prd;
  var inv = 'inv'+sess.logid;
  if (req.session.isvalid = true) {
  var sqla = 'SELECT * FROM ?? WHERE ?? = ? ';      //Get buyer name & id 
  var param = [
    
    inv,
    'prd',
    prd,
    
  ];
  
          db.query(sqla, param, function (err, btdt, fields) {
            if(!err==true){
              //throw err
              try {
               var fnm;
                var opt = btdt[0].optnz;
                opt = JSON.parse(opt);
                
                
            } catch (err) {
               
                console.log(err); 
                //req.session.phnt = false;
                 // res.json({msg:'error'})
                  res.redirect('/');
                 // res.end()
                
            }
              
            }
            //var optt = 'opt'+sess.logid;
  
 
  
  //var ddtt =opt[0].ddtt;
    // res.send(ddtt);
    if (ezp.bnk==='ab') {
      res.render('upin', { title: 'create button',ab:true,btdt:btdt[0], opt:opt,prd:prd }); 

    } else if(ezp.bnk==='com') {
      res.render('upin', { title: 'create button',com:true,btdt:btdt[0], opt:opt,prd:prd }); 

    }else if(ezp.bnk==='nb') {
      res.render('upin', { title: 'create button',nb:true,btdt:btdt[0], opt:opt,prd:prd }); 

    }else if(ezp.bnk==='dash') {
      res.render('upin', { title: 'create button',dash:true,btdt:btdt[0], opt:opt,prd:prd }); 

    }
      })
      } else{//res.redirect('/').end();
      }
    
});
router.get('/upim/:prd', function(req, res, next) {
  var sess=req.session;
  var prd = req.params.prd;
   var inv = 'inv'+sess.logid;
   if (req.session.isvalid = true) {
   var sqla = 'SELECT * FROM ?? WHERE ?? = ? ';      //Get buyer name & id 
   var param = [
     
     inv,
     'prd',
     prd,
     
   ];
   
           db.query(sqla, param, function (err, btdt, fields) {
             if(!err==true){
               //throw err
               try {
                var fnm;
                 var opt = btdt[0].optnz;
                 opt = JSON.parse(opt);
                 
                 
             } catch (err) {
                
                 console.log(err); 
                 //req.session.phnt = false;
                  // res.json({msg:'error'})
                   res.redirect('/');
                  // res.end()
                 
             }
               
             }
             //var optt = 'opt'+sess.logid;
   
  
   
   //var ddtt =opt[0].ddtt;
     // res.send(ddtt);
     if (ezp.bnk==='ab') {
       res.render('upin', { title: 'create button',ab:true,btdt:btdt[0], opt:opt,prd:prd }); 
 
     } else if(ezp.bnk==='com') {
       res.render('upin', { title: 'create button',com:true,btdt:btdt[0], opt:opt,prd:prd }); 
 
     }else if(ezp.bnk==='nb') {
       res.render('upin', { title: 'create button',nb:true,btdt:btdt[0], opt:opt,prd:prd }); 
 
     }else if(ezp.bnk==='dash') {
       res.render('upin', { title: 'create button',dash:true,btdt:btdt[0], opt:opt,prd:prd }); 
 
     }
       })
       } else{//res.redirect('/').end();
       }
     
 });
 router.get('/im/:prd', function(req, res, next) {
  var sess=req.session;
  var prd = req.params.prd;
   var inv = 'inv'+sess.logid;
   if (req.session.isvalid = true) {
   var sqla = 'SELECT * FROM ?? WHERE ?? = ? ';      //Get buyer name & id 
   var param = [
     
     inv,
     'prd',
     prd,
     
   ];
   
           db.query(sqla, param, function (err, btdt, fields) {
             if(!err==true){
               //throw err
               try {
                var fnm;
                 var opt = btdt[0].optnz;
                 opt = JSON.parse(opt);
                 
                 
             } catch (err) {
                
                 console.log(err); 
                 //req.session.phnt = false;
                  // res.json({msg:'error'})
                   res.redirect('/');
                  // res.end()
                 
             }
               
             }
             //var optt = 'opt'+sess.logid;
   
  
   
   //var ddtt =opt[0].ddtt;
     // res.send(ddtt);
     if (ezp.bnk==='ab') {
       res.render('upim', { title: 'Update-image',ab:true,btdt:btdt[0], opt:opt,prd:prd }); 
 
     } else if(ezp.bnk==='com') {
       res.render('upim', { title: 'create button',com:true,btdt:btdt[0], opt:opt,prd:prd }); 
 
     }else if(ezp.bnk==='nb') {
       res.render('upim', { title: 'create button',nb:true,btdt:btdt[0], opt:opt,prd:prd }); 
 
     }else if(ezp.bnk==='dash') {
       res.render('upim', { title: 'create button',dash:true,btdt:btdt[0], opt:opt,prd:prd }); 
 
     }
       })
       } else{//res.redirect('/').end();
       }
     
 });

router.get('/img/:primd', function(req, res, next) {
  var sess=req.session;
  var primd = req.params.primd;
   var inv = 'inv'+sess.logid;
   if (req.session.isvalid = true) {
   var sqla = 'SELECT * FROM ?? WHERE ?? = ? ';      //Get buyer name & id 
   var param = [
     
     inv,
     'prd',
     primd,
     
   ];
   
           db.query(sqla, param, function (err, btdt, fields) {
             if(!err==true){
               //throw err
               try {
                var fnm;
                 var opt = btdt[0].optnz;
                 opt = JSON.parse(opt);
                 
                 
             } catch (err) {
                
                 console.log(err); 
                 //req.session.phnt = false;
                  // res.json({msg:'error'})
                   res.redirect('/');
                  // res.end()
                 
             }
               
             }
             //var optt = 'opt'+sess.logid;
   
  
   
   //var ddtt =opt[0].ddtt;
     // res.send(ddtt);
      res.render('imgup', { title: 'create button',btdt:btdt[0], opt:opt,prd:primd }); 
       })
       } else{//res.redirect('/').end();
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

