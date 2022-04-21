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

router.use(express.json());


/* GET home page. */
var sess;
router.get('/', function(req, res, next) {
sess= req.session;
var surl=ezp.surl;
	
        
            if (ezp.bnk==='ab') {
                  res.render('404', { title: 'Express',surl:surl,ab:true });
            } else if (ezp.bnk==='com') {
                  res.render('404', { title: 'Express',surl:surl,com:true });
            } else if (ezp.bnk==='nb') {
                  res.render('404', { title: 'Express',surl:surl,nb:true });
            
            }
      

      	
      
 
});

  





  

router.get('/pricing', function(req, res, next) {
  sess= req.session;
  if (ezp.bnk==='ab') {
      res.render('pricing', { title: 'Express',ab:true });
} else if (ezp.bnk==='com') {
      res.render('pricing', { title: 'Express',com:true });
} else if (ezp.bnk==='nb') {
      res.render('pricing', { title: 'Express',nb:true });

}
       
  });
  router.get('/developers', function(req, res, next) {
      sess= req.session;
      if (ezp.bnk==='ab') {
            res.render('developers', { title: 'Express',ab:true });
      } else if (ezp.bnk==='com') {
            res.render('developers', { title: 'Express',com:true });
      } else if (ezp.bnk==='nb') {
            res.render('developers', { title: 'Express',nb:true });
      
      }
            
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

