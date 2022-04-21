var express = require('express');
var cors=require("cors");
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var mysqli = require('mysqli'); 
var db=require('../databse');
var app = express();
var cons =require('../constants');
var ezp =require('../constants');
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


// Configure mysql



//Configure session middleware
//Configuring Middleware



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


var sess;
router.post('/', function(req, res, next) {
  
sess = req.session;
if (sess.isvalid !== undefined || sess.isvalid !== null || sess.isvalid !=='') {
  


//sess.isvalid = false;
  var map=req.body;
  var email = map.email;
  var pass = map.password;
  var mid = sess.payn.phn;
  //var sess=req.session;
   

  var mnme;
  var cid;
  var pnh;
  var bod;
 var sql=db.query('SELECT * FROM customer WHERE email = ?', [email], function (err, data, fields) {
  var sql2=db.query('SELECT * FROM customer WHERE phone_no = ?', [sess.ph], function (err, dat, fields) {
  console.log(sql);
 cid =data[0].cust_id;
  var passw =data[0].pwd;
  
  bod = {
    pwd: pass,
    passw: passw 
  };
  hash({ password: bod.pwd, salt:'ezz' }, function (err, pass, salt, hash) {
    if (err) throw err;
    bod.pwd.salt = salt;
    bod.pwd.hash = hash;
   if (hash === passw ) {
sess.isvalid = true;
var gen = data[0].gender;
sess.gen=gen;
  var ln =data[0].lng;

  sess.ln=ln;
  var bz=data[0].business
  sess.bz=bz;
  var pp = data[0].pp;
  sess.pp =pp;
  mnme =data[0].uname;
  sess.mnme=mnme; // get recievr id
  pnh =data[0].phone_no;
  sess.pnh=pnh;
var bnme= dat[0].uname;
sess.bnme= bnme;
var veri=dat[0].veri;
req.session.veri= veri;
//sessionStore.close();
  sess.amt = sess.dt.amt;
sess.logid = JSON.parse(cid);
sess.email = email;
app.set('sesslogId', sess.logid);

var pa6= sess.payn['amt'];

  

    
    
    
    
    	
    		
    if (err) throw err;

   //res.send(cid);

   //
 

 //var payn = JSON.parse(sess.payn);

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
var home = 'land';
var title ='checkout';
//var usrnv= [{bbtn:ezp.btns[sess.ln],kino:counto,addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln]}]
//sess.usrnv=usrnv

if (sess.bz==true) {
  var bnz='bz';
  sess.bz=true;
  } if (sess.bz==false){
  var bnz='usr';
  sess.usr=true;
  } if (!pp) {
  var pp='lst';
  } else if(pp.length>0)
  {var pp =sess.pp} var tyEr;
  //res.send(lan)
 

  tyEr ={shpk:ezp.shpk[sess.ln],p:'01',withd:ezp.withd[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],infb:ezp.infb[sess.ln],
  
  task:ezp.task[sess.ln], tran:ezp.transactions[sess.ln], [sess.ln]:true,[bnz]:true,or:ezp.orders[sess.ln],
  [ppt]:true, [pp]:true,[gent]:true, 
  title: title,[ezp.bnk]:true,ph:sess.ph, nm:sess.nm, mnme: mnme, pnh:pnh, payn:sess.payn, bnme: sess.bnme}
  //res.send(tyre)
  res.render(home, tyEr);
//sessionStore.close();
    //res.render('cards', { req.session.id });
     //res.redirect('dashboard');
     //res.send(dt);
     
     
      //res.render('cards', { usrid: cid});
     
        



    //res.json(sess.payn);
    } else if (hash !== passw) { 
      
      //sessionStore.close();
     
      res.redirect('/');  

    }
      //res.send(cid);
 });
});
});
} else {
  res.redirect('/');
} 
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
  
    
  
       

            check('password')
           
            .custom((val, { req, loc, path }) => {
                if (val !== req.body.password2) {
                  throw new Error('Passwords do not match!')
                    //throw new Error({pw2msg:'Passwords do not match!'});
                    
                } else {
                    return value;
                }
            }),
            check('pin', 'The pin must be 4 valus long and can only contain numbers.')
            .isNumeric()
            
            
            .isLength({max: 4,min: 4})
            .withMessage(
               'Pin must be 4 number valus.',
             
            )
            
            .matches(/\d/),
            
            check('phno', 'only use number values')
            .isNumeric()
            .isMobilePhone()
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
        var errors = validationResult(req).mapped();
        
        
        if (!errors == false) {
            req.session.errors = json(errors);
           req.session.success = false;
            //res.send(errors);

            
        // res.send(errors);
          
         res.render('sign-up', { success: req.session.success, errors: (errors) });
         //req.session.errors = null;
   //req.session.errors = null;
           // res.send(errors);
            
        } else {
            req.session.success = true;

            var sqlx = 'INSERT INTO customer (??, ??, ??) VALUES (?, ?, ?) ';
            var param = [
              'first_name',
              'last_name',
              'gender',
              /*'dob',
              'aadhar_no',
              'email',
              'phone_no',
              'address',
              'branch',
              'account_no',
              'pin',
              'uname',
              'pwd',
              'business',*/

              req.body.fname,
              req.body.lname,
              req.body.gender,
             /* req.body.dob,
              req.body.aadhar_no,
              req.body.mail,
              req.body.phno,
              req.body.addr1,
              req.body.branch,
              req.body.account_no,
              req.body.pin,
              req.body.uname,
              req.body.password,
              req.body.business,*/
              
            ];
            db.query(sqlx, param, function (err, result, fields) {
              if (!err) {
                var par; var or;
               //throw err('Failed to create customer.');
             var par = 'passbook'+result.insertId;
              or = 'orde'+result.insertId;
                //return db.query(sql, params);
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
             
              db.query(sql, params, function(error) {

                if (error) {
                  throw error('Failed to create sessions database table.');
                 
                  //return db.query(sql, params);
                }
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
                      throw error('Failed to create sessions database table.');
                     
                      //return db.query(sql, params);
                    }
            
                    
                  })
    
                })
                
              })

            })
          })
    
            
            res.redirect('/');
            
        }

   
});    
 router.get('/err', function(req, res, next) {
   var sess = req.session;
   //sess.payn = JSON.parse(sess.payn);
   //next();
res.render('land',{errp:sess.errp,ph:sess.ph,nm:sess.nm,pnh:sess.bphn,payn:sess.payn,pin:sess.pin})
 //res.send(sess.payn);
})
 router.post('/err', function(req, res, next) {
  var sess = req.session;
res.render('land',{errp:'Wrong pin entered!',ph:sess.ph,nm:sess.nm,pnh:sess.bphn,payn:sess.payn})
//res.send(sess.payn);



})

// handler for the /user/:id path, which prints the user ID


/* GET home page. */



module.exports = router;

