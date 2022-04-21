var express = require('express');
var session = require('express-session');
var cons=require('../constants');
var ezp=require('../constants');
var MySQLStore = require('express-mysql-session')(session);
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var db=require('../databse');
var $           = require('jquery');
var ajax           = require('ajax');  

var app = express();

var usi ='5';

app.get('/', function(req, res, next) {
    var sess = req.session;
    if (req.session.isvalid == true) {

    } else {
      
        res.redirect('/')
        res.end();}
        var sessionStore = new MySQLStore(cons.options);
        router.use(session({
          key: cons.ses.key,
          secret: cons.ses.secret,
          store: sessionStore,
          resave: cons.ses.resave,
          saveUninitialized: cons.ses.saveUninitialized
        }));
      
        
      
        var pa6= 'passbook'+req.session.logid;
    
      
    db.query('SELECT * FROM ?? ORDER BY `trans_id` ASC ', [pa6], function (err, data, fields) {
	
    //var sql='SELECT balance FROM passbook7 ';
    var da = [];
    
    
    	
    if (err) throw err;

    


        
       


        
       //for (var i = 0; i < 12; i++)
           //da.push((data[i].balance) );
    	

  //res.render('analytics', { title: 'User List', userData: data });
 //res.send({data});
 res.json(data);  
  }); 
        
});


   




  
  
/* GET home page. */



module.exports = app;

