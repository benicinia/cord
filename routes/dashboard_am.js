var express = require('express');
var cors=require("cors");
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var mysqli = require('mysqli'); 
var db=require('../databse');
var cons =require('../constants');
var app = express();
//var check = require('express-validator')(alidationResult);
var hash = require('pbkdf2-password')()
var path = require('path');
var session = require('express-session');
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





router.get('/', function(req, res, next) {
  var sess =req.session;
    if (!sess.isvalid) {
        sessionStore.close();
        res.redirect('/');
      } 
      var sessionStore = new MySQLStore(cons.options);
      router.use(session({
        key: cons.ses.key,
        secret: cons.ses.secret,
        store: sessionStore,
        resave: cons.ses.resave,
        saveUninitialized: cons.ses.saveUninitialized
      }));
      
      
        
	
    //var sql='SELECT balance FROM passbook7 ';
    
    
    function number_format(number, decimals, dec_point, thousands_sep) {
      // *     example: number_format(1234.56, 2, ',', ' ');
      // *     return: '1 234,56'
      number = (number + '').replace(',', '').replace(' ', '');
      var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
          var k = Math.pow(10, prec);
          return '' + Math.round(n * k) / k;
        };
      // Fix for IE parseFloat(0.55).toFixed(0) = 0;
      s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
      if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
      }
      if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
      }
      return s.join(dec);
    }
    	
    
	
    
    var sql='SELECT * FROM customer where cust_id=5 ';
    var sql2='SELECT * FROM passbook5 where trans_id=25 ';
    var sql3='SELECT * FROM orde5 where tba=426 ';
    
    db.query('SELECT * FROM customer where email= ? ', [req.session.email], function (err, data, fields) {
    	var pa6= 'passbook'+req.session.logid;
    
      
    db.query('SELECT * FROM ?? ORDER BY `trans_id` DESC ', [pa6], function (err, dat, fields) {
        var por= 'orde'+req.session.logid;
        var bal = number_format(dat[0].balance);
      
        db.query('SELECT * FROM ?? ORDER BY `tba` DESC ', [por], function (err, da, fields) {
    if (err) throw err;

    

   res.render('cards-am', { title: 'User List',bal:bal, userData: data[0], passData: dat[0], orderData: da[0]});
  }); 
        
});

});
    });
  

  
/* GET home page. */



module.exports = router;

