var express = require('express');
var cors=require("cors");
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var mysqli = require('mysqli'); 
var db=require('../databse');
var hash = require('pbkdf2-password')()
var app = express();
//var check = require('express-validator')(alidationResult);
var hash = require('pbkdf2-password')()
var cons = require('../constants');
var assert = require("assert-plus");
var path = require('path');
var session = require('express-session');
var ezp = require('../constants');
const { toDate, validationResult } = require('express-validator');
const { DATETIME2 } = require('mysql/lib/protocol/constants/types');

var MySQLStore = require('express-mysql-session')(session);

var app = module.exports = express();

//router.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
router.use(bodyparser.json());
router.use(express.urlencoded({ extended: false }))

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
        //sessionStore.close();
        
        res.redirect('/').end();
        
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
    
      
    
  
    
 
    var pa6= 'passbook'+req.session.logid;
    var por= 'orde'+req.session.logid;
   // var invt= 'ivtr'+req.session.logid;
   // var inv= 'inv'+req.session.logid;
    db.query('SELECT * FROM customer where email= ? ', [req.session.email], function (err, data, fields) {
      db.query('SELECT * FROM ?? ORDER BY `trans_id` DESC ', [pa6], function (err, dat, fields) {
        db.query('SELECT * FROM ?? ORDER BY `tba` DESC ', [por], function (err, da, fields) {
         // db.query('SELECT * FROM ?? ORDER BY `prd` DESC ', [invt], function (err, din, fields) {
            var sqlcn = 'SELECT COUNT(prd) FROM ?? WHERE ??= ?';
    // db.query(sqlcn, [inv,'cntrl','0'], function (err, kin, fields) {
      
      var sqlco = 'SELECT COUNT(or_id) FROM ?? WHERE ??= ?';
     db.query(sqlco, [por,'snn','0'], function (err, kino, fields) {
            
if(!err)
      try {
      var gen = data[0].gender;
      var pp = data[0].pp;
     
      
      var counto = kino[0] ? kino[0]['COUNT(or_id)'] : 0;
        
      
    var ln = data[0].lng
    sess.ln=ln;
    
    
        
    
        var bal = number_format(dat[0].balance);
    
    
   
     
     
     
     // var nmb = kin[0];
   //res.send(cid);
 /*  var FORMATS = {
    datetime: 'MMM D, YYYY, h:mm:ss a',
    millisecond: 'h:mm:ss.SSS a',
    second: 'h:mm:ss a',
    minute: 'h:mm a',
    hour: 'hA',
    day: 'MMM D',
    week: 'll',
    month: 'MMM YYYY',
    quarter: '[Q]Q - YYYY',
    year: 'YYYY'
  };var fgf= '2021-08-14 20:59:18';
  var currentDate = new Date('2021-08-14 20:59:18');
  var date = currentDate.getUTCDay();
   //const date = new Date.FORMATS.datetime();
   //var month = fgf.toDate();
   
   res.json(date);*/

   //res.send(cid);
   
  
  //var hash = JSON.stringify(hash);
  //var count = kin[0] ? kin[0]['COUNT(prd)'] : 0;
  //var counto = kino[0] ? kino[0]['COUNT(or_id)'] : 0;
//res.send({count});
/*if (count > 0) {
  var coun = count;
       
} else if(count < 1){
  coun = 'No new alerts'
}*/
if(sess.pp==='1'){
  var ppt ='pp'
} else if (pp==='0'){
 var ppt='lela'
 if(gen==='male'){
  var gent='m';
} else if(gen==='female'){
  var gent='g';
}
}
var home = 'cards';
var title ='Dashboard';
var usrnv= [{bbtn:ezp.btns[sess.ln],kino:counto,addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln]}]
//sess.usrnv=usrnv

var lnni =[{am:'am',en:'en',oro:'oro',som:'som',tig:'tig'}]


 







if (sess.bz==true) {
var bnz='bz';
} if (sess.usr==true){
var bnz='usr';
} if (!pp) {
var pp='lst';
} else if(pp.length>0)
{var pp =pp} var tyEr;
//res.send(lan)
tyEr ={shpk:ezp.shpk[sess.ln],p:'01',kino:counto,withd:ezp.withd[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],infb:ezp.infb[sess.ln],

task:ezp.task[sess.ln], tran:ezp.transactions[sess.ln], [sess.ln]:true,[bnz]:true,or:ezp.orders[sess.ln],
[ppt]:true, [gent]:true, 
title: title,[ezp.bnk]:true,bal:bal,userData: data[0],bal:bal, passData: dat[0], orderData: da[0]}
//res.send(tyre)
res.render(home, tyEr);





 
        

} catch (err) {
  tyEr ={err:err,p:'01',kino:counto,withd:ezp.withd[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],infb:ezp.infb[sess.ln],

  task:ezp.task[sess.ln], tran:ezp.transactions[sess.ln], [sess.ln]:true,[bnz]:true,
  [ppt]:true, [gent]:true, 
  title: title,[ezp.bnk]:true,bal:bal,userData: data[0],bal:bal, passData: dat[0], orderData: da[0]}
  //res.send(tyre)
  res.render(home, tyEr);
  
   
}  



}); 
});});
}); 
    });
  
    router.get('/am', function(req, res, next) {
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
    
       //res.send(cid);
     /*  var FORMATS = {
        datetime: 'MMM D, YYYY, h:mm:ss a',
        millisecond: 'h:mm:ss.SSS a',
        second: 'h:mm:ss a',
        minute: 'h:mm a',
        hour: 'hA',
        day: 'MMM D',
        week: 'll',
        month: 'MMM YYYY',
        quarter: '[Q]Q - YYYY',
        year: 'YYYY'
      };var fgf= '2021-08-14 20:59:18';
      var currentDate = new Date('2021-08-14 20:59:18');
      var date = currentDate.getUTCDay();
       //const date = new Date.FORMATS.datetime();
       //var month = fgf.toDate();
       
       res.json(date);*/
       var fgf= '2021-08-14 20:59:18';
       var h =toDate(fgf);
       res.render('card-am', { title: 'Dashboard',bal:bal, userData: data[0], passData: dat[0], orderData: da[0]});
      }); 
            
    });
    
    });
        });
      
  
/* GET home page. */



module.exports = router;

