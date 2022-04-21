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
var hasher = require('pbkdf2-password')()
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
var HTMLParser = require('node-html-parser');
const { toString } = require('body-parser');
const { parseUrl } = require('mysql/lib/ConnectionConfig');
const { html } = require('cheerio/lib/api/manipulation');
var uid = require('uid-safe');
const { NULL } = require('mysql/lib/protocol/constants/types');
var app = express();

//app.use(bodyParser.urlencoded({ extended: false }));

router.use(express.json());
//router.use(bodyparser.json());


//app.use(session({secret: 'ssshhhhh'}));

var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'netx'    //Database Name
};
 
var sessionStore = new MySQLStore(options);
router.use(session({
  key: 'session_cookie_name',
  secret: 'ssshhhhh',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));
// Configure mysql



//Configure session middleware
//Configuring Middleware
router.get('/blinks', function(req, res) {
  var sess= req.session;
  
    
   
   var inv = 'dclinks';
   db.query('SELECT * FROM ?? WHERE l_opt = ? ', [inv,sess.logid], function (err, ldata, fields) { 
    if (err) throw err;
  
  
  
  
  
  res.render('linkz', { title: 'Dc', ldata:ldata});
})
  
});

router.get('/links/:prd', function(req, res) {
  var sess= req.session;
  var prd = req.params.prd;
  uid(4, function (err, string) {
    if (err) throw err
   var st = string;
   var inv = 'inv'+sess.logid;
   var sqli=db.query('SELECT * FROM ?? WHERE ?? = ?', [inv,'prd',prd], function (err, ldt, fields) { 
    if (err) throw err;
  
  
  
  
  
  res.render('links', { title: 'Dc', ldt:ldt, st:st });
})
  })
});
router.post('/salnk', function(req, res) {
  var st = req.body.st;
  var lnm = req.body.lnm;
  var stt = req.body.stt;
  uid(4, function (err, string) {
    if (err) throw err
   var st = string;
   var sqlk = 'INSERT INTO ?? (??, ??, ??) VALUES (?, ?, ?) '; 

  var paramk = [
    'dclinks',
    'linc',
    'lnm',
    'stt',
    
    st,
    lnm,
    stt,
    
  ];
  db.query(sqlk, paramk, function(err,inv) {
  if (err) throw err;
  
  
  res.render('linkz', { title: 'Dc', st:st });
})
  })
});

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
  var bod;
 var sql=db.query('SELECT * FROM customer WHERE email = ?', [email], function (err, data, fields) {
  
  console.log(sql);
 cid =data[0].cust_id;
  var passw =data[0].pwd;
  phg =data[0].gender; // get recievr id
  
  bod = {
    pwd: pass,
    passw: passw 
  };
  hash({ password: bod.pwd, salt:'ezz' }, function (err, pass, salt, hash) {
    bod.pwd.salt = salt;
    bod.pwd.hash = hash;
   
    if (hash === passw ) {
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
 
var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',     
    database: 'netx'
};


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
  })
      //res.send(cid);
 });

});

router.get('/inv', function(req, res, next) {
  var sess;
sess = req.session;
//sess.isvalid = false;
  var map=req.body;
  var email = map.email;
  var pass = map.password;
  
  //var sess=req.session;
   

  var inv;
  var cid;
  var bod;
  if (sess.isvalid) {
    
  inv='inv'+sess.logid;
 db.query('SELECT * FROM ?? ',[inv],  function (err, inv, fields) {
  
  if (err) throw err;
  
  

var root = HTMLParser.parse(
  ('<form action="https://ezpay.com/secure" method="get"><input type="hidden" name="business" value="0">')+
+('<input type="hidden" name="cmd" value="x-click">')+
+('<input type="hidden" name="item_name" value="galaxy S7">')+
+('<input type="hidden" name="amount" value="5500"><input type="hidden" name="currency_code" value="ETB">')+
+('<input type="image" name="submit" border="0" src="http://ezpay.com/images/btn_buynow_LG.webp"alt="Buy Now">')+
+('<img alt="" border="0" width="1" height="1" src="http://ezpay.com/images/btn_buynow_LG.webp" ></form>'));

hash({ password: root, salt:'ezz' }, function (err, pass, salt, hash) {
  root.salt = salt;
  
 //var x = JSON.stringify(root);
  //var daf =[];
  
  var url = 'secure';
 //var h = escape.html(root)
 //var x =parseUrl(salt,options)
 
 function decodeBase64 (base64) {
  return Buffer.from(base64, 'base64').toString('utf8')
}

function encodeBase64 (string) {
  return Buffer.from(string, 'utf8').toString('base64')
}
var x=encodeBase64(url)
var z=decodeBase64('aHR0cHM6Ly9lenBheS5jb20vc2VjdXJl')
     res.render('invent', { title: 'Inventory',inv: inv});
     //res.send(x);
    });
      //res.render('cards', { usrid: cid});
     
      //res.send({ title: 'edit-profile', daf: daf});

    //res.json(sess.id);
    
  
      //res.send(cid);
 });
}
else { 
      
  //sessionStore.close();
   
  res.redirect('/');  

}
});
router.get('/create', function(req, res, next) {
  var sess;
sess = req.session;
//sess.isvalid = false;
  var map=req.body;
  var email = map.email;
  var pass = map.password;
  
  //var sess=req.session;
   

  var inv;
  var cid;
  var bod;
  if (sess.isvalid) {
    
  inv='inv'+sess.logid;
 db.query('SELECT * FROM ?? ',[inv],  function (err, inv, fields) {
  
  if (err) throw err;
  
  

var root = HTMLParser.parse(
  ('<form action="https://ezpay.com/secure" method="get"><input type="hidden" name="business" value="0">')+
+('<input type="hidden" name="cmd" value="x-click">')+
+('<input type="hidden" name="item_name" value="galaxy S7">')+
+('<input type="hidden" name="amount" value="5500"><input type="hidden" name="currency_code" value="ETB">')+
+('<input type="image" name="submit" border="0" src="http://ezpay.com/images/btn_buynow_LG.webp"alt="Buy Now">')+
+('<img alt="" border="0" width="1" height="1" src="http://ezpay.com/images/btn_buynow_LG.webp" ></form>'));

hash({ password: root, salt:'ezz' }, function (err, pass, salt, hash) {
  root.salt = salt;
  
 //var x = JSON.stringify(root);
  //var daf =[];
  
  var url = 'secure';
 //var h = escape.html(root)
 //var x =parseUrl(salt,options)
 
 function decodeBase64 (base64) {
  return Buffer.from(base64, 'base64').toString('utf8')
}

function encodeBase64 (string) {
  return Buffer.from(string, 'utf8').toString('base64')
}
var x=encodeBase64(url)
var z=decodeBase64('aHR0cHM6Ly9lenBheS5jb20vc2VjdXJl')
     res.render('create', { title: 'Inventory',inv: inv});
     //res.send(x);
    });
      //res.render('cards', { usrid: cid});
     
      //res.send({ title: 'edit-profile', daf: daf});

    //res.json(sess.id);
    
  
      //res.send(cid);
 });
}
else { 
      
  //sessionStore.close();
   
  res.redirect('/');  

}
});
router.get("/inventory", (req, res) => {

  res.render('invnt', { title: 'Inventory'});

})
router.post('/addinv', function(req, res, next) {
  var sess;
sess = req.session;
//sess.isvalid = false;
  var map=req.body;
  var prnm = map.product_name;
  var price = map.item_price;
  var quantity = map.item_Quantity;
  var wei = map.weight;
  var itno =map.selectedDropDown;
  
  var ddtt=map.dropdown_price_title;
  //var sess=req.session;
   
//var optn =[];
var opt =[];
  var inv;
  var cid;
  var bod;
  if (sess.isvalid) {
    var oo=[];
    var oo1=[];
    var qunat =[];
    var quna =[];
    var optn =[];
    for (var i=1; i <= itno; i++){
    
     
     //optn = [];
   
   
oo.push({     
      
  'nm':map['ddp_option_name_'+i],
  'qn':map['ddp_option_currency_'+i],
 'pr':map['ddp_option_price_'+i],
 'index':i
})
let opps = oo.map(function(element){
  var kk= `{${element.nm}: ${element.qn}}`;
  console.log(kk)
  
 for (let iv = 2; iv <= element.qn; iv++) {
  
  
  // qunat.push({[`${'itr'}`]:iv,[`${'nmm'}`]:`${element.nm}`});
  
   
 
  qunat.push({[`${'itr'}`]:iv,[`${'nmm'}`]:`${element.nm}`});
 
} ; 

})
function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
  const key = obj[property];
  if (!acc[key]) {
  acc[key] = [];
  }
  // Add object to list for given key's value
  acc[key].push(obj);
  return acc;
  }, {});
  }
  const gbi = groupBy(qunat,`${'nmm'}`);
  //console.log(groupedPeople);


//quna.push(gbi);
//qnt = ;
oo1.push({  'nm':map['ddp_option_name_'+i],
"qn": gbi,
'pr':map['ddp_option_price_'+i],
'index':i
//'index':i
})

}



  
  //var opp =[];
  
  
    opti = JSON.stringify(oo);
    opti1 = JSON.stringify(oo1);
    inv='inv'+sess.logid;
  var CURRENT_TIMESTAMP = { toSqlString: function() { return 'CURRENT_TIMESTAMP()'; } };
                 
  var sqlt = 'INSERT INTO ?? (??, ??, ??,??, ??, ??,??, ??, ??, ??) VALUES (?, ?, ?,?, ?, ?,?, ?, ?, ?) '; 

  var params = [
    inv,
    'pr_nm',
    'quant',
    'typ',
    'wei',
    'dimen',
    'shpncst',
    'prc',
    'optnz',
    'btnz',
    'nopt',
    prnm,
    opti1,
    NULL,
    wei,
    NULL,
    NULL,
    price,
    opti,
    NULL,
    itno,
  ];
  db.query(sqlt, params, function(err,inv) {
  if (err) throw err;
  



  
 
 
/* function decodeBase64 (base64) {
  return Buffer.from(base64, 'base64').toString('utf8')
}

function encodeBase64 (string) {
  return Buffer.from(string, 'utf8').toString('base64')
}

var z=decodeBase64('aHR0cHM6Ly9lenBheS5jb20vc2VjdXJl')*/
    //res.render('invnt', { title: 'Inventory'});
    res.send(opti1);
    });
      //res.render('cards', { usrid: cid});
     
      //res.send({ title: 'edit-profile', daf: daf});

    //res.json(sess.id);
    
  
      //res.send(cid);
 
}
else { 
      
  //sessionStore.close();
   
  res.redirect('/');  

}
});
router.get('/profile', function(req, res, next) {
  var sess;
sess = req.session;
//sess.isvalid = false;
  var map=req.body;
  var email = map.email;
  var pass = map.password;
  
  //var sess=req.session;
   

  var phg;
  var cid;
  var bod;
  if (sess.isvalid) {
    
  
 db.query('SELECT * FROM customer WHERE cust_id = ?', [sess.logid], function (err, daf, fields) {
  
  if (err) throw err;
 
  var passw =daf[0].pwd;
  
  
  bod = {
    pwd: pass,
    passw: passw 
  };
  //var daf =[];
   
   


     res.render('profile', { title: 'edit-profile', daf: daf[0]});
      //res.render('cards', { usrid: cid});
     
      //res.send({ title: 'edit-profile', daf: daf});

    //res.json(sess.id);
    
  
      //res.send(cid);
 });
}
else { 
      
  //sessionStore.close();
   
  res.redirect('dashboard');  

}
});

router.post("/profilea", (req, res) => {
  var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'netx'    //Database Name
};
 
var sessionStore = new MySQLStore(options);
router.use(session({
  key: 'session_cookie_name',
  secret: 'ssshhhhh',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));
  sess = req.session;
//sess.isvalid = false;
  var mapx=req.body;
  var unamea = mapx.emaila;
  var passad = mapx.passworda;
  
  
  

  var phg;
  var cid;
 db.query('SELECT * FROM customer WHERE cust_id = ?', [sess.logid], function (err, daf, fields) {
  
  if (sess.isvalid) {
    
  
 
  var passwd =daa[0].pwd;
  
  if (passad == passwd) {
    
    
   
    res.render('admin-dashboard',{daf:daf});
    //res.send(inf);
    
    
  }
} else {
  res.render('admin',{msg:'Please logout of user account!'});  
} 
});

});

router.get("/logout", (req, res) => {
  req.session.destroy(err => {
      if (err) {
          return console.log(err);
      }
      res.redirect("/")
  });
});
router.get("/online", (req, res) => {
  db.query('SELECT * FROM sstbl ',  function (err, das, fields) {
    
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
     //var inf = datas[0].data.logid;
  res.render('online',{ dats:dats});
    //res.send({dats});
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

router.post("/adsignin", (req, res) => {
  var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'netx'    //Database Name
};
 
var sessionStore = new MySQLStore(options);
router.use(session({
  key: 'session_admin',
  secret: 'ssshhhhha',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
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
var options = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'netx'    //Database Name
};
var sessionStore = new MySQLStore(options);
router.use(session({
  key: 'session_cookie_name',
  secret: 'ssshhhhh',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));
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
  
    check('dob','Nice try asshole!!').isDate('YYYY/MM/DD'),
    
    /*check('mail').custom(value => {
      return User.findUserByEmail(value).then(user => {
        if (user) {
          return Promise.reject('E-mail already in use');
        }
      });
    }),
    (req, res) => {
      // Handle the request
    },
  );
  */
       

            
            
            
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
            req.session.errorx = errorx;
           req.session.success = false;
            //res.send(errors);
            
            
            //var hash = JSON.stringify(hash);
            
            
        //res.send(errorx);
          //res.end();
        res.render('sign-up', { success: req.session.success, errors: errorx });
         req.session.errors = null;
   //req.session.errors = null;
           //res.send(errors);
            
        } else {
            req.session.success = true;
            
            var arp = [];
            var bod = {
              pwd: req.body.password,
              pin: req.body.pin 
            };
            
            hash({ password: bod.pwd, salt:'Godisgreat' }, function (err, pass, salt, hash) {
              hasher({ password: bod.pin, salt:'Godisgreat' }, function (err, pass, saltp, hashp) {
                
              if (err) throw err;
              // store the salt & hash in the "db"
              bod.pwd.salt = salt;
              bod.pwd.hash = hash;
              bod.pin.salt = saltp;
              bod.pin.hash = hashp;
              
              //console.log(hash)
              //console.log(hashp)
              
            
            
            

            var sqlx = 'INSERT INTO customer (??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?) ';
            var param = [
              'first_name',
              'last_name',
              'gender',
              //'dob',
              'email',
              'phone_no',
              //'pin',
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
              //req.body.dob,
              req.body.mail,
              req.body.phno,
              //req.body.pin,
              req.body.uname,
              hash,
              /*req.body.aadhar_no,
              
              
              req.body.addr1,
              req.body.branch,
              req.body.account_no,
             
              req.body.business,*/
              
            ];
            
            
            db.query(sqlx, param, function (err, result, fields) {
            var erm =[];
               //throw err
                if (!err) {
                var par; var or;
              // throw err;
              console.log(result.insertId)
              arp.push({inid:result.insertId});
              
             req.session.inid = result.insertId;
             par = 'passbook'+result.insertId;
              or = 'orde'+result.insertId;
                //return db.query(sql, params);
                
              } else{
                
                }
              
              var bop = {
                pin: req.body.pin 
              };
              
              
              var sqlup = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        
        var parup = [
          'customer',
          'pin',
          hashp,
          'cust_id',
          result.insertId
        ];
        db.query(sqlup, parup, function (err, resup, fields) {
          if (err) throw err
         
            if (err) throw err
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
                  var sqlss = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        
          var parss = [
            'sstbl',
            'status',
            '0',
            'session_id',
            req.session.id
            
          ];
          db.query(sqlss, parss, function (err, resss, fields) {
            if (!err) {
              req.session.destroy(err => {
                
               // res.redirect("/")
            });
            }
                  })
                })
                })
                
              })
              
      })
    
            })
          })
        })
          
          res.send(arp);
            //res.redirect('/');
            
        }

   
}); 
   
 
// handler for the /user/:id path, which prints the user ID


/* GET home page. */



module.exports = router;

