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
//const { toDataURL } = require('qrcode');
const { each } = require('jquery');
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
  var itno = mapt.quantity;
  var itnm = mapt.itnm;
  var trnm = mapt.trnm;
  var trid = mapt.trid;
  var lnc = mapt.lnc;
  var optd = mapt.optd;
  var mail= mapt.bzmail;
  var pinx= mapt.pin;
  var amt =mapt.amount;
  var typ =mapt.typ;
  
  
sess.lnc= mapt.lnk;
  if (typ === 'r') {
    
    var prd=sess.btnd.prd

  var sqlnm = 'SELECT ?? AS uname,?? AS cust_id, ?? AS address FROM ?? WHERE ?? = ?';      // Get merchant info   
  var paranm = [
    'uname',
    'cust_id',
    'address',
    'customer',
    'email',
    mail
  ];
  db.query(sqlnm, paranm, function (err, resulnm, fields) {
    if(!err){
      //throw err
      
       var fnm;
       var cus_id = resulnm[0].cust_id;
       sess.cus_id=cus_id;
        sess.bznm= resulnm[0].uname;
       var sqlnb = 'SELECT ?? AS uname,?? AS pin, ?? AS address FROM ?? WHERE ?? = ?';        //Get buyer info 
  var paranb = [
    'uname',
    'pin',
    'address',
    'customer',
    'cust_id',
    sess.logid
  ]; db.query(sqlnb, paranb, function (err, resulnb, fields) {
    if(err){
      throw err}
      else{
      var bunm= resulnb[0].uname;
      sess.bunm=bunm;
        var pin = resulnb[0].pin;
       
       
       
       
        hash({ password: pinx, salt:'ezz' }, function (err, pass, salt, hash) {
          pinx.salt = salt;
          pinx.hash = hash;
        if (hash === pin) {
          var pa5 = 'passbook'+sess.logid;
        var sqlny = 'SELECT ?? AS trans_id, ?? as balance FROM ?? ORDER BY `trans_id` DESC'; //GET buyer balance

          var paranny = [             
            'trans_id',
            'balance',
            pa5
          ];
         // db.query(cons.sqlny, db.escape(paranny, function(err, resulny, fields){

          db.query(sqlny, paranny, function (err, resulny, fields) {

            var bbal= resulny[0].balance;
            sess.bbal=bbal;
            var tamt = amt * sess.btnd.quantity;
            var ubbal =bbal - tamt ;
            sess.ubbal = ubbal;
            
            var pa6 = 'passbook'+sess.cus_id;
           // var sqlnz = 'SELECT ?? AS trans_id, ?? as balance,?? as tst FROM ?? ORDER BY `trans_id` DESC'; //GET merchant balance

          var parannz = [             
            'trans_id',
            'balance',
            'tst',
            pa6
          ];
          db.query(ezp.sqlnz, parannz, function (err, resulnz, fields) {
        // db.query(sqlnz, parannz, function (err, resulnz, fields) {
            if(!err==true){
              //throw err
             
              var sbal= resulnz[0].balance;
              var wamt = amt * sess.btnd.quantity;
              var tst= resulnz[0].tst;
              var camt = ([wamt*ezp.cmt])^ezp.smt;
              sess.camt=camt;
               var famt = [wamt - camt]
            var usbal =sbal ^ famt;
            sess.usbal = usbal;
            
           if (tst === sess.tst) {
               res.json({msg:'error tst'})
             // res.redirect('/');
              res.end()
           } else if (sess.bbal > amt) 
               {
                var CURRENT_TIMESTAMP = { toSqlString: function() { return 'CURRENT_TIMESTAMP()'; } };
                 
                var sqlat = 'INSERT INTO ?? (??, ??, ??, ??) VALUES (?, ?, ?, ?) ';     //update buyer balance

                var parat = [
                  pa5,
                  'trans_date',
                  'remarks',
                  'balance',
                  'tst',
                  CURRENT_TIMESTAMP,
                  'Purchased from '+sess.bznm,
                  sess.ubbal,
                  sess.tst,
                ];
               
                
                
                db.query(sqlat, parat, function(err,pau) {
                  if (err) {
                    throw err;
                    
                  }
                  else if (!err) {
                    //throw err;
                    var b_tid = pau.insertId;
                    var sqlst = 'INSERT INTO ?? (??, ??, ??, ??) VALUES (?, ?, ?, ?) ';     //update seller balance

                var parst = [
                  pa6,
                  'trans_date',
                  'remarks',
                  'balance',
                  'tst',
                  CURRENT_TIMESTAMP,
                  'Order from '+sess.bunm,
                  sess.usbal,
                  sess.tst,
                  
                ];
                db.query(sqlst, parst, function (err, prst, fields) {
                  if (err) {
                    throw err
                  }
                  var m_tid = prst.insertId;
                  sess.m_tid=m_tid;
                  var sqlc = 'INSERT INTO ?? (??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?) ';     //update ezp balance

                var paramc = [
                  'passbook1',
                  'trans_date',
                  'remarks',
                  'debit',
                  'balance',
                  'tst',
                  CURRENT_TIMESTAMP,
                  'From '+`${sess.bznm}`+' for trans no'+m_tid,
                  m_tid,
                  sess.camt,
                  sess.tst,
                ];
                db.query(sqlc, paramc, function(err,dac) {
                  if (err) {
                    throw err
                  }
                  var or6 = 'orde'+sess.cus_id;
      
                  var sqli = 'INSERT INTO ?? (??, ??, ??,??, ??, ??, ??, ??) VALUES (?, ?, ?,?, ?, ?, ?, ?) '; // insert merchant order

                        var parami = [
                          or6,
                          'or_date',
                          'it_no',
                          'it_name',
                          'it_quantity',
                          'it_price',
                          'it_thumb',
                          'tba',
                          'snn',
                          CURRENT_TIMESTAMP,
                          itno,
                          `${itnm}`,
                            `${itno}`,
                            `${amt}`,
                            `${'os0'}`,
                          m_tid,
                          `${'0'}`,
                        ];
                        
                        db.query(sqli, parami, function(err) {
                          if (err) {
                            throw err
                          }
                          var sqlinv = 'SELECT ?? AS quant, ?? as optnz FROM ?? WHERE ?? = ?'; //GET inventory

                          var parainv = [             
                            'quant',
                            'optnz',
                            
                            'inv'+sess.cus_id,
                            'prd',
                            prd
                          ];
                          db.query(sqlinv, parainv, function (err, resuinv, fields) {
                            if (err) {
                              throw err
                            }
                            var qua=resuinv[0].optnz;
                            var quant=resuinv[0].quant;
                            var qual=JSON.parse(qua)
                            
                            objIndex = qual.findIndex((obj => obj.nm == sess.btnd.optd));
                            var uqua= qual[objIndex].qn - sess.btnd.quantity;
                            
                            if (uqua > 1) {
                              qual[objIndex].qn = uqua;
                              sess.qua=qual
                              quak=JSON.stringify(qual)
                            } else if(uqua <= 1) {
                              qual[objIndex].qn = uqua;
                              qual[objIndex].msg = 0;
                              sess.qua=qual
                              quak=JSON.stringify(qual)
                            //  quant = sess.btnd.optd
                            var sqlinuv = 'INSERT INTO ?? (??, ??) VALUES (?, ?) ';
                             var paranvv = [
                              'ivtr'+sess.cus_id,
                              
                              'optnm',
                              'prd',
                              
                              sess.btnd.optd,
                              prd
                             
                             
                            ];
                            db.query(sqlinuv, paranvv, function (err, resunv, fields) {
                              var sqlinuq = 'UPDATE ?? SET ?? = ? WHERE ?? = ?'; //update inventory
                             var paranvq = [
                              'inv'+sess.cus_id,
                              
                             
                              'cntrl',
                              
                              
                              '0',
                              'prd',
                              prd
                            ];
                            db.query(sqlinuq, paranvq, function (err, resunv, fields) {})

                            })
                            
                            }
                            
                            
                            
                            
                            var sqlinu = 'UPDATE ?? SET ?? = ? WHERE ?? = ?'; //update inventory
                             var paranv = [
                              'inv'+sess.cus_id,
                              
                              'optnz',
                              
                              
                              quak,
                              
                              'prd',
                              prd
                            ];
                            db.query(sqlinu, paranv, function (err, resunv, fields) {
                              if (err) {
                                throw err
                              }
                              
                          var or5='orde'+sess.logid;
       
                          var sqlib = 'INSERT INTO ?? (??, ??, ??,??, ??, ??, ??) VALUES (?, ?, ?,?, ?, ?, ?) '; // inseert buyer dets

                          var paramib = [
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
                            `${itnm}`,
                            `${itno}`,
                            `${amt}`,
                            `${'os0'}`,
                             b_tid,
                          ];
                       
                          
                          
                            db.query(sqlib, paramib, function(err) {
                             if (err) {
                               throw err
                             }
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
  var home = 'sendy';
  var title ='checkout';
  var cmg = sess.cmgb;
  if (cmg === '0') {
    var cmgt ='nmsg';
  } else if (cmg >'0'){
    
    var cmgt ='cmg';
  }
  //var usrnv= [{bbtn:ezp.btns[sess.ln],kino:counto,addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln]}]
  //sess.usrnv=usrnv
if (sess.btnm) {
var bt ='btnm';
} else if(sess.btnd) {
var bt='btnd';
}
if (sess[bt].veri==0) {
  veri='nveri';
} else if (sess[bt].veri==1) {
  veri='veri';
}
if (lnc) {
  var lnc=map.lnc;
  var linkk ='lnc'
} else {
  var lnc=false;
  var linkk ='nlnc'
}
  if (sess.bz==true) {
    var bnz='bz';
    } if (sess.usr==true){
    var bnz='usr';
    } if (!pp) {
    var pp='lst';
    } else if(pp.length>0)
    {var pp =pp} var tyEr;
  tyEr ={[cmgt]:sess.cmgb,btnd:sess.btnd,[linkk]:lnc,[veri]:true,[bt]:sess[bt],shpk:ezp.shpk[sess.ln],p:'01',withd:ezp.withd[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],infb:ezp.infb[sess.ln],
      
      task:ezp.task[sess.ln], tran:ezp.transactions[sess.ln], [sess.ln]:true,[bnz]:true,or:ezp.orders[sess.ln],
      [ppt]:true, [pp]:true,[gent]:true, 
      title: title,[ezp.bnk]:true,bunm:sess.bunm, bznm:sess.bznm,sphn:sess[bt].bzphn,bzmail:sess[bt].bzemail,mtid:sess.m_tid,pnh:sess.pnh,[bt]:sess[bt],adrr:sess[bt].adrr}
      //res.send(tyre){bunm:sess.bunm, bznm:sess.bznm,sphn:sess[bt].bzphn,bzmail:sess[bt]..bzemail,mtid:sess.m_tid,pnh:sess.pnh,[bt].:sess[bt].,adrr:sess[bt]..adrr}
      res.render(home, tyEr);
    
        //  res.send(tyEr)                  
    
  })

})

})
})

})
}) 
}
})





} 
else{
req.session.errp='Insufficient balance!';
res.redirect('logx/err');
res.end();
} 



}


})
})

} else {
res.json({msg:'wrong pin'})
res.end();
}

})


}
})


}
  })
} else if (mapt.typ === 'm') {

  var sqlnm = 'SELECT ?? AS uname,?? AS cust_id, ?? AS address FROM ?? WHERE ?? = ?';      // Get merchant info   
  var paranm = [
    'uname',
    'cust_id',
    'address',
    'customer',
    'email',
    mail
  ];
  db.query(sqlnm, paranm, function (err, resulnm, fields) {
    if(!err){
      //throw err
      
       var fnm;
       var cus_id = resulnm[0].cust_id;
       sess.cus_id=cus_id;
        sess.bznm= resulnm[0].uname;
       var sqlnb = 'SELECT ?? AS uname,?? AS pin, ?? AS address FROM ?? WHERE ?? = ?';        //Get buyer info 
  var paranb = [
    'uname',
    'pin',
    'address',
    'customer',
    'cust_id',
    sess.logid
  ]; db.query(sqlnb, paranb, function (err, resulnb, fields) {
    if(err){
      //throw err
    }
      else{
      var bunm= resulnb[0].uname;
      sess.bunm=bunm;
        var pin = resulnb[0].pin;
       
       
       
       
        hash({ password: pinx, salt:'ezz' }, function (err, pass, salt, hash) {
          pinx.salt = salt;
          pinx.hash = hash;
        if (hash === pin) {
          var pa5 = 'passbook'+sess.logid;
          var sqlny = 'SELECT ?? AS trans_id, ?? as balance FROM ?? ORDER BY `trans_id` DESC'; //GET buyer balance

          var paranny = [             
            'trans_id',
            'balance',
            pa5
          ];
          db.query(sqlny, paranny, function (err, resulny, fields) {

            var bbal= resulny[0].balance;
            sess.bbal=bbal;
            var ubbal =bbal - amt ;
            sess.ubbal = ubbal;
            
            var pa6 = 'passbook'+sess.cus_id;
            var sqlnz = 'SELECT ?? AS trans_id, ?? as balance,?? as tst FROM ?? ORDER BY `trans_id` DESC'; //GET merchant balance

          var parannz = [             
            'trans_id',
            'balance',
            'tst',
            pa6
          ];
          db.query(sqlnz, parannz, function (err, resulnz, fields) {
            if(!err==true){
              //throw err
             
              var sbal= resulnz[0].balance;
              var tst= resulnz[0].tst;
              var camt = ([amt*3]/100);
              sess.camt=camt;
               var famt = [amt - camt]
            var usbal =sbal ^ famt;
            sess.usbal = usbal;
            
           if (tst === sess.tst) {
               res.json({msg:'error tst'})
             // res.redirect('/');
              res.end()
           } else if (sess.bbal > amt) 
               {
                var CURRENT_TIMESTAMP = { toSqlString: function() { return 'CURRENT_TIMESTAMP()'; } };
                 
                var sqlat = 'INSERT INTO ?? (??, ??, ??, ??) VALUES (?, ?, ?, ?) ';     //update buyer balance

                var parat = [
                  pa5,
                  'trans_date',
                  'remarks',
                  'balance',
                  'tst',
                  CURRENT_TIMESTAMP,
                  'Purchased from '+sess.bznm,
                  sess.ubbal,
                  sess.tst,
                ];
               
                
                
                db.query(sqlat, parat, function(err,pau) {
                 if (!err) {
                    //throw err;
                    var b_tid = pau.insertId;
                    sess.btid=b_tid;
                    var sqlst = 'INSERT INTO ?? (??, ??, ??, ??) VALUES (?, ?, ?, ?) ';     //update seller balance

                var parst = [
                  pa6,
                  'trans_date',
                  'remarks',
                  'balance',
                  'tst',
                  CURRENT_TIMESTAMP,
                  'Recieved from '+sess.bunm,
                  sess.usbal,
                  sess.tst,
                  
                ];
                db.query(sqlst, parst, function (err, prst, fields) {
                  if (!err) {
                    
                  
                  var m_tid = prst.insertId;
                  sess.m_tid=m_tid;
                  var sqlc = 'INSERT INTO ?? (??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?) ';     //update ezp balance

                var paramc = [
                  'passbook1',
                  'trans_date',
                  'remarks',
                  'debit',
                  'balance',
                  'tst',
                  CURRENT_TIMESTAMP,
                  'From '+`${sess.bznm}`+' for trans no'+m_tid,
                  m_tid,
                  sess.camt,
                  sess.tst,
                ];
                db.query(sqlc, paramc, function(err,dac) {
                  if (err) {
                    throw err
                  }
                  var or6 = 'orde'+sess.cus_id;
      
                  var sqli = 'INSERT INTO ?? (??, ??, ??,??, ??, ??, ??, ??) VALUES (?, ?, ?,?, ?, ?, ?, ?) '; // insert merchant order

                        var parami = [
                          or6,
                          'or_date',
                          'it_no',
                          'it_name',
                          'it_quantity',
                          'it_price',
                          'it_thumb',
                          'tba',
                          'snn',
                          CURRENT_TIMESTAMP,
                          `${'1'}`,
                          `${trnm}`,
                          `${'1'}`,
                            `${'1'}`,
                            `${'os0'}`,
                          m_tid,
                          `${'0'}`,
                        ];
                        
                        db.query(sqli, parami, function(err) {
                          if (err) {
                            throw err
                          }
                          var sqlinv = 'SELECT ?? AS trid, ?? as lnc,?? as tb2 FROM ?? WHERE ?? = ?'; //GET inventory

                          var parainv = [             
                            'trid',
                            'lnc',
                            'tb2',
                            'trktble'+sess.cus_id,
                            'nm',
                           trnm,
                          ];
                          db.query(sqlinv, parainv, function (err, resuinv, fields) {
                            if (err) {
                              throw err
                            }
                            var qua=resuinv[0].tb2;
                            var uqua= qua + '1';
                            var sqlinu = 'UPDATE ?? SET ?? = ? WHERE ?? = ?'; //update trkstt

                            var paranv = [
                              'trktble'+sess.cus_id,
                              'tb2',
                              uqua,
                              'trid',
                              trid
                            ];
                            db.query(sqlinu, paranv, function (err, resunv, fields) {
                              if (err) {
                                throw err
                              }
                          var or5='orde'+sess.logid;
       
                          var sqlib = 'INSERT INTO ?? (??, ??, ??,??, ??, ??, ??) VALUES (?, ?, ?,?, ?, ?, ?) '; // inseert buyer dets

                          var paramib = [
                            or5,
                            'or_date',
                            'it_no',
                            'it_name',
                            'it_quantity',
                            'it_price',
                            'it_thumb',
                            'tba',
                            CURRENT_TIMESTAMP,
                            `${'1'}`,
                            `${trnm}`,
                            `${'1'}`,
                            `${amt}`,
                            `${'os0'}`,
                             b_tid,
                          ];
                       
                          
                          
                            db.query(sqlib, paramib, function(err) {
                             if (err) {
                               throw err
                             }
                            

                        

               
             

               
              
                
                      
                      
                  


      
        
   
    
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
  var home = 'sendy';
  var title ='checkout';
  //var usrnv= [{bbtn:ezp.btns[sess.ln],kino:counto,addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln]}]
  //sess.usrnv=usrnv
if (sess.btnm) {
var bt ='btnm';
} else if(sess.btnd) {
var bt='btnd';
}
if (sess[bt].veri==0) {
  veri='nveri';
} else if (sess[bt].veri==1) {
  veri='veri';
}
if (req.body.lnc) {
  var lnc=req.body.lnc;
  var linkk ='lnc'
} else {
  var lnc=false;
  var linkk ='nlnc'
}
  if (sess.bz==true) {
    var bnz='bz';
    } if (sess.usr==true){
    var bnz='usr';
    } if (!pp) {
    var pp='lst';
    } else if(pp.length>0)
    {var pp =pp} var tyEr;
  tyEr ={[linkk]:lnc,[veri]:true,[bt]:sess[bt],shpk:ezp.shpk[sess.ln],p:'01',withd:ezp.withd[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],infb:ezp.infb[sess.ln],
      
      task:ezp.task[sess.ln], tran:ezp.transactions[sess.ln], [sess.ln]:true,[bnz]:true,or:ezp.orders[sess.ln],
      [ppt]:true, [pp]:true,[gent]:true, 
      title: title,[ezp.bnk]:true,bunm:sess.bunm, bznm:sess.bznm,sphn:sess[bt].bzphn,bzmail:sess[bt].bzemail,mtid:sess.m_tid,pnh:sess.pnh,[bt]:sess[bt],adrr:sess[bt].adrr}
      //res.send(tyre){bunm:sess.bunm, bznm:sess.bznm,sphn:sess[bt].bzphn,bzmail:sess[bt]..bzemail,mtid:sess.m_tid,pnh:sess.pnh,[bt].:sess[bt].,adrr:sess[bt]..adrr}
      res.render(home, tyEr);
  })
})
})
})
  })}
  }) 
  
}
})
  } 
  else{
    req.session.errp='Insufficient balance!';
    res.redirect('logx/err');
    res.end();
 } 
 


}


})
})

} else {
res.json({msg:'wrong pin'})
res.end();
}
    //res.send(sess.btnm)
  })
      
      
}
})
  } 
  })
    
} else if (mapt.typ ==='d'){
 
var mi9 = mapt.uuid;
var pinx = mapt.pin;

  
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
  db.query(sqldn, paradn, function (err, resuldn, fields) {
    var pind = resuldn[0].pin;
    var bnme = resuldn[0].bnme;
  
        if (hash === pind) {
         // res.render('sendz')
          var dnpd = 'passbook'+sess.logid;
          
          var sqlndr = 'SELECT ?? AS trans_id, ?? as balance FROM ?? ORDER BY `trans_id` DESC'; //GET buyer balance

          var parandr = [             
            'trans_id',
            'balance',
           dnpd
          ];
          db.query(sqlndr, parandr, function (err, resr, fields) {
            var dbal = resr[0].balance;
           
            
            var udbal = dbal - sess.btnmd.damt;
            if (dbal > sess.btnmd.damt) {
              
           
          var dnpb = 'passbook'+sess.btnmd.mm;
          
          var sqlndd = 'SELECT ?? AS trans_id, ?? as balance FROM ?? ORDER BY `trans_id` DESC'; //GET buyer balance

          var parandn = [             
            'trans_id',
            'balance',
           dnpb
          ];
          db.query(sqlndd, parandn, function (err, resd, fields) {
            var badn = resd[0].balance;
            var cdamt = ([sess.btnmd.damt*3]/100);
            var fdamt = sess.btnmd.damt - cdamt;
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
  'Donated from '+`${sess.btnmd.donm}`+' for don. ID'+sess.btnmd.dnid,
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
        'Donated to '+`${sess.btnmd.dnm}`+' for don. ID'+sess.btnmd.dnid,
        sess.btnmd.damt,
        udbal,
        sess.tst,
      ];
      db.query(sqlddn, pamt, function (err, red, fields) {
        if (err) throw err;
        if (!err)
        var sqlddr = 'INSERT INTO ?? (??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?)';     //update ezpay balance

        var pamtr = [
          'passbook1',
          'trans_date',
          'remarks',
          'debit',
          'balance',
          'tst',
          CURRENT_TIMESTAMP,
          'Donated to '+`${sess.btnmd.dnm}`+' for don. ID'+sess.btnmd.dnid,
          sess.btnmd.damt,
          udbal,
          'sess.tst',
        ];
        
        db.query(sqlddr, pamtr, function (err, redd, fields) {
          if (!err)

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
          var home = 'sendd';
          var title ='checkout';
          //var usrnv= [{bbtn:ezp.btns[sess.ln],kino:counto,addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln]}]
          //sess.usrnv=usrnv
        if (sess.btnm) {
        var bt ='btnm';
        } else if(sess.btnd) {
        var bt='btnd';
        } else if(sess.btnmd) {
          var bt='btnmd';
          }
        if (sess[bt].veri==0) {
          veri='nveri';
        } else if (sess[bt].veri==1) {
          veri='veri';
        }
        else if (!sess[bt].veri) {
          veri='Unverified';
        }
        if (req.body.lnc) {
          var lnc=req.body.lnc;
          var linkk ='lnc'
        } else {
          var lnc=false;
          var linkk ='nlnc'
        }
          if (sess.bz==true) {
            var bnz='bz';
            } if (sess.usr==true){
            var bnz='usr';
            } if (!pp) {
            var pp='lst';
            } else if(pp.length>0)
            {var pp =pp} var tyEr;
          tyEr ={[linkk]:lnc,[veri]:true,[bt]:sess[bt],shpk:ezp.shpk[sess.ln],p:'01',withd:ezp.withd[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],infb:ezp.infb[sess.ln],
              
              task:ezp.task[sess.ln], tran:ezp.transactions[sess.ln], [sess.ln]:true,[bnz]:true,or:ezp.orders[sess.ln],
              [ppt]:true, [pp]:true,[gent]:true, 
              title: title,[ezp.bnk]:true}
              //res.send(tyre){bunm:sess.bunm, bznm:sess.bznm,sphn:sess[bt].bzphn,bzmail:sess[bt]..bzemail,mtid:sess.m_tid,pnh:sess.pnh,[bt].:sess[bt].,adrr:sess[bt]..adrr}
              res.render(home, tyEr);

         // res.render('sendd',{btnmd:btnmd}) 
          
         // else throw err
        })
      })
    })
  
  
  })
  
} else if (dbal < sess.btnmd.damt){
  res.render('sendy')            
}

})
  
} else {

  res.render('sendz')      
}
})

})

}
else if (mapt.typ ==='p'){
 
  var mi9 = mapt.uuid;
  var pinx = mapt.pin;
  var eid =mapt.eid;
    
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
    db.query(sqldn, paradn, function (err, resuldn, fields) {
      if (!err) 
       try {
      
      var pind = resuldn[0].pin;
      var bnme = resuldn[0].bnme;
    
          if (hash === pind) {
           // res.render('sendz')
            var dnpd = 'passbook'+sess.logid;
            
            var sqlndr = 'SELECT ?? AS trans_id, ?? as balance FROM ?? ORDER BY `trans_id` DESC'; //GET buyer balance
  
            var parandr = [             
              'trans_id',
              'balance',
             dnpd
            ];
            db.query(sqlndr, parandr, function (err, resr, fields) {
              var dbal = resr[0].balance;
             
              
              

              var dnpy = 'pyr'+sess.logid;

                var sqlnpr = 'SELECT ?? AS pyid, ?? AS nm,?? as amtd,?? as eid FROM ?? ORDER BY `pyid` DESC';
                var pyr = [             
                  'pyid',
                  'nm',
                  'amtd',
                  'eid',
                 dnpy
                ]; 
                  
              db.query(sqlnpr, pyr, function (err, resp, fields) {
                var yty =[];
                var sqlnprc = 'SELECT COUNT(??) as pyid FROM ??';
                var pyc = [             
                  'pyid',
                  
                 dnpy
                ]; 
               
              //res.send({totalSY})
              
              //  db.query(sqlnprc, pyc, function (err, respc, fields) {
               //var noemp = respc[0];
              /* for (let i = 1; i < noemp; i++) {
                 var j = i^1;
                 const element = resp[i].amt ^ resp[j].amt  ;
                 
               }

               for( var j=1;j<noemp;j++){
               var totl0 = '0';
               var totl =resp[j].amt ^ totl0;
              } */
          
              
              var udbal = dbal - resp[0].amtd;
              sess.udbal=udbal;
               if (mapt.psng ==='1') {
                var sqltt = 'SELECT * FROM ?? WHERE ?? = ? ORDER BY `pyid` DESC';
                var pyrr = [             
                 
                 dnpy,
                 'eid',
                 eid
                ]; db.query(sqltt, pyrr, function (err, rett, fields) {
      var cv =[]          
rett.forEach(x => {
 cv.push(Number(x.amtd))
});        function reduceFun1(previousValue, currentValue, index, array){
  return previousValue + currentValue;
}
 //var dbald = Number(dbal);
 var totalSY = cv.reduce(reduceFun1);


              if (totalSY < dbal) {
                var dnpj = 'pyr'+sess.logid;

                var sqlnprq = 'SELECT ?? AS pyid, ?? AS nm,?? as amtd,?? as eid FROM ??  WHERE ?? = ? ORDER BY `pyid` DESC';
                var pyrq = [             
                  'pyid',
                  'nm',
                  'amtd',
                  'eid',
                 dnpj,
                 'eid',
                 eid,
                ]; 
                  
              db.query(sqlnprq, pyrq, function (err, respt, fields) {
                
                var yty =[];
                var sqlnprc = 'SELECT COUNT(??) as pyid FROM ??';
                var pyc = [             
                  'pyid',
                  
                 dnpy
                ]; 
                
                  // res.send(resp)
                    
                 
                var dnpb = 'passbook'+eid;
                
                var sqlndd = 'SELECT ?? AS trans_id, ?? as balance FROM ??   ORDER BY `trans_id` DESC '; //GET buyer balance
      
                var parandn = [             
                  'trans_id',
                  'balance',
                 dnpb
                ];
                db.query(sqlndd, parandn, function (err, resd, fields) {
                  if (!err)
                  var badn = resd[0].balance;
                  var cdamt = (respt[0].amtd*3/100);
                  var fdamt = respt[0].amtd - cdamt;
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
        'Payment from '+`${resuldn[0].bnme}`+' for month of'+eid,
        fdamt,
        ubadn,
        sess.tst,
      ];
          db.query(sqldmm, pamm, function (err, resh, fields) {
            if (err) throw err;
            var dnpdh = 'passbook'+sess.logid;
            
            var sqlddn = 'INSERT INTO ?? (??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?)';     //update donnor balance
      
            var pamt = [
              dnpdh,
              'trans_date',
              'remarks',
              'debit',
              'balance',
              'tst',
              CURRENT_TIMESTAMP,
              'Payed to '+`${respt[0].nm}`,
              respt[0].amt,
              udbal,
              sess.tst,
            ];
            db.query(sqlddn, pamt, function (err, red, fields) {
              if (err) throw err;
              if (!err)
              var sqlddr = 'INSERT INTO ?? (??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?)';     //update ezpay balance
      
              var pamtr = [
                'passbook1',
                'trans_date',
                'remarks',
                'debit',
                'balance',
                'tst',
                CURRENT_TIMESTAMP,
                'Payedd to '+`${resp['nm']}`,
                resp['amt'],
                udbal,
                sess.tst,
              ];
              
              db.query(sqlddr, pamtr, function (err, redd, fields) {
                if (!err)
      
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
                var home = 'sendp';
                var title ='Payroll';
                //var usrnv= [{bbtn:ezp.btns[sess.ln],kino:counto,addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln]}]
                //sess.usrnv=usrnv
              if (sess.btnm) {
              var bt ='btnm';
              } else if(sess.btnd) {
              var bt='btnd';
              } else if(sess.btnmd) {
                var bt='btnmd';
                }
              
              if (req.body.lnc) {
                var lnc=req.body.lnc;
                var linkk ='lnc'
              } else {
                var lnc=false;
                var linkk ='nlnc'
              }
                if (sess.bz==true) {
                  var bnz='bz';
                  } if (sess.usr==true){
                  var bnz='usr';
                  } if (!pp) {
                  var pp='lst';
                  } else if(pp.length>0)
                  {var pp =pp} var tyEr;
                
                  tyEr ={[linkk]:lnc,[bt]:sess[bt],shpk:ezp.shpk[sess.ln],p:'01',withd:ezp.withd[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],infb:ezp.infb[sess.ln],
                    
                  task:ezp.task[sess.ln], tran:ezp.transactions[sess.ln], [sess.ln]:true,[bnz]:true,or:ezp.orders[sess.ln],
                  [ppt]:true, [pp]:true,[gent]:true, 
                  title: title,[ezp.bnk]:true}
                  //res.send(tyre){bunm:sess.bunm, bznm:sess.bznm,sphn:sess[bt].bzphn,bzmail:sess[bt]..bzemail,mtid:sess.m_tid,pnh:sess.pnh,[bt].:sess[bt].,adrr:sess[bt]..adrr}
                 res.render(home, tyEr);
               //  res.send(resp)
               // res.render('sendd',{btnmd:btnmd}) 
                
               // else throw err
              })
            })
          })
        
        
        })
     // 
     
      })
        
      
    }})


               } else {
                 
                var sqltt = 'SELECT * FROM ?? ORDER BY `pyid` DESC';
                var pyrr = [             
                 
                 dnpy
                ]; db.query(sqltt, pyrr, function (err, rett, fields) {
                  if(!err)
                  try{
                 
      var cv =[]          
rett.forEach(x => {
 cv.push(Number(x.amtd))
});        function reduceFun1(previousValue, currentValue, index, array){
  return previousValue + currentValue;
}
 //var dbald = Number(dbal);
var totalSY = cv.reduce(reduceFun1);


              if (totalSY < dbal) {
                resp.forEach(pyrr => {
                  
                 // var summ= ['totl'+noemp];
                  var udbal = dbal - pyrr['amtd'];
                  
              if ('1'==='1') {
                
              // res.send(resp)
                
             
            var dnpb = 'passbook'+pyrr['eid'];
            
            var sqlndd = 'SELECT ?? AS trans_id, ?? as balance FROM ?? ORDER BY `trans_id` DESC'; //GET buyer balance
  
            var parandn = [             
              'trans_id',
              'balance',
             dnpb
            ];
            db.query(sqlndd, parandn, function (err, resd, fields) {
              if(!err)
            
              var badn = resd[0].balance;
              var cdamt = (pyrr['amtd']*3/100);
              var fdamt = pyrr['amtd'] - cdamt;
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
    'Payment from '+`${sess.logid}`+' for month of'+pyrr['eid'],
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
          'Payed to '+`${pyrr['nm']}`,
          pyrr['amtd'],
          udbal,
          sess.tst,
        ];
        db.query(sqlddn, pamt, function (err, red, fields) {
          if (err) throw err;
          if (!err)
          var sqlddr = 'INSERT INTO ?? (??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?)';     //update ezpay balance
  
          var pamtr = [
            'passbook1',
            'trans_date',
            'remarks',
            'debit',
            'balance',
            'tst',
            CURRENT_TIMESTAMP,
            'Payed to '+`${pyrr['nm']}`,
            pyrr['amtd'],
            udbal,
            'sess.tst',
          ];
          
          db.query(sqlddr, pamtr, function (err, redd, fields) {
            if (!err)
  
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
            var home = 'sendp';
            var title ='Payroll';
            //var usrnv= [{bbtn:ezp.btns[sess.ln],kino:counto,addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln]}]
            //sess.usrnv=usrnv
          if (sess.btnm) {
          var bt ='btnm';
          } else if(sess.btnd) {
          var bt='btnd';
          } else if(sess.btnmd) {
            var bt='btnmd';
            }
          
          if (req.body.lnc) {
            var lnc=req.body.lnc;
            var linkk ='lnc'
          } else {
            var lnc=false;
            var linkk ='nlnc'
          }
            if (sess.bz==true) {
              var bnz='bz';
              } if (sess.usr==true){
              var bnz='usr';
              } if (!pp) {
              var pp='lst';
              } else if(pp.length>0)
              {var pp =pp} var tyEr;
            
              tyEr ={[linkk]:lnc,[bt]:sess[bt],shpk:ezp.shpk[sess.ln],p:'01',withd:ezp.withd[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],infb:ezp.infb[sess.ln],
                
              task:ezp.task[sess.ln], tran:ezp.transactions[sess.ln], [sess.ln]:true,[bnz]:true,or:ezp.orders[sess.ln],
              [ppt]:true, [pp]:true,[gent]:true, 
              title: title,[ezp.bnk]:true}
              //res.send(tyre){bunm:sess.bunm, bznm:sess.bznm,sphn:sess[bt].bzphn,bzmail:sess[bt]..bzemail,mtid:sess.m_tid,pnh:sess.pnh,[bt].:sess[bt].,adrr:sess[bt]..adrr}
             res.render(home, tyEr);
           //  res.send(resp)
           // res.render('sendd',{btnmd:btnmd}) 
            
           // else throw err
          })
        })
      })
    
            
    })
 // 
 

    
  } else if (dbal < sess.btnmd.damt){
    res.render('sendy')            
  }
})}
} catch (err){
  
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
  var home = 'sendp';
  var title ='Payroll';
  //var usrnv= [{bbtn:ezp.btns[sess.ln],kino:counto,addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln]}]
  //sess.usrnv=usrnv
if (sess.btnm) {
var bt ='btnm';
} else if(sess.btnd) {
var bt='btnd';
} else if(sess.btnmd) {
  var bt='btnmd';
  }

if (req.body.lnc) {
  var lnc=req.body.lnc;
  var linkk ='lnc'
} else {
  var lnc=false;
  var linkk ='nlnc'
}
  if (sess.bz==true) {
    var bnz='bz';
    } if (sess.usr==true){
    var bnz='usr';
    } if (!pp) {
    var pp='lst';
    } else if(pp.length>0)
    {var pp =pp}
  
  tyE ={err:err,[linkk]:lnc,[bt]:sess[bt],shpk:ezp.shpk[sess.ln],p:'01',withd:ezp.withd[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],infb:ezp.infb[sess.ln],
                
  task:ezp.task[sess.ln], tran:ezp.transactions[sess.ln], [sess.ln]:true,[bnz]:true,or:ezp.orders[sess.ln],
  [ppt]:true, [pp]:true,[gent]:true, 
  title: title,[ezp.bnk]:true}
  //res.send(tyre){bunm:sess.bunm, bznm:sess.bznm,sphn:sess[bt].bzphn,bzmail:sess[bt]..bzemail,mtid:sess.m_tid,pnh:sess.pnh,[bt].:sess[bt].,adrr:sess[bt]..adrr}
 res.render(home, tyE);


}
})
}
 //});
})
  })
    
  } else {
  
    res.render('sendz')      
  }//
} catch (err){
  tyEx ={err:err,[linkk]:lnc,[bt]:sess[bt],shpk:ezp.shpk[sess.ln],p:'01',withd:ezp.withd[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],infb:ezp.infb[sess.ln],
                
  task:ezp.task[sess.ln], tran:ezp.transactions[sess.ln], [sess.ln]:true,[bnz]:true,or:ezp.orders[sess.ln],
  [ppt]:true, [pp]:true,[gent]:true, 
  title: title,[ezp.bnk]:true}
  //res.send(tyre){bunm:sess.bunm, bznm:sess.bznm,sphn:sess[bt].bzphn,bzmail:sess[bt]..bzemail,mtid:sess.m_tid,pnh:sess.pnh,[bt].:sess[bt].,adrr:sess[bt]..adrr}
 res.render(home, tyEx);

} })
  
  })
  
  }
})




module.exports = router;

