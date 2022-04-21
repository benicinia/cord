var express = require('express');
var cors=require("cors");
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var mysqli = require('mysqli'); 
var db=require('../databse');
var app = express();
//var check = require('express-validator')(validationResult);
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

var app = express();

//app.use(bodyParser.urlencoded({ extended: false }));

router.use(express.json());
//router.use(bodyparser.json());


//app.use(session({secret: 'ssshhhhh'}));

var sessionStore = new MySQLStore(cons.options);
  router.use(session({
    key: cons.ses.key,
    secret: cons.ses.secret,
    store: sessionStore,
    resave: cons.ses.resave,
    saveUninitialized: cons.ses.saveUninitialized
  }));
// Configure mysql



//Configure session middleware
//Configuring Middleware







app.post('/',urlencodedparser, 

  

    [
     
        check('fname').not().isEmail().withMessage({
          emerr: 'letters only',
         
        }),
        //.withMessage('Name is required'),
        check('mail').isEmail().withMessage({
          emerr: 'Not an email',
         
        }),

        


        check('password')
    .not()
    .isIn(['123', 'password', 'god'])
    .withMessage({
      emerr: 'The password must be 5+ chars long and contain a number',
     
    })
    .isLength({ min: 5 })
    .matches(/\d/),
  
    
  
       

            check('password2')
           
            .custom((val, { req, loc, path }) => {
                if (val !== req.body.password) {
                  throw new Error('Passwords do not match!')
                    //throw new Error({pw2msg:'Passwords do not match!'});
                    
                } else {
                    return value;
                }
            }),
            check('pin', 'The pin must be 4 numbers long and contain only numbers')
            .not()
            .isIn(['123', 'password', 'god'])
            .withMessage({
              emerr: 'Do not use a common word as the password',
             
            })
            .isLength(4)
            .matches(/\d/),
            
            check('phon')
            .not()
            .isMobilePhone()
            .withMessage({
              emerr: 'Input a valid mobile phone number',
             
            })
            
            .matches(/\d/),
    ],
    
            (req, res) => {
             
              const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
                // Build your resulting errors however you want! String, object, whatever - it works!
                return `${location}[${param}]: ${msg}`;

            };  
        var errors = validationResult(req).formatWith(errorFormatter);
        
        
      
      var MySQLStore = require('express-mysql-session')(session);
      
      
      var sessionConnection = mysql.createConnection(cons.optionsoptions);
      //var sessionStore = new MySQLStore(options);
      
      
      var sessionStore = new MySQLStore({
          expiration: 10800000,
          createDatabaseTable: false,  //Whether to create a table
          schema: {
              tableName: 'sstbl',   //Table Name
              columnNames: {      //Column Options
                  ss_id: 'ss_id',
                  session_id: 'session_id',
                  expires: 'expires',
                  data: 'data',
                  //status: 'data'
              }
          }
      }, sessionConnection);
        if (!errors.isEmpty()) {
            req.session.errors = json(errors);
           req.session.success = false;
            //res.send(errors);
         
          //res.send(errors);
          
         res.render('sign-up', { success: req.session.success, errors: req.session.errors });
         //req.session.errors = null;
   //req.session.errors = null;
           // res.send(errors);
            
        } else {
            req.session.success = true;
            
            res.redirect('/');
            
        }

   
});    
 
// handler for the /user/:id path, which prints the user ID


/* GET home page. */



module.exports = app;