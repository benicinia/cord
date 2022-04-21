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


/* GET home page. */
var sess;
router.get('/:tok', function(req, res, next) {
sess= req.session;
var tok =req.params.tok
	if (!sess.isvalid) {
        
       res.redirect('../token/token');
        //res.send(tok)
      } else {

      	 res.render('index', { title: 'Express' });
      }
 
});

  
router.get('/token', function(req, res, next) {
     
        
            
        
      sess= req.session;
      var t ='hHPyKVQ';

      sess.t=t;
     
            if (t !== null) {
              
              
              res.status(302)
            } else {
      
                   res.render('secure1', { title: 'Express' });
            }
      });
     

router.get('/rr', function(req, res, next) {
      
      sess= req.session;
      var t = JSON.parse(sess.t);
//tok = JSON.stringify(tok)
var pt = 'dclinks';
var sqly = 'SELECT ?? AS lnm ?? as l_opt FROM ?? WHERE ? =? '; //GET merchant balance

var para = [             
  'lnm',
  'l_opt',
  pt,
  'linc',
  t
];


  
db.query(sqly, para, function(err,lnk) {
      if(!err==true){
            //throw err
            
             
              var usid=lnk[0].l_opt;
              var lnknm= lnk[0].lnm;
              var pid= lnk[0].pid;
              var inv ='inv'+usid;
              var sqlx = 'SELECT * FROM ?? WHERE ?? = ?';         //Get merchant name
              var paramt = [
                inv,
                'pid',
                pid,
              ];
              db.query(sqlx, paramt, function (err, resul, fields) {

//res.render('secure1')
                  if(!err){
                        //throw err
                        
                          var typ =resul[0].typ;
                          var prn =resul[0].pr_nm;
                          var opt =[{"nm":"Option 1","pr":"45","index":1},{"nm":"Option 2","pr":"45","index":2},{"nm":"Option 3","pr":"45","index":3}];
                          var pr =resul[0].prc;    
                         //res.send(opt)
                          res.render('secure1',{opt:opt,pr:pr,prn:prn,typ:typ})
                     
                         
                          console.log(err); 
                          //req.session.phnt = false;
                            res.json({msg:'error'})
                           // res.end()
                          
                      
                        
                      }  else{console.log(err); 
                        //req.session.phnt = false;
                          res.json({msg:'error'})
                         // res.end()
                        }


              })
         
             
              
          
            
          }
      })
      });

router.get('/pricing', function(req, res, next) {
  sess= req.session;
   
        res.render('pricing', { title: 'pricing' });
  });
  router.get('/developers', function(req, res, next) {
      sess= req.session;
       
            res.render('developers', { title: 'developers' });
      });
  router.get('/store', function(req, res, next) {
    sess= req.session;
     
          res.render('shopingo4', { title: 'pricing' });
    });
    router.get('/admin', function(req, res, next) {
      sess= req.session;
       
            res.render('admin', { title: 'admin-login' });
      });

module.exports = router;

