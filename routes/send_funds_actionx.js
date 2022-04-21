var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var db=require('../databse');
const { parseUrl } = require('mysql/lib/ConnectionConfig');
var session = require('express-session');
var ezp =require('../constants');
const json = require('body-parser/lib/types/json');
//const { JSON } = require('mysql/lib/protocol/constants/types');
var MySQLStore = require('express-mysql-session')(session);
var hash = require('pbkdf2-password')()
var app = express();
router.use(express.json());
router.use(bodyparser.json());

var sessionStore = new MySQLStore(ezp.options);
  app.use(session({
    key: ezp.ses.key,
    secret: ezp.ses.secret,
    store: sessionStore,
    resave: ezp.ses.resave,
    saveUninitialized: ezp.ses.saveUninitialized
  }));


var sess;
router.post('/', function(req, res, next) {
  
  sess = req.session;
var mapt=req.body;
//function escape(str) {
  //assertString(str);
 // return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
//}
//escape()
var itno = mapt.cart_quantity;
var bid = sess.logid;
  var data =[];
  var paym= []; 
  var email = mapt.email;
  //const amt = mapt.amount;
  
  var bphn = mapt.bphn;
  sess.bphn = bphn;
  var amt = mapt.amount;
  var pinn = mapt.pin;
  var typ =mapt.typ;
  if (typ === 'd') {
    
    
      var mi9 = mapt.uuid;
      var pinx = mapt.pin;
      db.query(sqldn, paradn, function (err, resuldn, fields) {
        var pind = resuldn[0].pin;
        var bnme = resuldn[0].bnme;
      hash({ password: pinx, salt:'ezz' }, function (err, pass, salt, hash) {
        pinx.salt = salt;
                pinx.hash = hash;
        var sess =req.session;
        pinx.salt = salt;
                pinx.hash = hash;
                var sqldn = 'SELECT ?? AS uname,?? AS bnme,?? AS pin, ?? AS address FROM ?? WHERE ?? = ?';      // Get collector info   
        var paradn = [
          'uname',
          'bnme',
          'pin',
          'address',
          'customer',
          'cust_id',
          sess.logid
        ];
       
        
              if (hash === pind) {
                var dnpd = 'passbook'+sess.logid;
                
                var sqlndr = 'SELECT ?? AS trans_id, ?? as balance FROM ?? ORDER BY `trans_id` DESC'; //GET buyer balance
      
                var parandr = [             
                  'trans_id',
                  'balance',
                 dnpd
                ];
                db.query(sqlndr, parandr, function (err, resr, fields) {
                  var dbal = resr[0].balance;
                 
                  
                  var udbal = dbal - sess.damt;
                  if (dbal > sess.btmnd.damt) {
                    
                 
                var dnpb = 'passbook'+sess.btmnd.mm;
                
                var sqlndd = 'SELECT ?? AS trans_id, ?? as balance FROM ?? ORDER BY `trans_id` DESC'; //GET buyer balance
      
                var parandn = [             
                  'trans_id',
                  'balance',
                 dnpb
                ];
                db.query(sqlndd, parandn, function (err, resd, fields) {
                  var badn = resd[0].balance;
                  var cdamt = ([sess.btmnd.damt*3]/100);
                  var fdamt = sess.btmnd.damt - cdamt;
                  var ubadn = badn ^ fdamt;
      var CURRENT_TIMESTAMP = { toSqlString: function() { return 'CURRENT_TIMESTAMP()'; } };
      var sqldmm = 'INSERT INTO ?? (??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?)';     //update reciever balance
      
      var pamm = [
        dnpb,
        'trans_date',
        'remarks',
        'debit',
        'balance',
        'tst',
        CURRENT_TIMESTAMP,
        'Donated from '+`${sess.btmnd.donm}`+' for don. ID'+sess.btmnd.dnid,
        fdamt,
        ubadn,
        sess.tst,
      ];
          db.query(sqldmm, pamm, function (err, resuldn, fields) {
            var dnpd = 'passbook'+sess.logid;
            
            var sqlddn = 'INSERT INTO ?? (??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?)';     //update donnor balance
      
            var pamt = [
              dnpd,
              'trans_date',
              'remarks',
              'debit',
              'balance',
              'tst',
              CURRENT_TIMESTAMP,
              'Donated to '+`${sess.btmnd.donm}`+' for don. ID'+sess.btmnd.dnid,
              sess.btmnd.damt,
              udbal,
              sess.tst,
            ];
            db.query(sqlddn, pamt, function (err, red, fields) {
      
              var sqlddr = 'INSERT INTO ?? (??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?)';     //update ezpay balance
      
              var pamtr = [
                'passbook1',
                'trans_date',
                'remarks',
                'debit',
                'balance',
                'tst',
                CURRENT_TIMESTAMP,
                'Donated to '+`${sess.btmnd.donm}`+' for don. ID'+sess.btmnd.dnid,
                sess.btmnd.damt,
                udbal,
                sess.tst,
              ];
      
              db.query(sqlddr, pamtr, function (err, redd, fields) {
      
      
                res.render('sendz') 
              })
            })
          })
        
        
        })
        
      } else if (dbal < sess.btmnd.damt){
        res.render('sendy')            
      }
      
      })
        
      } else {
      
      
      }
      })
      
      })


  } else {
    
  
  //sess.phn = phn;
  var datan = JSON.parse(sess.dt);
   payn =sess.payn;
   phn = payn.phn;
  //var phn = mapt.phn;
  //sess.phn = phn;
  /*payn = {
    "itno":`${JSON.parse(mapt['cart_quantity'])}`,
    "phn": `${mapt['phone_no']}`,
    "amt": `${mapt['amount']}`,
  }*/

  for (var i=1; i < itno; i++){
    
    data.push({
      "name":`${mapt['item_name_'+i]}`,
      "quant":`${mapt['item_quantity_'+i]}`,
      "price":`${mapt['item_price_'+i]}`,
      "os0":`${mapt['os0_'+i]}`,
    });
  }
  var pa5; var or5; 
  pa5 = 'passbook'+phn;
  sess.pa5 = pa5;
   or5 = 'orde'+phn;
sess.or5 =or5;

var sqlnn = 'SELECT ?? AS bnme,?? AS email, ?? as address FROM ?? WHERE ?? = ?';         
  var paramt = [
    'bnme',
    'email',
    'address',
    'customer',
    'cust_id',
    phn
  ];
  db.query(sqlnn, paramt, function (err, resulnn, fields) {                                                                      
  // 1st enclosure
var sendnm =resulnn[0].bnme;
sess.sendnm =sendnm;
var snme;
snme =resulnn[0].uname;
var sphn = resulnn[0].phone_no;

sess.sphn= sphn;
sess.snme=snme;
var smail = resulnn[0].email;
sess.smail=smail
sess.adrr=resulnn[0].address
  var sqlx = 'SELECT ?? AS uname, ?? as pin, ?? as veri FROM ?? WHERE ?? = ?';         //Get merchant name
  var paramt = [
    'uname',
    'pin',
    'veri',
    'customer',
    'cust_id',
    sess.logid
  ];
  
  
  db.query(sqlx, paramt, function (err, resul, fields) {
    if (err) {
      req.session.errp='Operation failed please try again later! error 901';
          
          
          res.redirect('logc/err');
          res.end();
    }
    else if (!err) {
     var pin =resul[0].pin;
     
     var bod = {
      pwd: req.body.password,
      pin: pinn 
    };
     hash({ password: bod.pin, salt:'ezz' }, function (err, pass, salt, hash) {
      bod.pin.salt = salt;
      bod.pin.hash = hash;
      
      if (hash !== pin) {
        
      
        req.session.errp='Wrong pin entered!';
        req.session.pin=pinn;
        
        res.redirect('logc/err');
      res.end();
     
  
   
     
        }//,//{errp:'Wrong pin entered!',ph:sess.ph,nm:sess.nm, pnh:bphn}
        else{ 
           
      var sqla = 'SELECT ?? AS cust_id, ?? as uname, ?? as address FROM ?? WHERE ?? = ?';      //Get buyer name & id 
      var param = [
        'cust_id',
        'uname',
        'address',
        'customer',
        'phone_no',
        sess.bphn
      ];
         
              db.query(sqla, param, function (err, dat, fields) {
                  if (!err) {
                    var bnme;
           bnme = dat[0].uname;
           
           //var veri=dat[0].veri;
           var addrb=dat[0].address;
           sess.bnme = bnme;
           sess.addrb=addrb;
     //req.session.veri= veri;
                    var pa6; var or6;
                   //throw err('Failed to create customer.');
                  pa6 = 'passbook'+dat[0].cust_id;
                  sess.pa6= pa6;
                  or6 = 'orde'+dat[0].cust_id;
                  sess.or6= or6;
                    //return db.query(sql, params);
                  
               
                   
               
                  
                  var sqly = 'SELECT ?? AS trans_id, ?? as balance FROM ?? ORDER BY `trans_id` DESC'; //GET merchant balance
    
                  var para = [             
                    'trans_id',
                    'balance',
                    pa5
                  ];
                 
    
                    
                  db.query(sqly, para, function(error,da) {
                    var meer_bal;
                    
                      meer_bal = da[0].balance;
                      var sqlz = 'SELECT ?? AS trans_id, ?? as balance FROM ?? ORDER BY `trans_id` DESC'; //Get buyer balance
                      var par = [             
                        'trans_id',
                        'balance',
                        pa6
                      ];
                   
                    
                    
                   
                    db.query(sqlz, par, function(error,daz) {
                   var buyer_bal;
                   
                   
                   buyer_bal = daz[0].balance;
                   
                   if (buyer_bal < amt) {
                   //var error = ('Insufficient balance!');
                   req.session.errp='Insufficient balance!';
              req.session.pin=pinn;
              
              res.redirect('logc/err');
              res.end();
                    //return db.query(sql, params);
                  } else {
                   var up_buyer_bal = [buyer_bal - amt];
                   var camt = ([amt*3]/100);
                   var famt = [amt - camt]
                   var up_merchnt_bal = [meer_bal ^ famt];
                   var mbal = []
                   var CURRENT_TIMESTAMP = { toSqlString: function() { return 'CURRENT_TIMESTAMP()'; } };
                     
                    var sqlt = 'INSERT INTO ?? (??, ??, ??) VALUES (?, ?, ?) ';     //update buyer balance
    
                    var params = [
                      pa6,
                      'trans_date',
                      'remarks',
                      'balance',
                      CURRENT_TIMESTAMP,
                      'Purchased from '+`${sess.sendnm}`,
                      up_buyer_bal,
                      
                    ];
                   
                    
                    
                        db.query(sqlt, params, function(err,dau) {
                          
                          
                          if (!err) {
                            //throw err;
                            var bu_tid = dau.insertId;
                           req.session.bu_tid=bu_tid;
                            //return db.query(sql, params);
                          
                            
                            //var meer_tid = dau[0].lastinsertId;
                            var sqlr = 'INSERT INTO ?? (??, ??, ??) VALUES (?, ?, ?) '; //update merchant balance
    
                            var paramr = [
                              pa5,
                              'trans_date',
                              'remarks',
                              'balance',
                              CURRENT_TIMESTAMP,
                              'Order from '+`${bnme}`,
                              up_merchnt_bal,
                              
                            ];
    
                          
                          db.query(sqlr, paramr, function(error,dar) {
                            
                            
                          if (error) {
                            //throw error('Failed to create sessions database table.');
                           
                            //return db.query(sql, params);
                          } else{
                            var mer_tid = dar.insertId;
                            sess.mtid=mer_tid;
                            var i=1;
                            var sqlc = 'INSERT INTO ?? (??, ??, ??, ??) VALUES (?, ?, ?, ?) ';     //update ezp balance
    
                    var paramc = [
                      'passbook1',
                      'trans_date',
                      'remarks',
                      'debit',
                      'balance',
                      CURRENT_TIMESTAMP,
                      'From '+`${snme}`+' for trans no'+`${mer_tid}`,
                      `${mer_tid}`,
                      camt,
                      
                    ];
                    db.query(sqlc, paramc, function(err,dac) {
                      if(!err){
                        var ez_tid = dac.insertId;
                      sess.eztid=ez_tid;
                      
                      
                            datan.forEach(element => {
                              
                           
                            var sqli = 'INSERT INTO ?? (??, ??, ??,??, ??, ??, ??) VALUES (?, ?, ?,?, ?, ?, ?) '; // insert merchant order
    
                            var parami = [
                              or5,
                              'or_date',
                              'it_no',
                              'it_name',
                              'it_quantity',
                              'it_price',
                              'it_thumb',
                              'tba',
                              CURRENT_TIMESTAMP,
                              itno,
                              `${element.name}`,
                              `${element.quant}`,
                              `${element.price}`,
                              `${element.os0}`,
                              mer_tid,
                            ];
                            
                            db.query(sqli, parami, function(error) {
                          
                            var sqlib = 'INSERT INTO ?? (??, ??, ??,??, ??, ??, ??) VALUES (?, ?, ?,?, ?, ?, ?) '; // inseert buyer dets
    
                            var paramib = [
                              sess.or6,
                              'or_date',
                              'it_no',
                              'it_name',
                              'it_quantity',
                              'it_price',
                              'it_thumb',
                              'tba',
                              CURRENT_TIMESTAMP,
                              itno,
                              `${element.name}`,
                              `${element.quant}`,
                              `${element.price}`,
                              `${element.os0}`,
                               bu_tid,
                            ];
                         
                            
                            
                              db.query(sqlib, paramib, function(err) {
                                if (err) {
                                  throw err
                                  //if (err.code !== 'ER_PARSE_ERROR') throw err;
                                  //return db.query(sql, params);
                                } else{

                                  
                                }
                               
                              }) }) }) }
                          
                       
                      
                    
      if (ezp.bnk==='ab') {
        
     
       
         if (sess.veri==0) {
          res.render('sendz',{print:'true',ab:true,mtid:sess.mtid,eztid:sess.eztid,butid:sess.bu_tid,addrb:sess.addrb,bemail:sess.email,addr:sess.adrr,smail:sess.smail,data:datan,sndnm:sess.sendnm,snme:sess.snme, mnme:sess.mnme,sphn: sess.ph,bphn:sess.bphn, amt:amt,logid:sess.logid,phn:sess.payn.phn});

         }else if( sess.veri==1 ){
          res.render('sendz',{print:'true',ab:true,mtid:sess.mtid,eztid:sess.eztid,butid:sess.bu_tid,addrb:sess.addrb,bemail:sess.email,addr:sess.adrr,smail:sess.smail,data:datan,veri:true,sndnm:sess.sendnm,snme:sess.snme, mnme:sess.mnme,sphn: sess.ph,bphn:sess.bphn, amt:amt,logid:sess.logid,phn:sess.payn.phn});


         } else{
          res.render('sendz',{print:'true',ab:true,mtid:sess.mtid,eztid:sess.eztid,butid:sess.bu_tid,addrb:sess.addrb,bemail:sess.email,addr:sess.adrr,smail:sess.smail,data:datan,sndnm:sess.sendnm,snme:sess.snme, mnme:sess.mnme,sphn: sess.ph,bphn:sess.bphn, amt:amt,logid:sess.logid,phn:sess.payn.phn});

         }
        } else if(ezp.bnk==='com') {
          if (sess.veri==0) {
            res.render('sendz',{print:'true',com:true,mtid:sess.mtid,eztid:sess.eztid,butid:sess.bu_tid,addrb:sess.addrb,bemail:sess.email,addr:sess.adrr,smail:sess.smail,data:datan,sndnm:sess.sendnm,snme:sess.snme, mnme:sess.mnme,sphn: sess.ph,bphn:sess.bphn, amt:amt,logid:sess.logid,phn:sess.payn.phn});
  
           }else if( sess.veri==1 ){
            res.render('sendz',{print:'true',com:true,mtid:sess.mtid,eztid:sess.eztid,butid:sess.bu_tid,addrb:sess.addrb,bemail:sess.email,addr:sess.adrr,smail:sess.smail,data:datan,veri:true,sndnm:sess.sendnm,snme:sess.snme, mnme:sess.mnme,sphn: sess.ph,bphn:sess.bphn, amt:amt,logid:sess.logid,phn:sess.payn.phn});
  
  
           } else{
            res.render('sendz',{print:'true',com:true,mtid:sess.mtid,eztid:sess.eztid,butid:sess.bu_tid,addrb:sess.addrb,bemail:sess.email,addr:sess.adrr,smail:sess.smail,data:datan,sndnm:sess.sendnm,snme:sess.snme, mnme:sess.mnme,sphn: sess.ph,bphn:sess.bphn, amt:amt,logid:sess.logid,phn:sess.payn.phn});
  
           }
        
        }else if(ezp.bnk==='nb') {
          if (sess.veri==0) {
            res.render('sendz',{print:'true',nb:true,mtid:sess.mtid,eztid:sess.eztid,butid:sess.bu_tid,addrb:sess.addrb,bemail:sess.email,addr:sess.adrr,smail:sess.smail,data:datan,sndnm:sess.sendnm,snme:sess.snme, mnme:sess.mnme,sphn: sess.ph,bphn:sess.bphn, amt:amt,logid:sess.logid,phn:sess.payn.phn});
  
           }else if( sess.veri==1 ){
            res.render('sendz',{print:'true',nb:true,mtid:sess.mtid,eztid:sess.eztid,butid:sess.bu_tid,addrb:sess.addrb,bemail:sess.email,addr:sess.adrr,smail:sess.smail,data:datan,veri:true,sndnm:sess.sendnm,snme:sess.snme, mnme:sess.mnme,sphn: sess.ph,bphn:sess.bphn, amt:amt,logid:sess.logid,phn:sess.payn.phn});
  
  
           } else{
            res.render('sendz',{print:'true',nb:true,mtid:sess.mtid,eztid:sess.eztid,butid:sess.bu_tid,addrb:sess.addrb,bemail:sess.email,addr:sess.adrr,smail:sess.smail,data:datan,sndnm:sess.sendnm,snme:sess.snme, mnme:sess.mnme,sphn: sess.ph,bphn:sess.bphn, amt:amt,logid:sess.logid,phn:sess.payn.phn});
  
           }
        
        }
        else if(ezp.bnk==='dash') {
          if (sess.veri==0) {
            res.render('sendz',{print:'true',dash:true,mtid:sess.mtid,eztid:sess.eztid,butid:sess.bu_tid,addrb:sess.addrb,bemail:sess.email,addr:sess.adrr,smail:sess.smail,data:datan,sndnm:sess.sendnm,snme:sess.snme, mnme:sess.mnme,sphn: sess.ph,bphn:sess.bphn, amt:amt,logid:sess.logid,phn:sess.payn.phn});
  
           }else if( sess.veri==1 ){
            res.render('sendz',{print:'true',dash:true,mtid:sess.mtid,eztid:sess.eztid,butid:sess.bu_tid,addrb:sess.addrb,bemail:sess.email,addr:sess.adrr,smail:sess.smail,data:datan,veri:true,sndnm:sess.sendnm,snme:sess.snme, mnme:sess.mnme,sphn: sess.ph,bphn:sess.bphn, amt:amt,logid:sess.logid,phn:sess.payn.phn});
  
  
           } else{
            res.render('sendz',{print:'true',dash:true,mtid:sess.mtid,eztid:sess.eztid,butid:sess.bu_tid,addrb:sess.addrb,bemail:sess.email,addr:sess.adrr,smail:sess.smail,data:datan,sndnm:sess.sendnm,snme:sess.snme, mnme:sess.mnme,sphn: sess.ph,bphn:sess.bphn, amt:amt,logid:sess.logid,phn:sess.payn.phn});
  
           }
        
        } })
                             // res.send(data['name']);   
                            
                            
    
                          }
                   })
      }})
    
    
    }
     
  
      
    })
   
  })
 
}})

}

})
// res.render('land', { title: 'checkout',ph:sess.ph, nm:sess.nm, mnme: mnme, pnh:pnh, payn:payn, bnme: sess.bnme});
}

})
    }) }
    
         });



module.exports = router;

