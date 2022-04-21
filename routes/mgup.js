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

router.get('/:prd', function(req, res, next) {
 var sess=req.session;
 var prd = req.params.prd;
 sess.prd=prd;
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
  
 
            if(sess.pp==='1'){
              var ppt ='pp';
              var ppf='ppf'
            } else if (pp==='0'){
             var ppt='lela'
             var ppf='nopp'
             if(gen==='male'){
              var gent='m';
            } else if(gen==='female'){
              var gent='g';
            }
            }
            var home = 'upim';
          var title ='Upload-product-image';
  //var ddtt =opt[0].ddtt;
    // res.send(ddtt);
    if (sess.bz==true) {
      var bnz='bz';
    } if (sess.usr==true){
      var bnz='usr'
    } if (!pp) {
      var pp='lst';
    } else if(pp.length>0)
    {var pp =pp} var tyEr;
     //res.send(lan)
     tyEr ={[ppf]:sess.pmg,p:'0',bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],
      invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],ana:ezp.ana[sess.ln],
      shpk:ezp.shpk[sess.ln],infb:ezp.infb[sess.ln],inlrt:ezp.invlrt[sess.ln],or:ezp.orders[sess.ln],
      task:ezp.task[sess.ln],tran:ezp.transactions[sess.ln],[sess.ln]:true,[bnz]:true, 
      [ppt]:true, [gent]:true, 
      title: title,[ezp.bnk]:true,btdt:btdt[0], opt:opt,prd:prd}
     //res.send(opt)
   res.render(home, tyEr);
    
    
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
     if (ezp.bnk==='ab') {
      res.render('imgup', { title: 'Image-upload',ab:true,btdt:btdt[0], opt:opt,prd:primd }); 
    } else if(ezp.bnk==='com') {
      res.render('imgup', { title: 'Image-upload',com:true,btdt:btdt[0], opt:opt,prd:primd }); 
 
    }else if(ezp.bnk==='nb') {
      res.render('imgup', { title: 'Image-upload',nb:true,btdt:btdt[0], opt:opt,prd:primd }); 
 
    }else if(ezp.bnk==='dash') {
      res.render('imgup', { title: 'Image-upload',dash:true,btdt:btdt[0], opt:opt,prd:primd }); 
 
    }
       })
       } else{//res.redirect('/').end();
       }
     
 });

router.get('/err', function(req, res, next) {
  var sess = req.session;
  //sess.payn = JSON.parse(sess.payn);
  //next();
  if (ezp.bnk==='ab') {
    res.render('send',{ab:true,errs:sess.errs})  } else if(ezp.bnk==='com') {
      res.render('send',{com:true,errs:sess.errs})
  }else if(ezp.bnk==='nb') {
    res.render('send',{nb:true,errs:sess.errs})

  }else if(ezp.bnk==='dash') {
    res.render('send',{dash:true,errs:sess.errs})

  }
  
//res.send(sess.errs);
})
module.exports = router;

