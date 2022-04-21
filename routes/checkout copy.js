var express = require('express');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var db=require('../databse');
var isArray = require('isArray');
var $ = require('jquery');
var ajax = require('ajax'); 
var redis = require('redis');
var session = require('express-session');
var cons = require('../constants');
var MySQLStore = require('express-mysql-session')(session);
var mysqli = require('mysqli'); 
var hbs = require('express-hbs');
var cors=require("cors");
var expressValidator = require('express-validator');
const json = require('body-parser/lib/types/json');
var app = express();
var urlencodedparser = bodyparser.urlencoded({  extended: false});
//const json = require('body-parser/lib/types/json');

router.use(express.json());
router.use(bodyparser.json());


var sessionConnection = mysql.createConnection(cons.options);
//var sessionStore = new MySQLStore(options);


var sessionStore = new MySQLStore({
    expiration: 10800000,
    //usrid: cid,
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

/* GET home page. */
router.post('/', function(req, res, next) {
  var sess= req.session;
  if (!sess.isvalid) {
    
  
	var dt = req.body.dt
  res.render('checkout', { title: 'Express', dt:dt });
} else {
  
  var payn = sess.payn;
var merchant =payn.phn;
  var sess= req.session;
  sess.merchant=merchant;
  var email = sess.email;
  var sql=db.query('SELECT * FROM customer WHERE email = ?', [email], function (err, data, fields) {
    var sql2=db.query('SELECT * FROM customer WHERE cust_id = ?', [merchant], function (err, dat, fields) {
    console.log(sql);
   //cid =data[0].cust_id;
    var passw =data[0].pwd;
    mnme =data[0].uname; // get recievr id
   
    pnh =data[0].phone_no;
    var snme =dat[0].uname;
    sess.snme=snme;
    var smail =dat[0].email;
    sess.smail=smail;
  sess.isvalid = true;
  var bnme= data[0].uname;
  sess.bnme= bnme;
  res.render('land', { title: 'checkout',snme:sess.snme, ph:sess.ph, nm:sess.nm, pnh:pnh, payn:sess.payn, bnme: sess.bnme});
});});
  
  
}
});



module.exports = router;

