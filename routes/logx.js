var express = require('express');
var cors=require("cors");
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var mysqli = require('mysqli'); 
var db=require('../databse');
var app = express();
//var check = require('express-validator')(alidationResult);
var hash = require('pbkdf2-password')()
var path = require('path');
var session = require('express-session');
var cons = require('../constants');
var ezp = require('../constants');
const { check, validationResult } = require('express-validator');
const json = require('body-parser/lib/types/json');
//const json = require('body-parser/lib/types/json');
var urlencodedparser = bodyparser.urlencoded({  extended: false});
var MySQLStore = require('express-mysql-session')(session);
var urlencodedparser = bodyparser.urlencoded({  extended: false});
var fs = require('fs');
var uid = require('uid-safe');
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
router.get('/',urlencodedparser, function(req, res) {
  sess = req.session;
if (sess.isvalid) {
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
  var title ='checkout';
  //var usrnv= [{bbtn:ezp.btns[sess.ln],kino:counto,addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln]}]
  //sess.usrnv=usrnv
if (sess.btnm) {
var bt ='btnm';
} else if(sess.btnd) {
var bt='btnd';
}

  if (sess.bz==true) {
    var bnz='bz';
    } if (sess.usr==true){
    var bnz='usr';
    } if (!pp) {
    var pp='lst';
    } else if(pp.length>0)
    {var pp =pp} var tyEr;
    if (sess.typ ==='m') {
      var tp='mx'
    }
  tyEr ={[tp]:true,[bt]:sess[bt],shpk:ezp.shpk[sess.ln],p:'01',withd:ezp.withd[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],infb:ezp.infb[sess.ln],
      
      task:ezp.task[sess.ln], tran:ezp.transactions[sess.ln], [sess.ln]:true,[bnz]:true,or:ezp.orders[sess.ln],
      [ppt]:true, [pp]:true,[gent]:true, 
      title: title,[ezp.bnk]:true,ph:sess.ph, nm:sess.bnm, mnme: sess.mnme, pnh:sess.pnh, payn:sess.payb, bnme: sess.bnme}
      //res.send(tyre)
      res.render(home, tyEr);
 // res.render('landx', {nm:sess.bnm,pnh:sess.pnh,btnd:sess.btnd});
} else {
  res.redirect('/');
}

})
var sess;
router.post('/', function(req, res, next) {
  router.use(cors());
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
sess = req.session;
uid(4, function (err, string) {
  if (err) throw err
 var st = string;
 sess.tst=st;
})
if (!sess.isvalid) {
  
 

//sess.isvalid = false;
  var map=req.body;
  var email = map.email;
  var pass = map.password;
  var mid = map.mm;
  var itno = map.quantity
  //var sess=req.session;
   

  var mnme;
  var cid;
  var pnh;
  var bod;
  db.query(cons.get_query.replace("{email}", db.escape(email)), function(err, data, fields){
 //var sql=db.query('SELECT * FROM customer WHERE email = ?', [email], function (err, data, fields) {
  var sql2=db.query('SELECT * FROM customer WHERE cust_id = ?', [mid], function (err, dat, fields) {
  console.log(sql);
  try {
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
     if (hash == passw ) {
      router.use(session({
        key: cons.ses.key,
        secret: cons.ses.secret,
        store: sessionStore,
        resave: cons.ses.resave,
        saveUninitialized: cons.ses.saveUninitialized
      }));
    
  mnme =data[0].uname; // get recievr id
 var adrrb =data[0].address;
  pnh =data[0].phone_no;
  
  
      var pp = data[0].pp;
      sess.pp=pp;
      bz =data[0].business;
      if (bz == true) {
       sess.bz=true;
      } else  if (bz == false) {
       sess.usr=true;
      }
      var ln=data[0].lng;
      sess.ln=ln;
      var gen = data[0].gender;
      sess.isvalid = true;
//var bnm= dat[0].bnme;
//var veri =dat[0].veri;
//var adrr =dat[0].address;
sess.logid = JSON.parse(cid);
sess.email = email;
//sess.bnm= bnm;
sess.mnme=mnme;
      sess.pp=pp;
     sess.gen=gen;
  sess.pnh=pnh;

 if (map.typ) {
   sess.typ=map.typ
 }

//sess.pnh=pnh;
//sessionStore.close();
 // sess.bamt = sess.bdt.amt;

app.set('sesslogId', sess.logid);

//var pa6= sess.payb['cid'];
if (map.typ==='m') {
  btnm = {
    "trid":`${map['trid']}`,
    "typ":`${map['typ']}`,
    "bznm":`${bnm}`,
    "bzphn": `${map['bzphn']}`,
    "amt": `${map['amount']}`,
    "bzemail": `${map['bzmail']}`,
   "quantity": `${map['quantity']}`,
   "optd": `${map['optd']}`,
    "nm": `${map['trnm']}`,
    "lnc": `${map['lnc']}`,
    "mm": `${map['mm']}`,
   "veri": `${veri}`,
    "adrr": `${adrr}`,
    "tst": `${req.session.tst}`,
    "bunm":`${mnme}`,
    "adrrb":`${adrrb}`,
    "bid":`${cid}`,
    
  } , sess.btnm=btnm;
} else if (map.typ==='r') {

  btnd = {
    "trid":`${map['trid']}`,
    "typ":`${map['typ']}`,
    "bznm":`${bnm}`,
    "bzphn": `${map['bzphn']}`,
    "amt": `${map['amount']}`,
    "bzemail": `${map['bzmail']}`,
   "quantity": `${map['itno']}`,
   "indx": `${map['indx']}`,
   "prd": `${map['prd']}`,
   "optd": `${map['optd']}`,
    "nm": `${map['itnm']}`,
    "lnc": `${map['lnc']}`,
    "mm": `${map['mm']}`,
   "veri": `${veri}`,
    "adrr": `${adrr}`,
    "tst": `${req.session.tst}`,
  }
      
      sess.btnd=btnd;
  
} 
  

else if (map.typ ==='d') {

  btnmd = {
    "dnid":`${map['dnid']}`,
    "typ":`${map['typ']}`,
   "damt": `${map['dnmt']}`,
   "dnm": `${map['dnm']}`,
   "donm": `${map['donm']}`,
   "mm": `${map['uuid']}`,
  }
      
      sess.btnmd=btnmd;
  
} 
    
    	
    		
    if (err) throw err;
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
    var title ='checkout';
    //var usrnv= [{bbtn:ezp.btns[sess.ln],kino:counto,addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],inv:ezp.inv[sess.ln],ana:ezp.ana[sess.ln]}]
    //sess.usrnv=usrnv
if (sess.btnm) {
  var bt ='btnm';
} else if(sess.btnd) {
  var bt='btnd';
}if(sess.btnmd) {
  var bt='btnmd';
}
    if (sess.bz==true) {
      var bnz='bz';
      } if (sess.usr==true){
      var bnz='usr';
      } if (!pp) {
      var pp='lst';
      } else if(pp.length>0)
      {var pp =pp} var tyEr;
      //res.send(lan)
      if (map.typ ==='m') {
        var tp='mx'
      } else {var tp=map.typ}
    
      tyEr ={[tp]:true,[bt]:sess[bt],shpk:ezp.shpk[sess.ln],p:'01',withd:ezp.withd[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],infb:ezp.infb[sess.ln],
      
      task:ezp.task[sess.ln], tran:ezp.transactions[sess.ln], [sess.ln]:true,[bnz]:true,or:ezp.orders[sess.ln],
      [ppt]:true, [pp]:true,[gent]:true, 
      title: title,[ezp.bnk]:true,ph:sess.ph, nm:sess.bnm, mnme: sess.mnme, pnh:sess.pnh, payn:sess.payb, bnme: sess.bnme}
      //res.send(tyre)
      res.render(home, tyEr);
     
     
     
    // res.render('landx', { title: 'checkout', ph:sess.ph, nm:sess.bnm, mnme: mnme, pnh:pnh, payn:sess.payb, bnme: sess.bnme, btnd:sess.btnd});
      //res.render('cards', { usrid: cid});
     
        



    //res.json(sess.payn);
    } else if (hash !== passw) { 
      
      //sessionStore.close();
     
     res.render('404');  

    }
      //res.send(cid);
      
 });
} catch (error) {
  //console.log(err)
  if (error ='TYPEERROR') {
    var ty = true;
    var msg = 'Wrong email or password'
  var tye ={
    ty:ty,
    msg:msg
  }

if (ezp.bnk==='ab') {
  res.render('404', { title: 'Express',ise:tye,ab:true });
} else if (ezp.bnk==='com') {
  res.render('404', { title: 'Express',ise:tye,com:true });
} else if (ezp.bnk==='nb') {
  res.render('404', { title: 'Express',ise:tye,nb:true });

}
}
}
});
});
} else if(sess.isvalid ) {
  var email=sess.email;
  var sql=db.query('SELECT * FROM customer WHERE email = ?', [email], function (err, data, fields) {
    cid =data[0].cust_id;
 
  mnme =data[0].uname; // get recievr id
  pnh =data[0].phone_no;
  var gen = data[0].gender;
      var pp = data[0].pp;
      sess.pp=pp;
     sess.gen=gen;
  sess.pnh=pnh;
  sess.mnme=mnme;
  sess.logid = JSON.parse(cid);
sess.email = email;
if (ezp.bnk==='ab') {
  if (sess.pp === '0') {
    if (sess.gen === 'male'  ) {
      res.render('landx', { title: 'checkout',ab:true, m:sess.gen, ph:sess.ph, nm:sess.bnm, mnme: mnme, pnh:pnh, payn:sess.payb, bnme: sess.bnme, btnd:sess.btnd});
    
    } else {
      res.render('landx', { title: 'checkout',ab:true, g:sess.gen, ph:sess.ph, nm:sess.bnm, mnme: mnme, pnh:pnh, payn:sess.payb, bnme: sess.bnme, btnd:sess.btnd});
    
    }
  } else {
    if (sess.gen === 'male'  ) {
      res.render('landx', { title: 'checkout',ab:true,pp:sess.pp,  ph:sess.ph, nm:sess.bnm, mnme: mnme, pnh:pnh, payn:sess.payb, bnme: sess.bnme, btnd:sess.btnd});
    
    } else {
      res.render('landx', { title: 'checkout',ab:true, pp:sess.pp, ph:sess.ph, nm:sess.bnm, mnme: mnme, pnh:pnh, payn:sess.payb, bnme: sess.bnme, btnd:sess.btnd});
    
    }
  }

} else if(ezp.bnk==='com') {
  if (sess.pp === '0') {
    if (sess.gen === 'male'  ) {
      res.render('landx', { title: 'checkout',com:true, m:sess.gen, ph:sess.ph, nm:sess.bnm, mnme: mnme, pnh:pnh, payn:sess.payb, bnme: sess.bnme, btnd:sess.btnd});
    
    } else {
      res.render('landx', { title: 'checkout',com:true, g:sess.gen, ph:sess.ph, nm:sess.bnm, mnme: mnme, pnh:pnh, payn:sess.payb, bnme: sess.bnme, btnd:sess.btnd});
    
    }
  } else {
    if (sess.gen === 'male'  ) {
      res.render('landx', { title: 'checkout',com:true,pp:sess.pp,  ph:sess.ph, nm:sess.bnm, mnme: mnme, pnh:pnh, payn:sess.payb, bnme: sess.bnme, btnd:sess.btnd});
    
    } else {
      res.render('landx', { title: 'checkout',com:true, pp:sess.pp, ph:sess.ph, nm:sess.bnm, mnme: mnme, pnh:pnh, payn:sess.payb, bnme: sess.bnme, btnd:sess.btnd});
    
    }
  }
}else if(ezp.bnk==='nb') {
  
}
else if(ezp.bnk==='dash') {
  
}
  
})
  //res.render('landx',{ title: 'checkout',ph:sess.ph, nm:sess.bnm, mnme: mnme, pnh:pnh, payn:sess.payb, bnme: sess.bnme, btnd:sess.btnd});
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

