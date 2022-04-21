var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var db=require('../databse');
const { parseUrl } = require('mysql/lib/ConnectionConfig');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var app = express();
app.use(express.json());
app.use(bodyparser.json());

router.post('/', function(req, res, next) {
  

var mapt=req.body;
var itno = mapt.cart_quantity;

  var data =[];
  var paym= []; 
  var email = mapt.email;
  const amt = mapt.amount;
  var phn = mapt.phone_no;

  payn = {
    "itno":`${JSON.parse(mapt['cart_quantity'])}`,
    "phn": `${mapt['phone_no']}`,
    "amt": `${mapt['amount']}`,
  }

  for (var i=1; i < itno; i++){
    
    data.push({
      "name":`${mapt['item_name_'+i]}`,
      "quant":`${mapt['item_quantity_'+i]}`,
      "price":`${mapt['item_price_'+i]}`,
      "os0":`${mapt['os0_'+i]}`,
    });
  }


  var sql=db.query('SELECT * FROM customer WHERE phone_no = ?', [phn], function (err, data, row) {
  if (err) throw err;
  console.log();
  
  var refi =data[0].cust_id; // get recievr id
  var uname =data[0].uname;
  if (db.query(sql, phn, function(error) {

    if (error) {
      throw error('network error 900');
   } else{

    var pa5= 'passbook'+refi;
    var transId = 25;
      var columns = ['balance', 'trans_id'];
    var sql1 = db.query('SELECT ?? FROM ?? ORDER BY `trans_id` DESC ', [columns, pa5], function (err, dat, row) { // reciever balance
      var refba =dat[0].balance; 
      session.req.refba = refba;
      refba = session.req.refba;
    })
  
  
  
  
  }}
  ));

  var bphn= '0925555845';

    


if (db.query('SELECT * FROM customer WHERE phone_no = ?', [bphn], function(err,dat,next) {

  if (err) {
    var err = ('network error 901');
 } else{
var bufi =dat[0].cust_id;
  var pa6= 'passbook'+bufi;
  var transId = 25;
    var columns = ['balance', 'trans_id'];
 
  
  
  }

  if (db.query('SELECT * FROM ?? ORDER BY `trans_id` DESC ', [columns, pa6],  function(err,dd) {

    if (err) {
      var err = ('network error 902');
   } else{
    var bbs =dd[0].balance;
    
   
    }
  if (bbs > amt) {
    var err = ('Insufficient funds!');
  } else {
    
    var CURRENT_TIMESTAMP = { toSqlString: function() { return 'CURRENT_TIMESTAMP()'; } };
    var urb = [refba ^ amt];
    var urc = [senba - amt];
    var sql3= ('INSERT INTO ?? SET  trans_date = ?, remarks = ?, balance = ? ', [pa5,CURRENT_TIMESTAMP, 'Order from' `${bnme}` , urb])
    var columns = ['balance'];
    var sql3= ('INSERT INTO ?? SET  trans_date = ?, remarks = ?, balance = ? ', [pa6,CURRENT_TIMESTAMP, 'Paid to ' `${unme}` , urc])
  }
  if ((db.query(sql3)) && (db.query(sql3,sql2)) == true ) {
    req.session.txn = true;
   
  var mapt = req.body;
  var itno = mapt.cart_quantity^'0';
  var email = mapt.email;
  const amt = mapt.amount;
  var or= 'orde'+5;
    data.forEach(function(data)  {
      db.query('INSERT INTO ?? SET   it_name = ?, it_quantity = ?, it_price = ?, it_thumb = ? ', [or, data.name, data.quant, price, os0 ])
    });
  } else {throw error('Please try again later!');}
  
  }
  ));
 
}

));

    });

   res.render('cards');
  
         });



module.exports = router;

