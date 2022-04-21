var express = require('express');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var db = require('../databse');
var isArray = require('isArray');
var $ = require('jquery');
var ajax = require('ajax'); 
var redis = require('redis');
var session = require('express-session');
var ezp =require('../constants');
var MySQLStore = require('express-mysql-session')(session);
var mysql = require('mysql'); 
var hbs = require('express-hbs');
var cors=require("cors");
var expressValidator = require('express-validator');
const json = require('body-parser/lib/types/json');
var app = express();
var urlencodedparser = bodyparser.urlencoded({  extended: false});
//const json = require('body-parser/lib/types/json');

router.use(express.json());
router.use(bodyparser.json());
/* GET home page. */


var sessionConnection = mysql.createConnection(ezp.options);
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


router.post('/',urlencodedparser, function(req, res) {
  var sess;
  sess = req.session;
  if (!sess.isvalid) {
    
  
  
  var sessionStore = new MySQLStore(ezp.options);
  router.use(session({
    key: ezp.ses.key,
    secret: ezp.ses.secret,
    store: sessionStore,
    resave: ezp.ses.resave,
    saveUninitialized: ezp.ses.saveUninitialized
  }));
router.use(cors());
var data =[];
  var paym= [];
  var mapt = req.body;
  var itno = mapt.cart_quantity;
  var itnoo= itno^'1';
  var email = mapt.email;
  const amt = mapt.amount;
  var phn = mapt.phone_no;
  var bemail = mapt.vemail;
  
  for (var i=1; i <= `${itno}`; i++){
  //for(var i in map) 
        
  /*data.push(`${'item-'+i}:{${'name'}: ${mapt['item_name_'+i]},
  ${'quantity'}:${mapt['item_quantity_'+i]},
  ${'price'}:${mapt['item_price_'+i]},
  ${'os0'}:${mapt['os0_'+i]}}`); */
    //items.push(mapt.data[i] );
    data.push({
      "name":`${mapt['item_name_'+i]}`,
      "quant":`${mapt['item_quantity_'+i]}`,
      "price":`${mapt['item_price_'+i]}`,
      "os0":`${mapt['os0_'+i]}`,
    });
    var ssdt;
    ssdt = JSON.stringify(data);
    sess.dt = ssdt;
  }
  //items.push(map)
  var it =[];
  
  payn = {
    "itno":`${mapt['cart_quantity']}`,
    "phn": `${mapt['phone_no']}`,
    "email": `${mapt['vemail']}`,
    "amt": `${mapt['amount']}`,
  }
  btnd = {
    
    "typ": `${'w'}`,
  }
  sess.btnd = btnd;
  db.query('SELECT * FROM customer where cust_id= ? ', [payn.phn], function (err, d, fields) {
    sess.nm= d[0].bnme;
    sess.ph= d[0].phone_no;
  
  sess.payn = payn;
  var pay = paym;
  


var MySQLStore = require('express-mysql-session')(session);



//res.send(sess.payn);
res.render('secure', {payn: payn,data: data, dt:sess.dt});
});
} else {
  var data =[];
  var paym= [];
  var mapt = req.body;
  var itno = mapt.cart_quantity^'1';
  var email = mapt.email;
  const amt = mapt.amount;
  var phn = mapt.phone_no;
  
  for (var i=1; i < itno; i++){
  //for(var i in map) 
        
  /*data.push(`${'item-'+i}:{${'name'}: ${mapt['item_name_'+i]},
  ${'quantity'}:${mapt['item_quantity_'+i]},
  ${'price'}:${mapt['item_price_'+i]},
  ${'os0'}:${mapt['os0_'+i]}}`); */
    //items.push(mapt.data[i] );
    data.push({
      "name":`${mapt['item_name_'+i]}`,
      "quant":`${mapt['item_quantity_'+i]}`,
      "price":`${mapt['item_price_'+i]}`,
      "os0":`${mapt['os0_'+i]}`,
    });
    var ssdt;
    ssdt = JSON.stringify(data);
    sess.dt = ssdt;
  }
  //items.push(map)
  var it =[];
  
  payn = {
    "itno":`${mapt['cart_quantity']}`,
    "phn": `${mapt['phone_no']}`,
    "amt": `${mapt['amount']}`,
    "typ": `${'w'}`,
  }
  
  
  db.query('SELECT * FROM customer where cust_id= ? ', [payn.phn], function (err, d, fields) {
    sess.nm= d[0].bnme;
    sess.ph= d[0].phone_no;
  
  sess.payn = payn;
  
  var pay = paym;
  


//res.send(sess.payn);
res.render('secure', {payn: payn,data: data, dt:sess.dt});
});  
}
});


module.exports = router;

