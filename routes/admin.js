var express = require('express');
var cors=require("cors");
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var mysqli = require('mysqli'); 
var cons= require('../constants');
var db=require('../databse');
var app = express();
//var check = require('express-validator')(alidationResult);
var hash = require('pbkdf2-password')()
var path = require('path');
var session = require('express-session');
const { check, validationResult } = require('express-validator');
const json = require('body-parser/lib/types/json');
//const json = require('body-parser/lib/types/json');
var urlencodedparser = bodyparser.urlencoded({  extended: false});
var MySQLStore = require('express-mysql-session')(session);
var urlencodedparser = bodyparser.urlencoded({  extended: false});
var fs = require('fs');
var schemaFilePath = path.join(__dirname, 'schema.sql');
var app = express();

//app.use(bodyParser.urlencoded({ extended: false }));

router.use(express.json());
//router.use(bodyparser.json());


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




var sess;
router.post('/', function(req, res, next) {
 
sess = req.session;
//sess.isvalid = false;
  var map=req.body;
  var email = map.email;
  var pass = map.password;
  
  //var sess=req.session;
   

  var phg;
  var cid;
 var sql=db.query('SELECT * FROM customer WHERE email = ?', [email], function (err, data, fields) {
  
  console.log(sql);
 cid =data[0].cust_id;
  var passw =data[0].pwd;
  phg =data[0].gender; // get recievr id

   if (pass === passw ) {
sess.isvalid = true;
sess.ssid = req.session.id;
//sessionStore.close();
  
sess.logid = JSON.parse(cid);
sess.email = email;
app.set('sesslogId', sess.logid);

var pa6= 'passbook'+sess.logid;

  
db.query('SELECT * FROM ?? ORDER BY `trans_id` DESC ', [pa6], function (err, dat, fields) {
  
  var or= 'orde'+sess.logid;

  
db.query('SELECT * FROM ?? ORDER BY `or_id` DESC ', [or], function (err, da, fields) {
    
    
    
    
    	
    		
    if (err) throw err;

   //res.send(cid);

   //
 
var options = cons.options;


var MySQLStore = require('express-mysql-session')(session);


var sessionConnection = mysql.createConnection(options);
//var sessionStore = new MySQLStore(options);


var sessionStore = new MySQLStore({
    expiration: 10800000,
    usrid: cid,
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



    
//sessionStore.close();
    //res.render('cards', { req.session.id });
     res.redirect('dashboard');
     //res.render('cards', { title: 'User List', userData: data[0], passData: dat[0], orderData: da[0]});
      //res.render('cards', { usrid: cid});
      }); 
        
});


    //res.json(sess.id);
    } else { 
      
      //sessionStore.close();
       
      res.redirect('/');  

    }
      //res.send(cid);
 });

});

router.get("/logout", (req, res) => {
  req.session.destroy(err => {
      if (err) {
          return console.log(err);
      }
      res.redirect("/admin");
  });
});
router.get("/online", (req, res) => {
  
  
  db.query('SELECT * FROM sstbl',  function (err, das, fields) {
    if(!err==true){
      //throw err
      try {
        var inf =[];
     das.forEach(element => {
      JSON.parse(`${element.data}`);
      inf.push(JSON.parse(`${element.data}`))
      //inf.push(`${elemen},${elemen.logid}`);
     });
     //var das = JSON.parse(das);
     var dats =[];
     inf.forEach(elemen => {
       dats.push({"logid":elemen.logid,
       "email":elemen.email,
       "das":elemen.ssid
      });
     });
     res.render('online',{ dats:dats});
    } catch (err) {
      res.render('online',{ erro:'No session if found!'});
        console.log(err); 
        //req.session.phnt = false;
          res.json({msg:'error'})
         // res.end()
        
    }
      
    }
    
   
     //var inf = datas[0].data.logid;
  //res.render('online',{ dats:dats});
   // res.send({dats});
  });
  
});
router.get("/history", (req, res) => {
  var bod= req.body;
    var ssid = 'XgEpTmyY4V4oy_8x5oxdqWFONk1Ahawo';
  db.query('SELECT * FROM sstbl2 WHERE `session_id` = ? ',[ssid],  function (err, dah, fields) {
    
    //var intime= dah[0].expires;
    var infh =[];
     dah.forEach(eleme => {
      
      
      infh.push(JSON.parse(eleme.data))
     infh.push({"in":eleme.expires,
     "ss_id":eleme.ss_id});
      //inf.push(`${elemen},${elemen.logid}`);
     });
     //var das = JSON.parse(das);
     var datz =[];
     infh.forEach(elem => {
       datz.push({"logid":elem.logid,
       "email":elem.email,
       "in":elem.in,
       "das":elem.ssid,
       "ss_id":elem.ss_id
       
      });
     });
     //var inf = datas[0].data.logid;
  //res.render('history',{ datz:datz});
    res.send(datz);
  });
  
});

router.post("/dashboard", (req, res) => {
 
 
var sessionStore = new MySQLStore(cons.options);
  router.use(session({
    key: cons.ses.keyad,
    secret: cons.ses.secreta,
    store: sessionStore,
    resave: cons.ses.resave,
    saveUninitialized: cons.ses.saveUninitialized
  }));
  sess = req.session;
//sess.isvalid = false;
  var mapx=req.body;
  var unamea = mapx.emaila;
  var passad = mapx.passworda;
  
  
  

  var phg;
  var cid;
 db.query('SELECT * FROM admin WHERE uname = ?', [unamea], function (err, daa, fields) {
  
  if (!sess.isvalid) {
    
   /* if (sess.isadminvalid == true) {
      var parss = [
        'sstbl',
        'status',
        '0',
        'session_id',
        sess.id
        ];
      db.query('UPDATE ?? SET ?? = ? WHERE ?? = ?',[parss] ,function (err, resss, fields) {  
      
    
     if (err) throw err;  
    });
  } */
 
  var passwd =daa[0].pwd;
  
  
  if (passad == passwd) {
    sess.isadminvalid = true;
      
   db.query('SELECT * FROM customer ', function (err, datas, fields) {
      
    
    res.render('admin-dashboard',{datas:datas});
    //res.send(inf);
    
  });

  }
   
} else {
  res.render('admin',{msg:'Please logout of user account!'});  
} 
});

});
router.get("/dashboard", (req, res) => {
  var sessionStore = new MySQLStore(cons.options);
  router.use(session({
    key: cons.ses.keyad,
    secret: cons.ses.secreta,
    store: sessionStore,
    resave: cons.ses.resave,
    saveUninitialized: cons.ses.saveUninitialized
  }));
  sess = req.session;
//sess.isvalid = false;
  var mapx=req.body;
  var unamea = mapx.emaila;
  var passad = mapx.passworda;
  
  
  

  var phg;
  var cid;
  db.query('SELECT * FROM customer ', function (err, datas, fields) {
  
  if (!sess.isvalid) {
    
  
 
    res.render('admin-dashboard',{datas:datas});
  
  
} else {
  res.render('admin',{msg:'Please logout of user account!'});  
} 
});

});
router.get("/view/:id", (req, res) => {
 var ciid = req.params.id;
 var sessionStore = new MySQLStore(cons.options);
 router.use(session({
   key: cons.ses.keyad,
   secret: cons.ses.secreta,
   store: sessionStore,
   resave: cons.ses.resave,
   saveUninitialized: cons.ses.saveUninitialized
 }));
  sess = req.session;
//sess.isvalid = false;
  var mapx=req.body;
  var unamea = mapx.emaila;
  var passad = mapx.passworda;
  
  
  

  var phg;
  var cid;
  db.query('SELECT * FROM customer WHERE cust_id = ?',[ciid], function (err, datas, fields) {
  
  if (!sess.isvalid) {
    
  
 
    res.render('admin',{datas:datas});
  
  
} else {
 // res.render('admin',{msg:'Please logout of user account!'});  
} 
});

});
router.post('/signup',urlencodedparser, 

  

    [
     
        check('fname','Use alphabets only')
        .isAlpha()
        .isLength({max: 30})
        .withMessage(
          'max of 30 chracters',
         
        ),
        //.withMessage('Name is required'),
        check('mail').isEmail()
        .withMessage(
          'Not an email',
         
        ),

        


        check('password')
    .not()
    .isIn(['123', 'password', 'god'])
    .isLength({ min: 5 })
    .withMessage(
       'The password must be 5+ chars long and contain a number'    
   )
    
    .matches(/\d/),
  
    
  
       

            
            
            
            check('pin', 'The pin must be 4 valus long and can only contain numbers.')
            .isNumeric()
            
            
            .isLength({max: 4,min: 4})
            .withMessage(
               'Pin must be 4 number valus.',
             
            )
            
            .matches(/\d/),
            
            check('phno', 'only use number values')
            .isNumeric()
            //.isMobilePhone()
            .withMessage(
               'Input a valid mobile phone number',
             
            )
            
            .matches(/\d/),
    ],
    
            (req, res) => {
             
              const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
                // Build your resulting errors however you want! String, object, whatever - it works!
                return `${location}[${param}]: ${msg}`;

            };  
            const {validationResult } = require('express-validator');
        var errors = validationResult(req).array();
        var errorx = validationResult(req).mapped();
        
        
        if (errors.length!=0) {
            req.session.errors = errors;
           req.session.success = false;
            //res.send(errors);

            
        res.send(errors);
          //res.end();
        // res.render('sign-up', { success: req.session.success, errors: errorx });
         //req.session.errors = null;
   req.session.errors = null;
           //res.send(errors);
            
        } else {
            req.session.success = true;

            var sqlx = 'INSERT INTO customer (??, ??, ??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ';
            var param = [
              'first_name',
              'last_name',
              'gender',
              'dob',
              'email',
              'phone_no',
              'pin',
              'uname',
              'pwd',
              /*'aadhar_no',
              
              
              'address',
              'branch',
              'account_no',
              
              'business',*/

              req.body.fname,
              req.body.lname,
              req.body.gender,
              req.body.dob,
              req.body.mail,
              req.body.phno,
              req.body.pin,
              req.body.uname,
              req.body.password,
              /*req.body.aadhar_no,
              
              
              req.body.addr1,
              req.body.branch,
              req.body.account_no,
             
              req.body.business,*/
              
            ];
            db.query(sqlx, param, function (err, result, fields) {
            var erm =[];
               //throw err
               if (err.code == 'ER_DUP_ENTRY') {
                console.log(err.offset)
                //var ern =JSON.stringify(err);
                //var erno= err.errno;
                //erm.push({er:erno});
                // req.session.erm=ern;
               // res.render(erm);
               }
             
             
              else if (!err) {
                var par; var or;
               //throw err('Failed to create customer.');
             par = 'passbook'+result.insertId;
              or = 'orde'+result.insertId;
                //return db.query(sql, params);
              } else{
                
                }
            var fs = require('fs');
		        var schemaFilePath = path.join(__dirname, 'schema.sql');

            fs.readFile(schemaFilePath, 'utf-8', function(error, sql) {
  
              sql = sql.replace(/`[^`]+`/g, '??');

              var params = [
                par,
                'trans_id',
                'trans_date',
                'remarks',
                'debit',
                'credit',
                'balance',
                'trans_id',
              ];
             
              db.query(sql, params, function(err) {
                var erro= [];
                if (err) {
                  //throw error('Failed to create sessions database table.');
                  
                 erro.push(err);
                  //return db.query(sql, params);
                } else { var errt; req.session.errt ='error 902'; }
                var schemaorder = path.join(__dirname, 'schemao.sql');
                fs.readFile(schemaorder, 'utf-8', function(error, sqlt) {
  
                  sqlt = sqlt.replace(/`[^`]+`/g, '??');
    
                  var para = [
                    or,
                    'or_id',
                    'or_date',
                    'it_no',
                    'it_name',
                    'it_quantity',
                    'it_price',
                    'it_thumb',
                    'tba',
                    'or_id',
                  ];
                 
                  db.query(sqlt, para, function(error) {
    
                    if (error) {
                      //throw error('Failed to create sessions database table.');
                     var errorr; req.session.errorr='error 903';
                      //return db.query(sql, params);
                    }
            
                    
                  })
    
                })
                
              })

            })
          })
    
          res.send(req.session.msgg);
           // res.redirect('/');
            
        }

   
});    
 
// handler for the /user/:id path, which prints the user ID


/* GET home page. */



module.exports = router;

