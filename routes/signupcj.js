
var express = require('express');
var cors=require("cors");
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var mysqli = require('mysqli'); 
var db=require('../databse');
var session = require('express-session');
var ezp =require('../constants');
var MySQLStore = require('express-mysql-session')(session);
var app = express();
var hash = require('pbkdf2-password')()
var path = require('path');
const { check, validationResult } = require('express-validator');

app.use(express.json());
router.use(bodyparser.json());

var sessionStore = new MySQLStore(ezp.options);
  router.use(session({
    key: ezp.ses.key,
    secret: ezp.ses.secret,
    store: sessionStore,
    resave: ezp.ses.resave,
    saveUninitialized: ezp.ses.saveUninitialized
  }));


var sess;
router.post('/signupcj/login', function(req, res, next) {
 
sess = req.session;
sess.isvalid = false;
  var map=req.body;
  var email = map.email;
  var pass = map.password;
  //var sess=req.session;
   

  var phg;
  var cid;
 var sql=db.query('SELECT * FROM customer WHERE email = ?', [email], function (err, data, fields) {
  
  console.log(sql);
 cid =data[0].cust_id;
  var passw =data[0].pwd;
  phg =data[0].gender; // get recievr id

   if (pass === passw ) {
sess.isvalid = true;
sess.logid = JSON.parse(cid);
//app.set('sesslogId', sess.logid);



var MySQLStore = require('express-mysql-session')(session);


var sessionConnection = mysql.createConnection(ezp.options);
//var sessionStore = new MySQLStore(options);


var sessionStore = new MySQLStore({
    expiration: 10800000,
    //usrid: cid,
    createDatabaseTable: true,  //Whether to create a table
    schema: {
        tableName: 'sstbl',   //Table Name
        columnNames: {      //Column Options
            ss_id: 'ss_id',
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
}, sessionConnection); 
sessionStore.close();

      res.render('cards', { usrid: cid});
      
    
    } else { 
       
      res.redirect('/');  

    }
      //res.send(cid);
 });

});






router.post('/signupcj/signup',

    [
        
        check('fname')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('mail', 'Email is required')
        .isEmail()
        .withMessage({nemsg: 'Not an email' }),
        
        check('password', 'Password is requried')
        
            .isLength({ min: 1 }),

            check('pwd2', 'Password is requried')
            .isLength({ min: 5 })
            .custom((val, { req, loc, path }) => {
                if (val !== req.body.password) {
                    throw new ErrorError( pmsg='Passwords do not match!');
                } else {
                    return value;
                }
            }),
            
    ],
       
            (req, res) => {
                
            
        var errors = validationResult(req).array(); 
        if (errors) {
            req.session.errors = errors;
            req.session.success = false;
            res.redirect('/signup');
        } else {
            req.session.success = true;
            res.redirect('/');
        }

   
    });

router.get('/', function (req, res) {
    res.render('user', {
        success: req.session.success,
        errors: req.session.errors
    });
    req.session.errors = null;
});


module.exports = router;