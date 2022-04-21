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
var ezp=require('../constants');
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
var cons = require("../constants");
var QRCode = require('qrcode')
const { NULL } = require('mysql/lib/protocol/constants/types');
const { url } = require('inspector');
var app = express();
const multer  = require('multer');
const { stringify } = require('querystring');
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
router.get('/uprim/:prd', function(req, res, next) {
  var prid = req.params.prd
  res.render('imgup')
})
router.get('/qr/:lid', function(req, res) {
  var sess= req.session;
  
    var lid =req.params.lid
   
   var inv = 'dclinks';
   db.query('SELECT * FROM ?? WHERE lid = ? ', [inv,lid], function (err, ldata, fields) { 
    if (err) throw err;
    var home='linkz';
    var title ='Direct-links';
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
    
         
            if (sess.bz==true) {
              var bnz='bz';
            } if (sess.usr==true){
              var bnz='usr'
            } if (!pp) {
              var pp='lst';
            } else if(pp.length>0)
            {var pp =pp} var tyEr;
          var lnkk =ldata[0].linc;
          var opts = {
            errorCorrectionLevel: 'H',
            type: 'image/png',
            quality: 0.3,
            margin: 1,
            color: {
              dark:"#010599FF",
              light:"#FFBF60FF"
            }}
          var qr =ldata[0].qr
         
         
          var dest ='/data/uploads/'+lnkk+'.png';
              QRCode.toFile('./public/data/uploads/'+lnkk+'.png' ,lnkk,opts, function (err, string) {
                
                console.log(string)
              
               
                
               
           
            var insertData = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
   // var insertData = "INSERT INTO ?? (??) VALUES (?) WHERE ?? = ?"
    

  var parp = [
    'dclinks',
    'qr',
    
    
    
    dest,
    'lid',
    lid
    
  ];
    
    db.query(insertData, parp, (err, result) => {
    })});
                tyEr ={p:'4',bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],
                invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],ana:ezp.ana[sess.ln],
                shpk:ezp.shpk[sess.ln],infb:ezp.infb[sess.ln],inlrt:ezp.invlrt[sess.ln],or:ezp.orders[sess.ln],
                task:ezp.task[sess.ln],tran:ezp.transactions[sess.ln],[sess.ln]:true,[bnz]:true, 
               [ppt]:true, [gent]:true,ldata:ldata,
                title: title,[ezp.bnk]:true,}
               //res.render(home, tyEr);
               res.send(qr)
                
              
             
                
              
          
  
})
  
});
router.get('/dwd/:file(*)', function(req, res, next){
  var filePath = path.join(__dirname, '../public/data/uploads/', req.params.file);

  res.download(filePath, function (err) {
    if (!err) return; // file sent
    if (err.status !== 404) return next(err); // non-404 error
    // file for download not found
    res.statusCode = 404;
    res.send(filePath);
  });
});
router.get('/:id', function(req, res) {
  var sess= req.session;
  var idd = req.params.id;
  var stvt = 'lstatt'+sess.logid;
   db.query('SELECT * FROM ?? WHERE url_id = ?', [stvt,idd], function (err, stv, fields) {
    
      
      var sqlcmg = 'SELECT COUNT(id) FROM ?? WHERE ?? = ?';
      db.query(sqlcmg, [stvt,'url_id',idd], function (err, stiv, fields) {
    var home='statz';
    var title ='Direct-links';
    if(sess.pp==='1'){
      var ppt ='pp'
      var ppf ='ppf'
    } else if (sess.pp==='0'){
     var ppt='lela'
     var ppf ='nopp'
     if(sess.gen==='male'){
      var gent='m';
    } else if(sess.gen==='female'){
      var gent='g';
    }
    }
    var cc = stiv[0] ? stiv[0]['COUNT(id)'] : 0;
         
            if (sess.bz==true) {
              var bnz='bz';
            } if (sess.usr==true){
              var bnz='usr'
            } if (!pp) {
              var pp='lst';
            } else if(pp.length>0)
            {var pp =pp} var tyEr;
            tyEr ={cc:cc,stv:stv,[ppf]:sess.pmg,p:'4',bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],
            invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],ana:ezp.ana[sess.ln],
            shpk:ezp.shpk[sess.ln],infb:ezp.infb[sess.ln],inlrt:ezp.invlrt[sess.ln],or:ezp.orders[sess.ln],
            task:ezp.task[sess.ln],tran:ezp.transactions[sess.ln],[sess.ln]:true,[bnz]:true, 
           [ppt]:true, [gent]:true,
            title: title,[ezp.bnk]:true,}
            res.render(home, tyEr);
          //bod  res.send(cc)
   }) })

})
router.get('/blinks', function(req, res) {
  var sess= req.session;
  
    
   
   var inv = 'dclinks';
   var stv = 'lstat'+sess.logid;
   db.query('SELECT * FROM ??  ', [stv], function (err, stv, fields) {
   db.query('SELECT * FROM ?? WHERE l_opt = ? ', [inv,sess.logid], function (err, ldata, fields) { 
    if (err) throw err;
  var qr =ldata[0].qr
    var home='linkz';
    var title ='Direct-links';
    if(sess.pp==='1'){
      var ppt ='pp'
      var ppf ='ppf'
    } else if (sess.pp==='0'){
     var ppt='lela'
     var ppf ='nopp'
     if(sess.gen==='male'){
      var gent='m';
    } else if(sess.gen==='female'){
      var gent='g';
    }
    }
            
         
            if (sess.bz==true) {
              var bnz='bz';
            } if (sess.usr==true){
              var bnz='usr'
            } if (!pp) {
              var pp='lst';
            } else if(pp.length>0)
            {var pp =pp} var tyEr;
                
           var qr=stringify('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" shape-rendering="crispEdges"><path fill="#FFBF60" d="M0 0h23v23H0z"/><path stroke="#010599" d="M1 1.5h7m1 0h1m1 0h3m1 0h7M1 2.5h1m5 0h1m1 0h1m1 0h1m1 0h1m1 0h1m5 0h1M1 3.5h1m1 0h3m1 0h1m2 0h1m1 0h1m2 0h1m1 0h3m1 0h1M1 4.5h1m1 0h3m1 0h1m1 0h2m1 0h1m2 0h1m1 0h3m1 0h1M1 5.5h1m1 0h3m1 0h1m1 0h2m1 0h1m2 0h1m1 0h3m1 0h1M1 6.5h1m5 0h1m1 0h1m2 0h2m1 0h1m5 0h1M1 7.5h7m1 0h1m1 0h1m1 0h1m1 0h7M12 8.5h1M4 9.5h1m2 0h1m3 0h1m4 0h3m1 0h2M2 10.5h2m1 0h2m2 0h2m1 0h2m2 0h1m1 0h2m1 0h1M4 11.5h2m1 0h1m3 0h2m2 0h3m1 0h1m1 0h1M1 12.5h3m1 0h1m2 0h1m1 0h5m1 0h3M1 13.5h2m1 0h1m1 0h2m2 0h3m3 0h1m3 0h2M9 14.5h1m2 0h3m1 0h2m1 0h1m1 0h1M1 15.5h7m2 0h2m2 0h2m1 0h2m1 0h1M1 16.5h1m5 0h1m3 0h1m1 0h3m4 0h2M1 17.5h1m1 0h3m1 0h1m2 0h1m3 0h2m2 0h2m1 0h1M1 18.5h1m1 0h3m1 0h1m1 0h4m3 0h1m1 0h1m1 0h2M1 19.5h1m1 0h3m1 0h1m2 0h2m3 0h3m1 0h1m1 0h1M1 20.5h1m5 0h1m4 0h1m1 0h4M1 21.5h7m2 0h2m1 0h1m6 0h1"/></svg>')
                tyEr ={stv:stv,[ppf]:sess.pmg,p:'4',bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],
                invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],ana:ezp.ana[sess.ln],
                shpk:ezp.shpk[sess.ln],infb:ezp.infb[sess.ln],inlrt:ezp.invlrt[sess.ln],or:ezp.orders[sess.ln],
                task:ezp.task[sess.ln],tran:ezp.transactions[sess.ln],[sess.ln]:true,[bnz]:true, 
               [ppt]:true, [gent]:true,ldata:ldata,ur:qr,
                title: title,[ezp.bnk]:true,}
                res.render(home, tyEr);
  
            
           
  
})})
  
});
router.post('/upin', function(req, res, next) {
  var sess;
sess = req.session;
//sess.isvalid = false;
  var map=req.body;
  var prnm = map.prnm;
  var price = map.price;
  var quantity = map.item_Quantity;
  var wei = map.weight;
  var itno =map.nopt;
  var prd = map.prd
  
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
      
  'nm':map['opt-nm-'+i],
  'qn':map['opt-qn-'+i],
 'pr':map['opt-price-'+i],
 'index':map['opt-indx-'+i],
})



}
sess.oo=oo;

let opps = sess.oo.map(function(element){
  var kk= `{${element.nm}: ${element.qn}}`;
  console.log(kk)
  
 for (let iv = 2; iv <= element.qn; iv++) {
  
  
  // qunat.push({[`${'itr'}`]:iv,[`${'nmm'}`]:`${element.nm}`});
  
   
 
  qunat.push({iv,'nmm':`${element.nm}`});
  
} ; 
sess.qunat=qunat;

})
function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
  const key = obj[property];
  if (!acc[key]) {
  acc[key] = [];
  }
  // Add object to list for given key's value
  acc[key].push(obj);
  
  //acc[key].splice(1, 1, "opt");
  return acc;
  }, {});
  }
  oo.forEach(element => {
    
  
    const gbi = groupBy(sess.qunat,`${'nmm'}`);
  
    //console.log(groupedPeople);
  
  //quna.push(gbi);
  //qnt = ;
  
  oo1.push({
    'nmv' : gbi[`${element.nm}`]
    
    
    })
    
});

  //console.log(groupedPeople);

//quna.push(gbi);
//qnt = ;


for (const key in oo1) {
  
    const element = oo1[key];
    console.log(`${key} => ${oo1[key]}`);
    //oo1[key]; = "Laila"
  
}
//objIndex = myArray.findIndex((obj => obj.id == 1));
var oo2 =[];
oo.forEach(element => {
 var nmt = element.nm
 var nmd = qunat[nmt];
  oo2.push(nmd)
});
  sess.oo2=oo2;
  
//oo1.splice(2, 2, "March", "April");
  //var opp =[];
  
  
    opti = JSON.stringify(oo);
    var opti1 = JSON.stringify(oo1);
    inv='inv'+sess.logid;
  var CURRENT_TIMESTAMP = { toSqlString: function() { return 'CURRENT_TIMESTAMP()'; } };
  var sqlpr = 'UPDATE ?? SET ?? = ? WHERE ?? = ?'; //update inventory
  var parpr = [
   'inv'+sess.logid,
   
   'btnz',
   
   
   prd,
   
   'prd',
   prd
 ];  
 db.query(sqlinu, parpr, function (err, ppr, fields) {         
  var sqlinu = 'UPDATE ?? SET ?? = ? WHERE ?? = ?'; //update inventory
  var paranv = [
   'inv'+sess.logid,
   
   'optnz',
   
   
   opti,
   
   'prd',
   prd
 ];
 db.query(sqlinu, paranv, function (err, resunv, fields) {



  var sqlinuc = 'UPDATE ?? SET ?? = ? WHERE ?? = ?'; //update inventory
  var paranvc = [
   'inv'+sess.logid,
   
   'nopt',
   
   
   itno,
   
   'prd',
   prd
 ];
 db.query(sqlinuc, paranvc, function (err, resunv, fields) {
 
 //if(!err)
 oo.forEach(x => {
  if (x.qn > 0) {
    var sqlinuk = 'UPDATE ?? SET ?? = ? WHERE ?? = ?'; //update inventory
  var parank = [
   'inv'+sess.logid,
   
   'cntrl',
   
   
   '1',
   
   'prd',
   prd
 ];
 db.query(sqlinuk, parank, function (err, resunv, fields) {
})
}
});
/* function decodeBase64 (base64) {
  return Buffer.from(base64, 'base64').toString('utf8')
}

function encodeBase64 (string) {
  return Buffer.from(string, 'utf8').toString('base64')
}

var z=decodeBase64('aHR0cHM6Ly9lenBheS5jb20vc2VjdXJl')*/
   res.redirect('../user/invlrt');
 
   // res.send(opti);
    });
  })    //res.render('cards', { usrid: cid});
})     
      //res.send({ title: 'edit-profile', daf: daf});

    //res.json(sess.id);
    
  
      //res.send(cid);
 
}
})

router.get('/links/:prd', function(req, res) {
  var sess= req.session;
  var prd = req.params.prd;
  uid(4, function (err, string) {
    if (err) throw err
   var st = string;
   var inv = 'inv'+sess.logid;
   var sqli=db.query('SELECT * FROM ?? WHERE ?? = ?', [inv,'prd',prd], function (err, ldt, fields) { 
    if (err) throw err;
  
  
  if (ezp.bnk==='com') {
    res.render('links', { title: 'Dc',com:true, ldt:ldt, st:st });
  } else if(ezp.bnk==='ab') {
    res.render('links', { title: 'Dc',ab:true, ldt:ldt, st:st });
  }
  
  
  
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
router.post('/fgfgf', function(req, res, next) {
 
sess = req.session;

//sess.isvalid = false;
const ip = req.socket.remoteAddress;
const remoteAddresParams = ip.split(':');
const clientIP = remoteAddresParams[remoteAddresParams.length -1];
//var isClientBlocked= blackList.any(ip => ip.toString() === clientIP.toString());
  var map=req.body;
  var email = map.email;
  var pass = map.password;
  
  var surl=ezp.surl;
   
  var blackList =

  [
 //'127.0.0.1', 
  '88.77.99.1',] 
;
  var phg;
  var cid;
  var bod;
  //ar result = blackList.filter(ip === clientIP);
  
//let result = true;

let result = true;
for (let i = 0; i < blackList.length; i++) {
    if (blackList[i] === clientIP) {
        result = false;
        break;
    }
}
  //var count = result[0] ? result[0]['COUNT(ip)'] : 0;
 var sql=db.query('SELECT * FROM customer WHERE email = ?', [email], function (err, data, fields) {
  if (result == true){
    //res.end();
  if(!err==true){
    try { 
      console.log(sql);
      cid =data[0].cust_id;
       var passw =data[0].pwd;
       phg =data[0].gender; // get recievr id
       bz =data[0].business;
       if (bz == true) {
        sess.bz=true;
       } else  if (bz == false) {
        sess.usr=true;
       }
       
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
    req.session.bnk = cons.bnk;
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
     
     
    
    var MySQLStore = require('express-mysql-session')(session);
    
    
    var sessionConnection = mysql.createConnection(cons.options);
    var sessionStore = new MySQLStore(cons.options);
    
    
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
        if (bz == true) {
          
          res.redirect('dashboard');
        
        } else if (sess.usr == true) { res.redirect('home');}
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
      
      }catch   (err) {res.redirect('index');}
    } else{res.send('server error');}
 
  
      //res.send(cid);
    } else {
      res.send('count');
    }
 });

});
router.get('/messages', function(req, res) {
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
    
  inv='pyr'+sess.logid;
  dinv='trktble'+sess.logid;
 db.query('SELECT * FROM ?? ',[inv],  function (err, pyr, fields) {
 
  db.query('SELECT * FROM ?? ',[dinv],  function (err, invm, fields) {
  
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
var home='msgg';
var title ='Messages';
if(sess.pp==='1'){
  var ppt ='pp';
  var ppf ='ppf'
} else if (sess.pp==='0'){
 var ppt='lela'
 var ppf ='nopp'
 if(sess.gen==='male'){
  var gent='m';
} else if(sess.gen==='female'){
  var gent='g';
}
}
        if (sess.bz==true) {
          var bnz='bz';
        } if (sess.usr==true){
          var bnz='usr'
        } if (!pp) {
          var pp='lst';
        } else if(pp.length>0)
        {var pp =pp} var tyEr;
            
            tyEr ={[ppf]:sess.pmg,p:'7',bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],
            invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],ana:ezp.ana[sess.ln],
            shpk:ezp.shpk[sess.ln],infb:ezp.infb[sess.ln],inlrt:ezp.invlrt[sess.ln],or:ezp.orders[sess.ln],
            task:ezp.task[sess.ln],tran:ezp.transactions[sess.ln],[sess.ln]:true,[bnz]:true, 
           [ppt]:true, [gent]:true, pyr: pyr,invm: invm,
            title: title,[ezp.bnk]:true,}
            res.render(home, tyEr);

     //res.send(x);
    });
      //res.render('cards', { usrid: cid});
     
      //res.send({ title: 'edit-profile', daf: daf});

    //res.json(sess.id);
    
  
      //res.send(cid);
    })
 });
}
else { 
      
  //sessionStore.close();
   
  res.redirect('/');  

}
});
router.post('/chk',function(req, res, next) {
  var map =req.body;
  var pti = map.usid;
  var pk = map.pk;
  if (pk==='1') {
    var checked = 'checked';
  } else {
    var checked = 'not';
  }
  var sqlinuk = 'UPDATE ?? SET ?? = ? WHERE ?? = ?'; //update inventory
  var park = [
   'pyr'+sess.logid,
   
   'box',
   
   
   checked,
   
   'pyid',
   pti
 ];
 db.query(sqlinuk, park, function (err, chkk, fields) {
   if (err) throw err;
   console.log(pti)
res.send({msg:'success'});

 })
})
router.get('/payroll', function(req, res, next) {
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
    
  inv='pyr'+sess.logid;
  dinv='trktble'+sess.logid;
 db.query('SELECT * FROM ?? ',[inv],  function (err, pyr, fields) {
 
  db.query('SELECT * FROM ?? ',[dinv],  function (err, invm, fields) {
  
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
var home='payr';
var title ='Payroll';
if(sess.pp==='1'){
  var ppt ='pp';
  var ppf ='ppf'
} else if (sess.pp==='0'){
 var ppt='lela'
 var ppf ='nopp'
 if(sess.gen==='male'){
  var gent='m';
} else if(sess.gen==='female'){
  var gent='g';
}
}
        if (sess.bz==true) {
          var bnz='bz';
        } if (sess.usr==true){
          var bnz='usr'
        } if (!pp) {
          var pp='lst';
        } else if(pp.length>0)
        {var pp =pp} var tyEr;
            
            tyEr ={[ppf]:sess.pmg,p:'7',bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],
            invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],ana:ezp.ana[sess.ln],
            shpk:ezp.shpk[sess.ln],infb:ezp.infb[sess.ln],inlrt:ezp.invlrt[sess.ln],or:ezp.orders[sess.ln],
            task:ezp.task[sess.ln],tran:ezp.transactions[sess.ln],[sess.ln]:true,[bnz]:true, 
           [ppt]:true, [gent]:true, pyr: pyr,invm: invm,
            title: title,[ezp.bnk]:true,}
            res.render(home, tyEr);

     //res.send(x);
    });
      //res.render('cards', { usrid: cid});
     
      //res.send({ title: 'edit-profile', daf: daf});

    //res.json(sess.id);
    
  
      //res.send(cid);
    })
 });
}
else { 
      
  //sessionStore.close();
   
  res.redirect('/');  

}
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
  dinv='trktble'+sess.logid;
 db.query('SELECT * FROM ?? ',[inv],  function (err, inv, fields) {
 
  db.query('SELECT * FROM ?? ',[dinv],  function (err, invm, fields) {
  
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
var home='invent';
var title ='Inventory';
if(sess.pp==='1'){
  var ppt ='pp';
  var ppf ='ppf'
} else if (sess.pp==='0'){
 var ppt='lela'
 var ppf ='nopp'
 if(sess.gen==='male'){
  var gent='m';
} else if(sess.gen==='female'){
  var gent='g';
}
}
        if (sess.bz==true) {
          var bnz='bz';
        } if (sess.usr==true){
          var bnz='usr'
        } if (!pp) {
          var pp='lst';
        } else if(pp.length>0)
        {var pp =pp} var tyEr;
            
            tyEr ={[ppf]:sess.pmg,p:'7',bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],
            invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],ana:ezp.ana[sess.ln],
            shpk:ezp.shpk[sess.ln],infb:ezp.infb[sess.ln],inlrt:ezp.invlrt[sess.ln],or:ezp.orders[sess.ln],
            task:ezp.task[sess.ln],tran:ezp.transactions[sess.ln],[sess.ln]:true,[bnz]:true, 
           [ppt]:true, [gent]:true, inv: inv,invm: invm,
            title: title,[ezp.bnk]:true,}
            res.render(home, tyEr);

     //res.send(x);
    });
      //res.render('cards', { usrid: cid});
     
      //res.send({ title: 'edit-profile', daf: daf});

    //res.json(sess.id);
    
  
      //res.send(cid);
    })
 });
}
else { 
      
  //sessionStore.close();
   
  res.redirect('/');  

}
});

router.get('/invlrt', function(req, res, next) {
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
  if (sess.isvalid && (sess.bz=true)) {
    
  inv='inv'+sess.logid;
  itr='ivtr'+sess.logid;
 db.query('SELECT * FROM ?? WHERE ?? = ? ORDER BY `prd` DESC ',[inv,'cntrl','0'],  function (err, itrr, fields) {
   if(!err)
  try {
     
   } catch (err) {

     res.redirect('/user/invlrt')
   }
 
  db.query('SELECT * FROM ?? ',[itr],  function (err, invtr, fields) {
  
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
if (ezp.bnk==='com') {
  res.render('inventr', { title: 'Inventory alert',inv: itrr,invm: invtr,com:true});
} else if(ezp.bnk==='ab') {
  res.render('inventr', { title: 'Inventory alert',inv: itrr,invm: invtr,ab:true});
} else if(ezp.bnk==='nb')
     {  res.render('inventr', { title: 'Inventory alert',inv: itrr,invtr: invtr,nb:true});
    }
     //res.send(x);
    });
      //res.render('cards', { usrid: cid});
     
      //res.send({ title: 'edit-profile', daf: daf});

    //res.json(sess.id);
    
  
      //res.send(cid);
    })
 });
}
else if (sess.usr==true) { 
      
  //sessionStore.close();
   
  res.redirect('home');  

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

var home='create';
var title ='Create-link';
if(sess.pp==='1'){
  var ppt ='pp';
  var ppf ='ppf'
} else if (sess.pp==='0'){
 var ppt='lela';
 var ppf ='nopp';
 if(sess.gen==='male'){
  var gent='m';
} else if(sess.gen==='female'){
  var gent='g';
}
}
        if (sess.bz==true) {
          var bnz='bz';
        } if (sess.usr==true){
          var bnz='usr'
        } if (!pp) {
          var pp='lst';
        } else if(pp.length>0)
        {var pp =pp} var tyEr;
            
            tyEr ={[ppf]:sess.pmg,p:'5',bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],
            invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],ana:ezp.ana[sess.ln],
            shpk:ezp.shpk[sess.ln],infb:ezp.infb[sess.ln],inlrt:ezp.invlrt[sess.ln],or:ezp.orders[sess.ln],
            task:ezp.task[sess.ln],tran:ezp.transactions[sess.ln],[sess.ln]:true,[bnz]:true, 
           [ppt]:true, [gent]:true, inv: inv,
            title: title,[ezp.bnk]:true,}
            res.render(home, tyEr);


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
  var sess=req.session;
  var home='invnt';
  var title ='Add products';
  if(sess.pp==='1'){
    var ppt ='pp';
    var ppf ='ppf';
  } else if (sess.pp==='0'){
   var ppt='lela';
   var ppf ='nopp';
   if(sess.gen==='male'){
    var gent='m';
  } else if(sess.gen==='female'){
    var gent='g';
  }
  }
          if (sess.bz==true) {
            var bnz='bz';
          } if (sess.usr==true){
            var bnz='usr'
          } if (!pp) {
            var pp='lst';
          } else if(pp.length>0)
          {var pp =pp} var tyEr;
              
              tyEr ={[ppf]:sess.pmg,p:'6',bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],
              invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],ana:ezp.ana[sess.ln],
              shpk:ezp.shpk[sess.ln],infb:ezp.infb[sess.ln],inlrt:ezp.invlrt[sess.ln],or:ezp.orders[sess.ln],
              task:ezp.task[sess.ln],tran:ezp.transactions[sess.ln],[sess.ln]:true,[bnz]:true, 
             [ppt]:true, [gent]:true, 
              title: title,[ezp.bnk]:true,}
              res.render(home, tyEr);
  
    
  


})
router.post('/addm', function(req, res, next) {
  var sess;
sess = req.session;
//sess.isvalid = false;
  var map=req.body;
  var prnm = map.m_name;
  var price = map.m_price;
  var dwln = map.dwn;
  var dmg = map.dmg;
  var itno =map.selectedDropDown;
  
  
  //var sess=req.session;
   
//var optn =[];

  var nv;
  var cid;
  var bod;
  if (sess.isvalid) {
     
    
    nv='dwnld'+sess.logid;
  var CURRENT_TIMESTAMP = { toSqlString: function() { return 'CURRENT_TIMESTAMP()'; } };
                 
  var sqlmu = 'INSERT INTO ?? (??, ??, ??) VALUES (?, ?, ?) '; 

  var paramm = [
    nv,
    'd_nm',
    'd_lnk',
    'd_mg',
    
    prnm,
    dwln,
    dmg
    
  ];
  db.query(sqlmu, paramm, function(err,nv) {
  if (err) throw err;
  



  
 
 

    res.render('invnt', { title: 'Inventory'});
    //res.send(dwln);
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
router.post('/addinv', function(req, res, next) {
  var sessionStore = new MySQLStore(cons.options);
  router.use(session({
    key: cons.ses.key,
    secret: cons.ses.secret,
    store: sessionStore,
    resave: cons.ses.resave,
    saveUninitialized: cons.ses.saveUninitialized
  }));
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
     
    
     
      var imdx = (i-1) * '6';
     
     //optn = [];
   
   
oo.push({     
      
  'nm':map['ddp_option_name_'+i],
  'qn':map['ddp_option_currency_'+i],
 'pr':map['ddp_option_price_'+i],
 'imgur':'null',
 'imdx':imdx,
 'index':i
})
}



sess.oo=oo;
let opps = sess.oo.map(function(element){
  var kk= `{${element.nm}: ${element.qn}}`;
  console.log(kk)
  
 for (let iv = 2; iv <= element.qn; iv++) {
  
  
  // qunat.push({[`${'itr'}`]:iv,[`${'nmm'}`]:`${element.nm}`});
  
   
 
  qunat.push({iv,'nmm':`${element.nm}`});
  
} ; 
sess.qunat=qunat;

})
function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
  const key = obj[property];
  if (!acc[key]) {
  acc[key] = [];
  }
  // Add object to list for given key's value
  acc[key].push(obj);
  
  //acc[key].splice(1, 1, "opt");
  return acc;
  }, {});
  }
  oo.forEach(element => {
    
  
    const gbi = groupBy(sess.qunat,`${'nmm'}`);
  
    //console.log(groupedPeople);
  
  //quna.push(gbi);
  //qnt = ;
  
  oo1.push({
    'nmv' : gbi[`${element.nm}`]
    
    
    })
    
});

  //console.log(groupedPeople);

//quna.push(gbi);
//qnt = ;


for (const key in oo1) {
  
    const element = oo1[key];
    console.log(`${key} => ${oo1[key]}`);
    //oo1[key]; = "Laila"
  
}
//objIndex = myArray.findIndex((obj => obj.id == 1));
var oo2 =[];
oo.forEach(element => {
 var nmt = element.nm
 var nmd = qunat[nmt];
  oo2.push(nmd)
});
  sess.oo2=oo2;
  
//oo1.splice(2, 2, "March", "April");
  //var opp =[];
  
  
    opti = JSON.stringify(oo);
    var opti1 = JSON.stringify(oo1);
    inv='inv'+sess.logid;
  var CURRENT_TIMESTAMP = { toSqlString: function() { return 'CURRENT_TIMESTAMP()'; } };
                 
  var sqlt = 'INSERT INTO ?? (??, ??, ??,??, ??, ??,??, ??, ??, ??, ??) VALUES (?, ?, ?,?, ?, ?,?, ?, ?, ?, ?) '; 

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
    'tme',
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
    CURRENT_TIMESTAMP
  ];
  db.query(sqlt, params, function(err,inv) {
  if (err) throw err;
  
  var prd = inv.insertId;
  //sess.pid = prd;

  var pp='';
  var gen='';
  var home = 'invnt';
var title ='Inventory';
if (sess.bz==true) {
  var bnz='bz';
} if (sess.usr==true){
  var bnz='usr'
} 

 tyEr ={[bnz]:true,pp:pp, gen:gen, title: title,[ezp.bnk]:true,sndm:ezp.sndm[sess.ln],shpk:ezp.shpk[sess.ln],p:'01',withd:ezp.withd[sess.ln],dash:ezp.dashb[sess.ln]}
 
//res.render(home, tyEr);
      
    // res.redirect('/user/inv') 

   // res.render('invnt', { title: 'Inventory'});
    //res.send(opti1);
   var dd = cons.surl;
      //res.render('cards', { usrid: cid});
      uid(4, function (err, string) {
        if (err) throw err
       var st = string;
       var options = {
        errorCorrectionLevel: 'H',
        type: 'image/png',
        quality: 0.1,
        scale: 4,
        margin: 1,
        
        color: {
          dark:"#ffc107",
          light:"#000"
        }}
      var data ='pay.ez/q/'+st;
       var stt ='Active';
       var lnm = "lnk";
       var opt ='0';
       var ty = 'r';
       //var pd = sess.pid;
       
       
           QRCode.toFile('./public/data/uploads/'+st+'.png' ,data, function (err, string) {
            var dest ='/data/uploads/'+st+'.png';
             console.log(string)
           
            
             
            
        
        
       var sqlk = 'INSERT INTO ?? (??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?) '; 
    
      var paramk = [
        'dclinks',
        'linc',
        'lnm',
        'stt',
        'l_opt',
        'pid',
        'ty',
        'qr',
        st,
        prnm,
        stt,
        sess.logid,
        prd,
        ty,
        dest,
        
      ];
      db.query(sqlk, paramk, function(err,inv) {
      if (err) throw err;
      
     
      //res.render('linkz', { title: 'Dc', st:st });
    })
      })})
      //res.redirect('../user/blinks');
      res.redirect('/user/inv') 
    });  
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
   
   


     res.render('profile', { title: 'Edit-profile', daf: daf[0]});
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
 
 
  var sessionStore = new MySQLStore(cons.options);
  router.use(session({
    key: cons.ses.key,
    secret: cons.ses.secret,
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

router.get("/msgs", (req, res) => {
  var sessionStore = new MySQLStore(cons.options);
  router.use(session({
    key: cons.ses.key,
    secret: cons.ses.secret,
    store: sessionStore,
    resave: cons.ses.resave,
    saveUninitialized: cons.ses.saveUninitialized
  }));
  var sess;
sess = req.session;
if(sess.pp==='1'){
  var ppt ='pp'
} else if (sess.pp==='0'){
 var ppt='lela'
 if(sess.gen==='male'){
  var gen='m';
} else if(sess.gen==='female'){
  var gen='g';
}
}
  var home = 'msgs';
var title ='Messeges';
if (sess.bz==true) {
  var bnz='bz';
} if (sess.usr==true){
  var bnz='usr'
} 

 tyEr ={[bnz]:true,[ppt]:true, [gen]:true, title: title,[ezp.bnk]:true,sndm:ezp.sndm[sess.ln],shpk:ezp.shpk[sess.ln],p:'01',withd:ezp.withd[sess.ln],dash:ezp.dashb[sess.ln]}
  res.render(home,tyEr);
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

 
  var sessionStore = new MySQLStore(cons.options);
  router.use(session({
    key: cons.ses.key,
    secret: cons.ses.secret,
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

var sessionStore = new MySQLStore(cons.options);
router.use(session({
  key: cons.ses.key,
  secret: cons.ses.secret,
  store: sessionStore,
  resave: cons.ses.resave,
  saveUninitialized: cons.ses.saveUninitialized
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
                var par; var or;var tr;var inv;var msgt; var pyrt;
              // throw err;
              console.log(result.insertId)
              arp.push({inid:result.insertId});
              
             req.session.inid = result.insertId;
             par = 'passbook'+result.insertId;
              or = 'orde'+result.insertId;
              tr = 'trktble'+result.insertId;
              inv = 'inv'+result.insertId;
              msgt = 'inv'+result.insertId;
              pyrt = 'pyr'+result.insertId;
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

                var schemain = path.join(__dirname, 'schemain.sql');
                fs.readFile(schemain, 'utf-8', function(error, sqlin) {
  
                  sqlin = sqlin.replace(/`[^`]+`/g, '??');
    
                  var parin = [
                    inv,
                    'prd',
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
                    'tme',
                    'cntrl',
                    'prd',
                  ];
                  db.query(sqlin, parin, function(error) {
    
                    if (error) {
                      //throw error('Failed to create sessions database table.');
                     var errorr; req.session.errorr='error 903';
                      //return db.query(sql, params);
                    }
                  })
                  var schemadw = path.join(__dirname, 'schemadw.sql');

                fs.readFile(schemadw, 'utf-8', function(error, sqldw) {
  
                  sqldw = sqldw.replace(/`[^`]+`/g, '??');
    
                  var pardw = [
                    tr,
                    'trid',
                    'nm',
                    'lnc',
                    'tb2',
                    'tme',
                    'idd',
                    'trid',
                  ];
                  db.query(sqldw, pardw, function(error) {
    
                    if (error) {
                      //throw error('Failed to create sessions database table.');
                     var errorr; req.session.errorr='error 903';
                      //return db.query(sql, params);
                    }
                  })
                  var schemamsg = path.join(__dirname, 'schemmsg.sql');

                  fs.readFile(schemamsg, 'utf-8', function(error, sqlmsg) {
    
                    sqlmsg = sqlmsg.replace(/`[^`]+`/g, '??');
      
                    var parmsg = [
                      msgt,
                      'message_id',
                      'send_date',
                      'sender_name',
                      'messages',
                      'scp',
                      'snn',
                      'snid',
                      'message_id',
                    ];
                    db.query(sqlmsg, parmsg, function(error) {
      
                      if (error) {
                        //throw error('Failed to create sessions database table.');
                       var errorr; req.session.errorr='error 903';
                        //return db.query(sql, params);
                      } else {
                        var CURRENT_TIMESTAMP = { toSqlString: function() { return 'CURRENT_TIMESTAMP()'; } };
                        var sqlmst = 'INSERT INTO ?? (??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?)';
                        var parmst = [
                          msgt,
                          'send_date',
                          'sender_name',
                          'messages',
                          'scp',
                          'snn',
                          'snid',

                          CURRENT_TIMESTAMP,
                          'Ezpay',
                          'welcome to ezana payment service platform please make sure to complete',
                          '#d7d8da',
                          '0',
                          '1',
                        ];
                        
                        
                        db.query(sqlmst, parmst, function (err, result, fields) {
                          if (err) {
                            //throw error('Failed to create sessions database table.');
                           var errorr; req.session.errorr='error 903';
                            //return db.query(sql, params);
                          }
                        })
                      }
                    })
                    var schemapyr = path.join(__dirname, 'schemapyr.sql');

                  fs.readFile(schemapyr, 'utf-8', function(error, sqlpyr) {
    
                    sqlpyr = sqlpyr.replace(/`[^`]+`/g, '??');
      
                    var parpyr = [
                      pyrt,
                      'pyid',
                      'nm',
                      'amt',
                      'eid',
                      'pyid',
                    ];
                    db.query(sqlpyr, parpyr, function(error) {
      
                      if (error) {
                        //throw error('Failed to create sessions database table.');
                       var errorr; req.session.errorr='error 903';
                        //return db.query(sql, params);
                      }
                    })
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
                    'snn',
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
                }) }) })})})
                })
                
              })
              
      })
    
            })
          })
        })
          
          //res.send(arp);
            res.render('verify',{mail: req.body.mail});
            
        }

   
}); 
   
 
// handler for the /user/:id path, which prints the user ID


/* GET home page. */



module.exports = router;

