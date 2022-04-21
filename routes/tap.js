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
    var sqlx = 'SELECT * FROM ?? WHERE ?? = ?';         //Get merchant name
  var paramt = [
    
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
                  var ccid= resul[0].cust_id;
                  var ccid = JSON.parse(ccid);
                  var pnhx= req.session.phnt;
                  var ccx= req.session.ccid;
                  res.json({msg:'success',resul:resul[0], fnm:fnm, lnm:lnm, pnhx:pnhx, ccid:ccid});
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
    var nmx = req.body.nme;
    var cci = req.body.ccid;
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
              var pay = 'pyr'+req.session.logid;
              var sqlpp = 'INSERT INTO ?? (??, ??, ??) VALUES (?, ?, ?) ';     //update buyer balance

                var ppp = [
                  pay,
                  'nm',
                  'amt',
                  'eid',
                  nmx,
                  amtx,
                  cci,
                  
                ];
                db.query(sqlpp, ppp, function(error,pyr) {
if (!error){
  res.redirect('../user/payroll');
} else {
  res.send('failed!');
}

                })


   
        
    }
  })
}
});

});

module.exports = router;