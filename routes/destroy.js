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
const { check, validationResult } = require('express-validator');

var MySQLStore = require('express-mysql-session')(session);

var app = module.exports = express();

//router.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
router.use(bodyparser.json());


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




var sess;
router.post('/', function(req, res, next) {
 
sess = req.session;
sess.isvalid = false;
  var map=req.body;
  var email = map.email;
  var pass = map.password;
  
  //var sess=req.session;
   

  var phg;
  var cid;



  



  

  
  var or= 'sstble';
  var ssid
   ssid = sess.id
//db.query('SELECT * FROM ?? ORDER BY `or_id` DESC ', [or], function (err, da, fields) {
    
    

    var coln;
    var scln;
    var coln_v;
 coln = 'status';
 scln = 'session_id';
coln_v = '0';
		// LIMIT not needed here because the WHERE clause is searching by the table's primary key.
		var sql = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
      var params = [
        or,
        coln,
        coln_v,
        scln,
        ssid
      ];

		db.query(sql, params, function(error) {

			if (error) {
				debug.error('Failed to log out (' + ssid + ')');
				debug.error(error);
				
			} else {
        sess.isvalid = false;
        sessionStore.close();
        MySQLStore.destroy();
        res.redirect('/');}

		

	
    
    	
    		
    if (err) throw err;

   //res.send(cid);

   //
 
   var sessionStore = new MySQLStore(cons.options);
   router.use(session({
     key: cons.ses.key,
     secret: cons.ses.secret,
     store: sessionStore,
     resave: cons.ses.resave,
     saveUninitialized: cons.ses.saveUninitialized
   }));


var sessionConnection = mysql.createConnection(cons.options);
//var sessionStore = new MySQLStore(options);


var sessionStore = new MySQLStore({
    expiration: 10800000,
    usrid: cid,
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



    

    //res.render('cards', { req.session.id });
    
      }); 
        





});



 




module.exports = router;

