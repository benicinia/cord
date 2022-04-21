var express = require('express');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var db=require('../databse');
var isArray = require('isArray');
var $ = require('jquery');
var ajax = require('ajax'); 
var redis = require('redis');
var session = require('express-session');
var ezp = require('../constants');
var cons = require('../constants');
var MySQLStore = require('express-mysql-session')(session);
var mysqli = require('mysqli'); 
var hbs = require('express-hbs');
var cors=require("cors");
var expressValidator = require('express-validator');
const json = require('body-parser/lib/types/json');
var app = express();
var urlencodedparser = bodyparser.urlencoded({  extended: false});
//const json = require('body-parser/lib/types/json');

router.use(express.json());
//router.use(bodyparser.json());


//app.use(session({secret: 'ssshhhhh'}));



 


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

/* GET home page. */
router.get('/:str', function(req, res,next) {

  var sess;
  sess=req.session;
  var strr = req.params.str;
  var rurl = '../q/'+strr;
  //var id = req.params.id;
  var dc = 'dclinks';
  if (sess.isvalid) {
    
    db.query('SELECT * FROM ?? WHERE ?? = ?', [dc,'linc',strr], function (err, ldd, fields) {
    
      if(!err==true){
        //throw err
        try {
          var prd=ldd[0].pid;
          var mid=ldd[0].l_opt;
          var ty=ldd[0].ty; 
          var lid =ldd[0].lid;
         var stst = ldd[0].stat;
         var ustst  = ([stst])^['1'];
         var sqlup = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
          
         var parup = [
           'dclinks',
           'stat',
           ustst,
           'lid',
           lid
         ];
         db.query(sqlup, parup, function (err, resup, fields) {})
          
          
      } catch (err) {
         
          console.log(err); 
          //req.session.phnt = false;
           // res.json({msg:'error'})
            res.redirect('/');
           // res.end()
          
      }
     
     
      
  
  if (ty === 'r') {
    
  
     var inv = 'inv'+mid;
     db.query('SELECT * FROM ?? WHERE ?? = ?', [inv,'prd',prd], function (err, ldt, fields) { 
      
    
    
      if(!err==true){
        //throw err
        try {
         var u = '9';
         var k =[]
         var k =[]
         
         // var iti =[{nmj:[2,3,4,5,6,7,8],nmj:[2,3,4,5,6,7],nmj:[2,3,4,5,6]}];
         var prc=ldt[0].prc;
          var opt = ldt[0].optnz;
          var nopt = ldt[0].nopt;
          var prnm = ldt[0].pr_nm;
          var nmv =ldt[0].quant;
          var tme =ldt[0].tme;
          var prd=ldt[0].prd;
        //var  mnt = tme.toDate
          
           nmv = JSON.parse(nmv);
          opt = JSON.parse(opt);
          opt.forEach(t => {
            
          
          for (let p = 2; p <= t.qn; p++) {
            k.push({'k':{'itm':t.nm,'itr':p}})
            
          }});
          
          //qnt = JSON.parse(qun);
          var itr = [];
          var ity = [];
          opt.forEach(element => {
            for (let i = 2; i <= element.qn; i++) {
              
                
                
             
             
              itr.push(i)
             
              
            console.log(itr)
          }
         
          ity.push({'mmj':itr})
          h=1; 
          ity.forEach(f => {
           var g= f.mmj;
           //ity.splice(element[h].qn-1, element[h+1].qn);
           h++;
          });
          });
          
         var quna = [];
         var qunat = [];
         let opps = opt.map(function(element){
          var kk= `{${element.nm}: ${element.qn}}`;
          console.log(kk)
      
       
        
      
           
         
         
       
          //const nt = qnt[i];
       
         for (let i = 2; i <= element.qn; i++) {
          
          
           qunat.push({[`${'itr'}`]:i,[`${'nmm'}`]:`${element.nm}`});
          
         } ;   
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
          const gbi = groupBy(k,`${'itm'}`);
          //console.log(groupedPeople);
       // l.push(gbi);
        
         // iti = json(iti);
      })
      } catch (err) {
         
          console.log(err); 
          //req.session.phnt = false;
           // res.json({msg:'error'})
           // res.redirect('/');
           // res.end()
          
      }
     
      }
      tme= new Date(tme);
          //tme = time(tme)
          tme = Math.round(tme.getTime() / 1000);
          var fg = Date.now();
         var ct =Math.round(fg/1000);
          var tyme =ct-tme;
          if (tyme <= 60 ) {
           var sec = tyme;
          res.render('secure1', {ss:true, title: 'Shop',prd:prd,typ:'r',mm:mid, ldt:ldt, prc:prc, opt:opt, prnm:prnm, nmv:nmv,qunat:qunat,k:k,nopt:nopt,sec:sec,se:true });
  
          }
          if (  tyme >= 60 && tyme <= 3600 ) {
            var min = (Math.round(tyme / 60));
          res.render('secure1', { ss:true,title: 'Shop',typ:'r',prd:prd, mm:mid, ldt:ldt, prc:prc, opt:opt, prnm:prnm, nmv:nmv,qunat:qunat,k:k,nopt:nopt,min:min,mi:true });
          }
          if ( tyme >= 3600 && tyme <= 86400 ) {
            var hrs = Math.round(tyme / 3600);
            res.render('secure1', {ss:true, title: 'Shop',typ:'r',prd:prd, mm:mid, ldt:ldt, prc:prc, opt:opt, prnm:prnm, nmv:nmv,qunat:qunat,k:k,nopt:nopt,hrs:hrs,hr:true });
  
           }
          if (tyme >= 86400 && tyme <= 604800 ) {
            var days = Math.round(tyme / 86400);
           res.render('secure1', {ss:true, title: 'Shop',typ:'r',prd:prd, mm:mid, ldt:ldt, prc:prc, opt:opt, prnm:prnm, nmv:nmv,qunat:qunat,k:k,nopt:nopt,days:days,day:true });
  
          }
          if (tyme >= 604800 && tyme <= 24192000 ) {
            var weeks = Math.round(tyme / 604800);
  
            res.render('secure1', {ss:true, title: 'Shop',typ:'r',prd:prd, mm:mid, ldt:ldt, prc:prc, opt:opt, prnm:prnm, nmv:nmv,qunat:qunat,k:k,nopt:nopt,weeks:weeks,week:true });
   
           }
   ///res.render('secure1', { title: 'Dc', ldt:ldt, prc:prc, opt:opt, prnm:prnm, nmv:nmv,qunat:qunat,k:k,nopt:nopt,tme:tme });
   //res.send({tyme})
    
  }) 
  } else if(ty==='m')  {
   // var mm = 'dwnld'+id;
   var mm = 'trktble'+mid;
   var d_id = '1';
    db.query('SELECT * FROM ?? WHERE ?? = ?', [mm,'idd',strr], function (err, ldm, fields) { 
      if(!err==true){
        try {
          var u = '9';
          var k =[]
          var k =[]
          
          // var iti =[{nmj:[2,3,4,5,6,7,8],nmj:[2,3,4,5,6,7],nmj:[2,3,4,5,6]}];
          var prn=ldm[0].nm;
          var dwn=ldm[0].lnc;
          var trid=ldm[0].trid;
          var prc='2';
          //var dmg=ldm[0].d_mg;
          var tme =ldm[0].tme;
         
          
          btnm = {
            "trid":`${trid}`,
            "typ":`${ty}`,
            //"bznm":`${unm}`,
            //"bzphn": `${btphn}`,
            "prc": `${prc}`,
            //"bzemail": `${email}`,
            
            "nm": `${nm}`,
            "lnc": `${dwn}`,
            "mm": `${mm}`,
            //"veri": `${veri}`,
            //"adrr": `${adrr}`,
           // "tst": `${req.session.tst}`,
          }
        
        //sess.btnm = btnd;
  
  
          } catch (err) {
         
            console.log(err); 
            //req.session.phnt = false;
             // res.json({msg:'error'})
             // res.redirect('/');
             // res.end()
            
        }
  
      } 
      tme= new Date(tme);
          //tme = time(tme)
          tme = Math.round(tme.getTime() / 1000);
          var fg = Date.now();
         var ct =Math.round(fg/1000);
          var tyme =ct-tme;
          if (ezp.bnk==='ab') {
            if (tyme <= 60 ) {
              var sec = tyme;
             res.render('securem', { title: 'Dc',ab:true, mm:mid, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,sec:sec,se:true });
     
             }
             if (  tyme >= 60 && tyme <= 3600 ) {
               var min = (Math.round(tyme / 60));
             res.render('securem', { title: 'Dc',ab:true, mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,min:min,mi:true });
             }
             if ( tyme >= 3600 && tyme <= 86400 ) {
               var hrs = Math.round(tyme / 3600);
               res.render('securem', { title: 'Dc',ab:true,mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,hrs:hrs,hr:true });
     
              }
             if (tyme >= 86400 && tyme <= 604800 ) {
               var days = Math.round(tyme / 86400);
              res.render('securem', { title: 'Dc',ab:true, mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,days:days,day:true });
     
             }
             if (tyme >= 604800 && tyme <= 24192000 ) {
               var weeks = Math.round(tyme / 604800);
     
               res.render('securem', { title: 'Dc',ab:true, mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,weeks:weeks,week:true });
      
              }
            
          } else if (ezp.bnk==='com') {
            if (tyme <= 60 ) {
              var sec = tyme;
             res.render('securem', { title: 'Dc',com:true, mm:mid, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,sec:sec,se:true });
     
             }
             if (  tyme >= 60 && tyme <= 3600 ) {
               var min = (Math.round(tyme / 60));
             res.render('securem', { title: 'Dc',com:true, mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,min:min,mi:true });
             }
             if ( tyme >= 3600 && tyme <= 86400 ) {
               var hrs = Math.round(tyme / 3600);
               res.render('securem', { title: 'Dc',com:true,mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,hrs:hrs,hr:true });
     
              }
             if (tyme >= 86400 && tyme <= 604800 ) {
               var days = Math.round(tyme / 86400);
              res.render('securem', { title: 'Dc',com:true, mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,days:days,day:true });
     
             }
             if (tyme >= 604800 && tyme <= 24192000 ) {
               var weeks = Math.round(tyme / 604800);
     
               res.render('securem', { title: 'Dc',com:true, mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,weeks:weeks,week:true });
      
              }
            
          }else if (ezp.bnk==='nb') {
            
          }
          if (tyme <= 60 ) {
           var sec = tyme;
          res.render('securem', { title: 'Dc', mm:mid, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,sec:sec,se:true });
  
          }
          if (  tyme >= 60 && tyme <= 3600 ) {
            var min = (Math.round(tyme / 60));
          res.render('securem', { title: 'Dc', mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,min:min,mi:true });
          }
          if ( tyme >= 3600 && tyme <= 86400 ) {
            var hrs = Math.round(tyme / 3600);
            res.render('securem', { title: 'Dc',mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,hrs:hrs,hr:true });
  
           }
          if (tyme >= 86400 && tyme <= 604800 ) {
            var days = Math.round(tyme / 86400);
           res.render('securem', { title: 'Dc', mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,days:days,day:true });
  
          }
          if (tyme >= 604800 && tyme <= 24192000 ) {
            var weeks = Math.round(tyme / 604800);
  
            res.render('securem', { title: 'Dc', mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,weeks:weeks,week:true });
   
           }
      
    })
    
  } 
  else if(ty==='d')  {
    // var mm = 'dwnld'+id;
    var mym = 'dclinks';
    var d_id = '1';
     db.query('SELECT * FROM ?? WHERE ?? = ?', [mym,'linc',strr], function (err, lddn, fields) { 
       if(!err==true){
         try {
           var u = '9';
           var k =[]
           var k =[]
           
           // var iti =[{nmj:[2,3,4,5,6,7,8],nmj:[2,3,4,5,6,7],nmj:[2,3,4,5,6]}];
          // var prn=lddn[0].uname;
           //var dwn=lddn[0].lnc;
           //var trid=lddn[0].trid;
           var prc='2';
           //var dmg=ldm[0].d_mg;
           var tme =lddn[0].tme;
          
           
          
         //sess.btnm = btnd;
   
   
           } catch (err) {
          
             console.log(err); 
             //req.session.phnt = false;
              // res.json({msg:'error'})
              // res.redirect('/');
              // res.end()
             
         }
   
       } 
       
       tme= new Date(tme);
           //tme = time(tme)
           tme = Math.round(tme.getTime() / 1000);
           var fg = Date.now();
          var ct =Math.round(fg/1000);
           var tyme =ct-tme;
           var ab =ezp.bnk;
           if (ezp.bnk==='ab') {
           
         
           if (tyme <= 60 ) {
            var sec = tyme;
          // res.render('secured', { title: 'Dc', mm:mid, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,sec:sec,se:true });
          res.render('secured',{ title: 'Donations', ab:ab,lddn:lddn });
           }
           if (  tyme >= 60 && tyme <= 3600 ) {
             var min = (Math.round(tyme / 60));
          // res.render('secured', { title: 'Dc', mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,min:min,mi:true });
          res.render('secured', { title: 'Donations', ab:ab,lddn:lddn });
           }
           if ( tyme >= 3600 && tyme <= 86400 ) {
             var hrs = Math.round(tyme / 3600);
            // res.render('secured', { title: 'Dc',mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,hrs:hrs,hr:true });
            res.render('secured', { title: 'Donations',ab:ab,lddn:lddn });
            }
           if (tyme >= 86400 && tyme <= 604800 ) {
             var days = Math.round(tyme / 86400);
           // res.render('secured', { title: 'Dc', mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,days:days,day:true });
           res.render('secured', { title: 'Donations', ab:ab,lddn:lddn });
           }
           if (tyme >= 604800 && tyme <= 24192000 ) {
             var weeks = Math.round(tyme / 604800);
   
            // res.render('secured', { title: 'Dc', mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,weeks:weeks,week:true });
     res.render('secured', { title: 'Donations', ab:ab,lddn:lddn });
            } } else if (ezp.bnk ==='com'){
  
              if (tyme <= 60 ) {
                var sec = tyme;
              // res.render('secured', { title: 'Dc', mm:mid, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,sec:sec,se:true });
              res.render('secured',{ title: 'Donations', com:ab, });
               }
               if (  tyme >= 60 && tyme <= 3600 ) {
                 var min = (Math.round(tyme / 60));
              // res.render('secured', { title: 'Dc', mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,min:min,mi:true });
              res.render('secured', { title: 'Donations', com:ab, });
               }
               if ( tyme >= 3600 && tyme <= 86400 ) {
                 var hrs = Math.round(tyme / 3600);
                // res.render('secured', { title: 'Dc',mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,hrs:hrs,hr:true });
                res.render('secured', { title: 'Donations',com:ab, });
                }
               if (tyme >= 86400 && tyme <= 604800 ) {
                 var days = Math.round(tyme / 86400);
               // res.render('secured', { title: 'Dc', mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,days:days,day:true });
               res.render('secured', { title: 'Donations', com:ab, });
               }
               if (tyme >= 604800 && tyme <= 24192000 ) {
                 var weeks = Math.round(tyme / 604800);
       
                // res.render('secured', { title: 'Dc', mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,weeks:weeks,week:true });
         res.render('secured', { title: 'Donations', com:ab, });
                }
            }
       
     })
     
   } 
  
  }
  })
} else if (!sess.isvalid) {
  
  

  db.query('SELECT * FROM ?? WHERE ?? = ?', ['dclinks','linc',strr], function (err, ldd, fields) {
    
    if(!err==true){
      //throw err
      try {
        var prd=ldd[0].pid;
        var mid=ldd[0].l_opt;
        var ty=ldd[0].ty; 
        var lid =ldd[0].lid;
       var stst = ldd[0].stat;
       var ustst  = ([stst])^['1'];
       const ip = req.socket.remoteAddress;
const remoteAddresParams = ip.split(':');
const clientIP = remoteAddresParams[remoteAddresParams.length -1];
  var statt ='lstatt'+mid;
  var CURRENT_TIMESTAMP = { toSqlString: function() { return 'CURRENT_TIMESTAMP()'; } };
  var currentDate = new Date();
    var dat8 = currentDate.getUTCDay();
    var day = currentDate.getUTCDate();
    if (day<=7) {
      var utcw = 'week1';
    } else 
      if (day>=7 && day<=14 ){
        var utcw = 'week2';
      }else 
      if (day>=14 && day<=21 ){
        var utcw = 'week3';
      }else 
      if (day>=21 && day<=31 ){
        var utcw = 'week4';
      }
    
  var sqlup = 'INSERT INTO ?? (??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?)';
        
  var parup = [
    statt,
    'url_id',
    'clickdate',
    'cdate',
    'cweek',
    'ip',
    'referer',
    lid,
    CURRENT_TIMESTAMP,
    dat8,
    utcw,
    clientIP,
    'benny',
    
  ];
  db.query(sqlup, parup, function (err, resup, fields) {
if (err) throw err;

  })
        
        
    } catch (err) {
       
        console.log(err); 
        //req.session.phnt = false;
         // res.json({msg:'error'})
          res.redirect('/');
         // res.end()
        
    }
   
   
    

if (ty === 'r') {
  
   var inv = 'inv'+mid;
   db.query('SELECT * FROM ?? WHERE ?? = ?', [inv,'prd',prd], function (err, ldt, fields) { 
    
  
  
    if(!err==true){
      //throw err
      try {
       var u = '9';
       var k =[]
       var k =[]
       
       // var iti =[{nmj:[2,3,4,5,6,7,8],nmj:[2,3,4,5,6,7],nmj:[2,3,4,5,6]}];
       var prc=ldt[0].prc;
        var opt = ldt[0].optnz;
        var nopt = ldt[0].nopt;
        var prnm = ldt[0].pr_nm;
        var nmv =ldt[0].quant;
        var tme =ldt[0].tme;
        var prd=ldt[0].prd;
      //var  mnt = tme.toDate
        
         nmv = JSON.parse(nmv);
        opt = JSON.parse(opt);
        opt.forEach(t => {
          
        
        for (let p = 2; p <= t.qn; p++) {
          k.push({'k':{'itm':t.nm,'itr':p}})
          
        }});
        
        //qnt = JSON.parse(qun);
        var itr = [];
        var ity = [];
        opt.forEach(element => {
          for (let i = 2; i <= element.qn; i++) {
            
              
              
           
           
            itr.push(i)
           
            
          console.log(itr)
        }
       
        ity.push({'mmj':itr})
        h=1; 
        ity.forEach(f => {
         var g= f.mmj;
         //ity.splice(element[h].qn-1, element[h+1].qn);
         h++;
        });
        });
        
       var quna = [];
       var qunat = [];
       let opps = opt.map(function(element){
        var kk= `{${element.nm}: ${element.qn}}`;
        console.log(kk)
    
     
      
    
         
       
       
     
        //const nt = qnt[i];
     
       for (let i = 2; i <= element.qn; i++) {
        
        
         qunat.push({[`${'itr'}`]:i,[`${'nmm'}`]:`${element.nm}`});
        
       } ;   
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
        const gbi = groupBy(k,`${'itm'}`);
        //console.log(groupedPeople);
      l.push(gbi);
      
       // iti = json(iti);
    })
    } catch (err) {
       
        console.log(err); 
        //req.session.phnt = false;
         // res.json({msg:'error'})
         // res.redirect('/');
         // res.end()
        
    }
   
    }
    tme= new Date(tme);
        //tme = time(tme)
        tme = Math.round(tme.getTime() / 1000);
        var fg = Date.now();
       var ct =Math.round(fg/1000);
        var tyme =ct-tme;
      //  res.send(day)
        if (tyme <= 60 ) {
         var sec = tyme;
        res.render('secure1', { nss:true,title: 'Shop',prd:prd,typ:'r',mm:mid, ldt:ldt, prc:prc, opt:opt, prnm:prnm, nmv:nmv,qunat:qunat,k:k,nopt:nopt,sec:sec,se:true });

        }
        if (  tyme >= 60 && tyme <= 3600 ) {
          var min = (Math.round(tyme / 60));
        res.render('secure1', { nss:true,title: 'Shop',typ:'r',prd:prd, mm:mid, ldt:ldt, prc:prc, opt:opt, prnm:prnm, nmv:nmv,qunat:qunat,k:k,nopt:nopt,min:min,mi:true });
        }
        if ( tyme >= 3600 && tyme <= 86400 ) {
          var hrs = Math.round(tyme / 3600);
          res.render('secure1', {nss:true, title: 'Shop',typ:'r',prd:prd, mm:mid, ldt:ldt, prc:prc, opt:opt, prnm:prnm, nmv:nmv,qunat:qunat,k:k,nopt:nopt,hrs:hrs,hr:true });

         }
        if (tyme >= 86400 && tyme <= 604800 ) {
          var days = Math.round(tyme / 86400);
         res.render('secure1', {nss:true, title: 'Shop',typ:'r',prd:prd, mm:mid, ldt:ldt, prc:prc, opt:opt, prnm:prnm, nmv:nmv,qunat:qunat,k:k,nopt:nopt,days:days,day:true });

        }
        if (tyme >= 604800 && tyme <= 24192000 ) {
          var weeks = Math.round(tyme / 604800);

          res.render('secure1', {nss:true, title: 'Shop',typ:'r',prd:prd, mm:mid, ldt:ldt, prc:prc, opt:opt, prnm:prnm, nmv:nmv,qunat:qunat,k:k,nopt:nopt,weeks:weeks,week:true });
 
         }
 ///res.render('secure1', { title: 'Dc', ldt:ldt, prc:prc, opt:opt, prnm:prnm, nmv:nmv,qunat:qunat,k:k,nopt:nopt,tme:tme });
 //res.send({tyme})
  
}) 
} else if(ty==='m')  {
 // var mm = 'dwnld'+id;
 var mm = 'trktble'+mid;
 var d_id = '1';
  db.query('SELECT * FROM ?? WHERE ?? = ?', [mm,'idd',strr], function (err, ldm, fields) { 
    if(!err==true){
      try {
        var u = '9';
        var k =[]
        var k =[]
        
        // var iti =[{nmj:[2,3,4,5,6,7,8],nmj:[2,3,4,5,6,7],nmj:[2,3,4,5,6]}];
        var prn=ldm[0].nm;
        var dwn=ldm[0].lnc;
        var trid=ldm[0].trid;
        var prc='2';
        //var dmg=ldm[0].d_mg;
        var tme =ldm[0].tme;
       
        
        btnm = {
          "trid":`${trid}`,
          "typ":`${ty}`,
          //"bznm":`${unm}`,
          //"bzphn": `${btphn}`,
          "prc": `${prc}`,
          //"bzemail": `${email}`,
          
          "nm": `${nm}`,
          "lnc": `${dwn}`,
          "mm": `${mm}`,
          //"veri": `${veri}`,
          //"adrr": `${adrr}`,
         // "tst": `${req.session.tst}`,
        }
      
      //sess.btnm = btnd;


        } catch (err) {
       
          console.log(err); 
          //req.session.phnt = false;
           // res.json({msg:'error'})
           // res.redirect('/');
           // res.end()
          
      }

    } 
    tme= new Date(tme);
        //tme = time(tme)
        tme = Math.round(tme.getTime() / 1000);
        var fg = Date.now();
       var ct =Math.round(fg/1000);
        var tyme =ct-tme;
        if (ezp.bnk==='ab') {
          if (tyme <= 60 ) {
            var sec = tyme;
           res.render('securem', { title: 'Dc',ab:true, mm:mid, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,sec:sec,se:true });
   
           }
           if (  tyme >= 60 && tyme <= 3600 ) {
             var min = (Math.round(tyme / 60));
           res.render('securem', { title: 'Dc',ab:true, mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,min:min,mi:true });
           }
           if ( tyme >= 3600 && tyme <= 86400 ) {
             var hrs = Math.round(tyme / 3600);
             res.render('securem', { title: 'Dc',ab:true,mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,hrs:hrs,hr:true });
   
            }
           if (tyme >= 86400 && tyme <= 604800 ) {
             var days = Math.round(tyme / 86400);
            res.render('securem', { title: 'Dc',ab:true, mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,days:days,day:true });
   
           }
           if (tyme >= 604800 && tyme <= 24192000 ) {
             var weeks = Math.round(tyme / 604800);
   
             res.render('securem', { title: 'Dc',ab:true, mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,weeks:weeks,week:true });
    
            }
          
        } else if (ezp.bnk==='com') {
          if (tyme <= 60 ) {
            var sec = tyme;
           res.render('securem', { title: 'Dc',com:true, mm:mid, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,sec:sec,se:true });
   
           }
           if (  tyme >= 60 && tyme <= 3600 ) {
             var min = (Math.round(tyme / 60));
           res.render('securem', { title: 'Dc',com:true, mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,min:min,mi:true });
           }
           if ( tyme >= 3600 && tyme <= 86400 ) {
             var hrs = Math.round(tyme / 3600);
             res.render('securem', { title: 'Dc',com:true,mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,hrs:hrs,hr:true });
   
            }
           if (tyme >= 86400 && tyme <= 604800 ) {
             var days = Math.round(tyme / 86400);
            res.render('securem', { title: 'Dc',com:true, mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,days:days,day:true });
   
           }
           if (tyme >= 604800 && tyme <= 24192000 ) {
             var weeks = Math.round(tyme / 604800);
   
             res.render('securem', { title: 'Dc',com:true, mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,weeks:weeks,week:true });
    
            }
          
        }else if (ezp.bnk==='nb') {
          
        }
        if (tyme <= 60 ) {
         var sec = tyme;
        res.render('securem', { title: 'Dc', mm:mid, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,sec:sec,se:true });

        }
        if (  tyme >= 60 && tyme <= 3600 ) {
          var min = (Math.round(tyme / 60));
        res.render('securem', { title: 'Dc', mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,min:min,mi:true });
        }
        if ( tyme >= 3600 && tyme <= 86400 ) {
          var hrs = Math.round(tyme / 3600);
          res.render('securem', { title: 'Dc',mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,hrs:hrs,hr:true });

         }
        if (tyme >= 86400 && tyme <= 604800 ) {
          var days = Math.round(tyme / 86400);
         res.render('securem', { title: 'Dc', mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,days:days,day:true });

        }
        if (tyme >= 604800 && tyme <= 24192000 ) {
          var weeks = Math.round(tyme / 604800);

          res.render('securem', { title: 'Dc', mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,weeks:weeks,week:true });
 
         }
    
  })
  
} 
else if(ty==='d')  {
  var uidd= ldd[0].l_opt;
  var dnid = ldd[0].pid;
  var dntb ='dntbl'+uidd;
  db.query('SELECT * FROM ?? WHERE ?? = ?', [dntb,'dnid',dnid], function (err, ldnt, fields) { 

  
  // var mm = 'dwnld'+id;
  var mym = 'dclinks';
  var d_id = '1';
  
     
 
     var tme = ldd[0].tme;
     
     tme= new Date(tme);
         //tme = time(tme)
         tme = Math.round(tme.getTime() / 1000);
         var fg = Date.now();
        var ct =Math.round(fg/1000);
         var tyme =ct-tme;
         var ab =ezp.bnk;
        // res.send(lddn)
         if (ezp.bnk==='ab') {
         
       
         if (tyme <= 60 ) {
          var sec = tyme;
        // res.render('secured', { title: 'Dc', mm:mid, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,sec:sec,se:true });
        res.render('secured',{ title: 'Donations', ab:true, pid:ldd[0].pid, lddn:ldd,l_opt:ldd[0].l_opt,mm:mid, ldnt:ldnt[0]});
         }
         if (  tyme >= 60 && tyme <= 3600 ) {
           var min = (Math.round(tyme / 60));
        // res.render('secured', { title: 'Dc', mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,min:min,mi:true });
        res.render('secured', { title: 'Donations', ab:true,lddn:ldd,pid:ldd[0].pid,l_opt:ldd[0].l_opt,mm:mid,ldnt:ldnt[0] });
         }
         if ( tyme >= 3600 && tyme <= 86400 ) {
           var hrs = Math.round(tyme / 3600);
          // res.render('secured', { title: 'Dc',mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,hrs:hrs,hr:true });
          res.render('secured', { title: 'Donations',ab:true,lddn:ldd,pid:ldd[0].pid,l_opt:ldd[0].l_opt,mm:mid,ldnt:ldnt[0] });
          }
         if (tyme >= 86400 && tyme <= 604800 ) {
           var days = Math.round(tyme / 86400);
         // res.render('secured', { title: 'Dc', mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,days:days,day:true });
         res.render('secured', { title: 'Donations', ab:true,lddn:ldd,pid:ldd[0].pid,l_opt:ldd[0].l_opt,mm:mid, ldnt:ldnt[0]});
         }
         if (tyme >= 604800 && tyme <= 24192000 ) {
           var weeks = Math.round(tyme / 604800);
 
          // res.render('secured', { title: 'Dc', mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,weeks:weeks,week:true });
   res.render('secured', { title: 'Donations', ab:true,lddn:ldd,pid:ldd[0].pid,l_opt:ldd[0].l_opt,mm:mid,ldnt:ldnt[0] });
          } } else if (ezp.bnk ==='com'){

            if (tyme <= 60 ) {
              var sec = tyme;
            // res.render('secured', { title: 'Dc', mm:mid, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,sec:sec,se:true });
            res.render('secured',{ title: 'Donations', com:true,lddn:ldd });
             }
             if (  tyme >= 60 && tyme <= 3600 ) {
               var min = (Math.round(tyme / 60));
            // res.render('secured', { title: 'Dc', mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,min:min,mi:true });
            res.render('secured', { title: 'Donations', com:true,lddn:ldd });
             }
             if ( tyme >= 3600 && tyme <= 86400 ) {
               var hrs = Math.round(tyme / 3600);
              // res.render('secured', { title: 'Dc',mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,hrs:hrs,hr:true });
              res.render('secured', { title: 'Donations',com:true,lddn:ldd });
              }
             if (tyme >= 86400 && tyme <= 604800 ) {
               var days = Math.round(tyme / 86400);
             // res.render('secured', { title: 'Dc', mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,days:days,day:true });
             res.render('secured', { title: 'Donations', com:true, lddn:ldd});
             }
             if (tyme >= 604800 && tyme <= 24192000 ) {
               var weeks = Math.round(tyme / 604800);
     
              // res.render('secured', { title: 'Dc', mm:mid, ldt:ldm, ldd:ldd, trid:trid, prc:prc, opt:dwn, prnm:prn,weeks:weeks,week:true });
       res.render('secured', { title: 'Donations', com:ab, lddn:ldd});
              }
          }
     
        })
   
 } 

}
})
  
  
}
});



module.exports = router;

