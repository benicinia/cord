var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var db=require('../databse');
var $           = require('jquery');
var ajax           = require('ajax');  
const { parseUrl } = require('mysql/lib/ConnectionConfig');
var session = require('express-session');
var ezp=require('../constants');
const json = require('body-parser/lib/types/json');
const Connection = require('mysql/lib/Connection');
const { DATETIME, YEAR } = require('mysql/lib/protocol/constants/types');
//const { JSON } = require('mysql/lib/protocol/constants/types');
var MySQLStore = require('express-mysql-session')(session);
var urlencodedparser = bodyparser.urlencoded({  extended: false});
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
  

router.post('/mobile',(req,res)=>{
var phn = req.body.phon;
var sess;
sess = req.session;
sess.phnt = phn;


    
    res.json({msg:'success'});

    
});

router.get('/getnm/:phon', (req,res)=>{
  var phon = req.params.phon;
  
  var pp = '0925555845';    
    var sqlx = 'SELECT ?? AS first_name, ?? as last_name FROM ?? WHERE ?? = ?';         //Get merchant name
  var paramt = [
    'first_name',
    'last_name',
    'customer',
    'phone_no',
    phon
  ];
  db.query(sqlx, paramt, function (err, resul, fields) {
          //console.log(resul[0].email);
         
         
              if(!err==true){
                //throw err
                try {
                 var fnm;
                   fnm=resul[0].first_name;
                  var lnm= resul[0].last_name;
                  var pnhx= req.session.phnt;
                  res.json({msg:'success', fnm:fnm, lnm:lnm, pnhx:pnhx});
                  //res.redirect('/');
              } catch (err) {
                 
                  console.log(err); 
                  //req.session.phnt = false;
                    res.json({msg:'error'})
                   // res.end()
                  
              }
                
              }
          });
  
});

router.post('/pay',(req,res)=>{
  var sessionStore = new MySQLStore(ezp.options);
  router.use(session({
    key: ezp.ses.key,
    secret: ezp.ses.secret,
    store: sessionStore,
    resave: ezp.ses.resave,
    saveUninitialized: ezp.ses.saveUninitialized
  }));
    var amtx = req.body.amt;
    var pinx = req.body.pint;
    var pa = 'customer';
    req.session.errs='Wrong pin entered!';
    var sqlw = 'SELECT ?? AS uname,?? AS phone_no,?? AS email, ?? as pin FROM ?? WHERE ?? = ?';      //Get reciever name & id 
    var paraw = [
      'uname',
      'phone_no',
      'email',
      'pin',
      'customer',
      'cust_id',
      req.session.logid
    ];
    db.query(sqlw, paraw, function(error,daw) {
        var pin;
        var snme =daw[0].uname;
        var snph =daw[0].phone_no;
        var snml =daw[0].email;
        console.log(daw[0].pin);
        if (!error) {
            pin = daw[0].pin;
            var bod = {
             pin: pinx 
            };
            
            hash({ password: pinx, salt:'ezz' }, function (err, pass, salt, hash) {
              if (err) throw err;
              // store the salt & hash in the "db"
              pinx.salt = salt;
              pinx.hash = hash;
              if (hash !== `${pin}`) {
              
              req.session.errs='Wrong pin entered!'
              
              res.redirect('../send/err');
              res.end();
            
            } else{

                var sqly = 'SELECT ?? AS cust_id,?? AS phone_no,?? AS email, ?? as uname FROM ?? WHERE ?? = ?';      //Get reciever name & id 
                var param = [
                  'cust_id',
                  'phone_no',
                  'email',
                  'uname',
                  pa,
                  'phone_no',
                  req.body.phnt
                ];

    db.query(sqly, param, function(error,da) {
        var pa6;
        
        var usri;
       var rnme = da[0].uname;
       var rphn = da[0].phone_no;
       var rml =da[0].email;
          usri = da[0].cust_id;
          pa6 = 'passbook'+usri;
          var sqlz = 'SELECT ?? AS trans_id, ?? as balance FROM ?? ORDER BY `trans_id` DESC'; //Get reciever balance
          var par = [             
            'trans_id',
            'balance',
            pa6
          ]; 
        
          db.query(sqlz, par, function(error,daz) {
            
            var pa5 = 'passbook'+req.session.logid;
            
            
             var recb = daz[0].balance;
             
              var sqla = 'SELECT ?? AS trans_id, ?? as balance FROM ?? ORDER BY `trans_id` DESC'; //Get reciever balance
              var pard = [             
                'trans_id',
                'balance',
                pa5
              ]; 
            
              db.query(sqla, pard, function(error,daa) {
            if (!error) {
                var sbal = daa[0].balance;
                if (amtx > sbal) {
                    req.session.errs='Insufficient balance!';
                    res.redirect('../send/err');
        res.end();
                }

                var up_recb = [sbal - amtx];
                var up_sbal = [recb + amtx];
                var CURRENT_TIMESTAMP = { toSqlString: function() { return 'CURRENT_TIMESTAMP()'; } };    

                var sqlt = 'INSERT INTO ?? (??, ??, ??, ??) VALUES (?, ?, ?, ?) ';     //update buyer balance

                var parr = [
                  pa5,
                  'trans_date',
                  'remarks',
                  'credit',
                  'balance',
                  CURRENT_TIMESTAMP,
                  'Recieved from '+`${snme}`,
                  amtx,
                  up_recb,
                  
                ];

                var sqlu = 'INSERT INTO ?? (??, ??, ??, ??) VALUES (?, ?, ?, ?) ';     //update buyer balance

                var paru = [
                  pa6,
                  'trans_date',
                  'remarks',
                  'credit',
                  'balance',
                  CURRENT_TIMESTAMP,
                  'Sent to '+`${rnme}`,
                  amtx,
                  up_sbal,
                  
                ];

            }
            else {
                res.json({msg:'error'});  
            }
            db.query(sqlt, parr, function(error,dar) {
                if (!error) {
                  var rtid = dar.insertId;
                db.query(sqlu, paru, function(error,dau) {
                if (!error)  {
                  var stid = dau.insertId;
                  var date =new Date(CURRENT_TIMESTAMP);
                  var dt  = Date(CURRENT_TIMESTAMP);
                // var dt = toDate(CURRENT_TIMESTAMP)
               //res.send({dt:dt,ab:true,snme:snme,snph:snph,snml:snml,rnme:rnme,rml:rml,rphn:rphn,amt:amtx,rtid:rtid,stid:stid})
                if (ezp.bnk==='ab') {
                  res.render('sendx',{dt:dt,ab:true,snme:snme,snph:snph,snml:snml,rnme:rnme,rml:rml,rphn:rphn,amt:amtx,rtid:rtid,stid:stid});
                } else if(ezp.bnk==='com') {
                  res.render('sendx',{dt:dt,com:true,snme:snme,snph:snph,snml:snml,rnme:rnme,rml:rml,rphn:rphn,amt:amtx,rtid:rtid,stid:stid});
                }
              }
                });
            }

            });
                });
            });
        
        });
        
    }
  })
}
});

});

module.exports = router;