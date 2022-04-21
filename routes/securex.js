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
var cons =require('../constants');
var MySQLStore = require('express-mysql-session')(session);
var mysql = require('mysql'); 
var hbs = require('express-hbs');
var cors=require("cors");
var expressValidator = require('express-validator');
const json = require('body-parser/lib/types/json');
var app = express();
var urlencodedparser = bodyparser.urlencoded({  extended: false});
//const json = require('body-parser/lib/types/json');
var uid = require('uid-safe');
router.use(express.json());
router.use(bodyparser.json());
/* GET home page. */




router.use(express.json());
//router.use(bodyparser.json());


//app.use(session({secret: 'ssshhhhh'}));

var sessionStore = new MySQLStore(ezp.options);
router.use(session({
  key: ezp.ses.key,
  secret: ezp.ses.secret,
  store: sessionStore,
  resave: ezp.ses.resave,
  saveUninitialized: ezp.ses.saveUninitialized
}));
router.post('/',urlencodedparser, function(req, res) {
 
var sess;
var map = req.body;
  sess = req.session;
  var ty = map.typ;
  if (sess.isvalid) {
    
    var dato =[];
  

    var paym= [];
    var mapt = req.body;
    //var itno = mapt.quantity;
    var optdu = mapt.optd;
    var op = mapt['quantity'+optdu];
    var itno = mapt[op];
    var itnm = mapt.itnm;
    var indx = mapt[optdu];
    var mm = mapt.mm;
    var lnc = mapt.lnc;
    var email = mapt.email;
    const btamt = mapt.prc;
    var phn = mapt.phone_no;
    var typ = mapt.typ;
    var prd = mapt.prd;
    var nm =mapt.nm;
      var data =[];
      var paym= [];
     
      var itno = mapt.cart_quantity^'1';
  
      const amt = mapt.amount;
     
      
      for (var i=1; i < itno; i++){
        //for(var i in map) 
              
        /*data.push(`${'item-'+i}:{${'name'}: ${mapt['item_name_'+i]},
        ${'quantity'}:${mapt['item_quantity_'+i]},
        ${'price'}:${mapt['item_price_'+i]},
        ${'os0'}:${mapt['os0_'+i]}}`); */
          //items.push(mapt.data[i] );
          dato.push({
            "name":`${mapt['item_name']}`,
            "optd":`${mapt['optd']}`,
            "quant":`${mapt['quantity']}`,
            "price":`${mapt['prc']}`,
            "os0":`${mapt['os0_']}`,
          });
          var ssdto;
          //ssdto = JSON.stringify(dato);
          //sess.dto = ssdt0;
        }
      //items.push(map)
      var it =[];
      
      payb = {
        "itno":`${mapt['quantity']}`,
        "phn": `${mapt['email']}`,
        "amt": `${mapt['prc']}`,
        
      }
      
      db.query('SELECT * FROM customer where email= ? ', [payb.phn], function (err, d, fields) {
       // req.session.bnm= d[0].uname;
       // req.session.bphb= d[0].phone_no;
        var unm= d[0].uname;
        var btphn= d[0].phone_no;
        var veri= d[0].veri;
        var adrr= d[0].address;
      sess.payb = payb;
      var pay = paym;
      uid(4, function (err, string) {
        if (err) throw err
       var st = string;
      
      if(sess.pp==='1'){
        var ppt ='pp'
      } else if (sess.pp==='0'){
       var ppt='lela'
       if(sess.gen==='male'){
        var gent='m';
      } else if(sess.gen==='female'){
        var gent='g';
      }
      }
      var home = 'landx';
      var bhome = 'landxb';
      var title ='checkout';
      //var usrnv= [{bbtn:ezp.btns[sess.ln],kino:counto,addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln]}]
      //sess.usrnv=usrnv
   btnd = {
      "bznm":`${unm}`,
      "bzphn": `${btphn}`,
      "amt": `${btamt}`,
      "bzemail": `${email}`,
      "quantity": `${mapt['quantity']}`,
      "typ": `${mapt['typ']}`,
      "indx": `${indx}`,
      "itno": `${op}`,
      "optd": `${mapt['optd']}`,
      "itnm": `${itnm}`,
      "veri": `${veri}`,
      "adrr": `${adrr}`,
      "tst": `${st}`,
      "mm": `${mm}`,
      "prd": `${prd}`,
    } 
    
      if (sess.bz==true) {
        var bnz='bz';
        } if (sess.usr==true){
        var bnz='usr';
        } var tyEr;
        if (sess.typ ==='m') {
          var tp='mx'
        }
        if (!sess.pp) {
          var pp='lst';
          } else if(sess.pp)
          {var pp ='pp'}
          if(sess.pp==='1'){
            var ppt ='pp';
            var ppf='ppf'
          } else if (pp==='0'){
           var ppt='lela'
           var ppf='nopp'
           if(gen==='male'){
            var gent='m';
          } else if(gen==='female'){
            var gent='g';
          }
          }
      tyEr ={[ppf]:sess.pmg,[tp]:true,btnd:btnd,shpk:ezp.shpk[sess.ln],p:'01',withd:ezp.withd[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],infb:ezp.infb[sess.ln],
          
          task:ezp.task[sess.ln], tran:ezp.transactions[sess.ln], [sess.ln]:true,[bnz]:true,or:ezp.orders[sess.ln],
          [ppt]:true, [pp]:true,[gent]:true, 
          title: title,[ezp.bnk]:true,ph:sess.ph, nm:sess.bnm, mnme: sess.mnme, pnh:sess.pnh, payn:sess.payb, bnme: sess.bnme}
        tyErb ={bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],
          invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],ana:ezp.ana[sess.ln],
          shpk:ezp.shpk[sess.ln],infb:ezp.infb[sess.ln],inlrt:ezp.invlrt[sess.ln],or:ezp.orders[sess.ln],
          task:ezp.task[sess.ln],tran:ezp.transactions[sess.ln],[sess.ln]:true,[bnz]:true, 
          [ppf]:sess.pmg,[tp]:true,btnd:btnd,shpk:ezp.shpk[sess.ln],p:'01',withd:ezp.withd[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],infb:ezp.infb[sess.ln],
          
          task:ezp.task[sess.ln], tran:ezp.transactions[sess.ln], [sess.ln]:true,[bnz]:true,or:ezp.orders[sess.ln],
          [ppt]:true, [pp]:true,[gent]:true, 
          title: title,[ezp.bnk]:true,ph:sess.ph, nm:sess.bnm, mnme: sess.mnme, pnh:sess.pnh, payn:sess.payb, bnme: sess.bnme}
          //res.send(tyre)
         // res.render(home, tyEr);
          if (sess.bz == true) {
          
            res.render(bhome, tyErb);
          
          } else if (sess.usr == true) { res.render(home, tyEr);}
    
    //res.send(sess.payn);
  //  res.render('landx', {payn: payb,data: dato, dt:sess.dto});
    })});  
} else if (!sess.isvalid) {

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
    
 //router.use(cors());
  var dato =[];
  

  var paym= [];
  var mapt = req.body;
  //var itno = mapt.quantity;
  var optdu = mapt.optd;
  var op = mapt['quantity'+optdu];
  var itno = mapt[op];
  var itnm = mapt.item_name;
  var indx = mapt[optdu];
  var mm = mapt.mm;
  var lnc = mapt.lnc;
  var email = mapt.email;
  const btamt = mapt.prc;
  var phn = mapt.phone_no;
  var typ = mapt.typ;
  var prd = mapt.prd;
  var damt = mapt.optd;
  var dnid = mapt.pid;
  var donm = mapt.tba;
  var dnm = mapt.dnm;
  var mm = mapt.mm;
  if (ty === 'd') {
    
    var dnt = 'dntbl'+mm;
    db.query('SELECT * FROM ?? where ? = ? ', [dnt,'dnid',dnid], function (err, dx, fields) {
      btnmd ={
        "damt":`${damt}`,
        "donm":`${donm}`,
        "dnid":`${dnid}`,
        "dnm":`${dnm}`,
        "mm":`${mm}`,
        "ty":`${typ}`,
      }
      res.render('checkoutx',{btnmd:btnmd});
  
    })
  } else {
  for (var i=1; i < itno; i++){
  //for(var i in map) 
        
  /*data.push(`${'item-'+i}:{${'name'}: ${mapt['item_name_'+i]},
  ${'quantity'}:${mapt['item_quantity_'+i]},
  ${'price'}:${mapt['item_price_'+i]},
  ${'os0'}:${mapt['os0_'+i]}}`); */
    //items.push(mapt.data[i] );
    dato.push({
      "name":`${mapt['item_name']}`,
      "optd":`${mapt['optd']}`,
      "quant":`${mapt['quantity']}`,
      "price":`${mapt['prc']}`,
      "os0":`${mapt['os0_']}`,
    });
    var ssdto;
    //ssdto = JSON.stringify(dato);
    //sess.dto = ssdt0;
  }
  //items.push(map)
  var it =[];
  
  
  
  db.query('SELECT * FROM customer where email= ? ', [email], function (err, d, fields) {
    var unm= d[0].uname;
    var btphn= d[0].phone_no;
    var veri= d[0].veri;
    var adrr= d[0].address;
    uid(4, function (err, string) {
      if (err) throw err
     var st = string;
     //req.session.tst=st;
    
    btnd = {
      "bznm":`${unm}`,
      "bzphn": `${btphn}`,
      "amt": `${btamt}`,
      "bzemail": `${email}`,
      "quantity": `${mapt['quantity']}`,
      "typ": `${mapt['typ']}`,
      "indx": `${indx}`,
      "itno": `${op}`,
      "optd": `${mapt['optd']}`,
      "itnm": `${itnm}`,
      "veri": `${veri}`,
      "adrr": `${adrr}`,
      "tst": `${st}`,
      "mm": `${mm}`,
      "prd": `${prd}`,
    } 
  
  //sess.btnm = btnm;
  

//sess.btnd = btnd;
  var pay = paym;
 


var MySQLStore = require('express-mysql-session')(session);



//res.send(btnd);
res.render('checkoutx', {typ:typ,optd:optdu,quantity:itno,mm:mm,mail: email,amt: btamt, btnd:btnd});
})})



}
 
}

});


module.exports = router;

