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

app.use(express.json());
//router.use(bodyparser.json());


//app.use(session({secret: 'ssshhhhh'}));

var sessionStore = new MySQLStore(ezp.options);
  app.use(session({
    key: ezp.ses.key,
    secret: ezp.ses.secret,
    store: sessionStore,
    resave: ezp.ses.resave,
    saveUninitialized: ezp.ses.saveUninitialized
  }));


var sess;

/* GET home page. */
app.get('/:str', function(req, res,next) {
  var sess;
  sess=req.session;
  var strr = req.params.str;
  
  //var id = req.params.id;
  var dc = 'dclinks';
  if (!sess.isvalid) {
    
  
	var dt = req.body.dt
  if (pp === '0') {
    if (gen === 'male'  ) {
      res.render('landx', { title: 'checkout', m:sess.gen, ph:sess.ph, nm:sess.bnm, mnme: sess.mnme, pnh:sess.pnh, payn:sess.payb, bnme: sess.bnme, btnd:sess.btnd});
    
    } else {
      res.render('landx', { title: 'checkout', g:sess.gen, ph:sess.ph, nm:sess.bnm, mnme: sess.mnme, pnh:sess.pnh, payn:sess.payb, bnme: sess.bnme, btnd:sess.btnd});
    
    }
  } else {
    if (gen === 'male'  ) {
      res.render('landx', { title: 'checkout',pp:sess.pp,  ph:sess.ph, nm:sess.bnm, mnme: sess.mnme, pnh:sess.pnh, payn:sess.payb, bnme: sess.bnme, btnd:sess.btnd});
    
    } else {
      res.render('landx', { title: 'checkout', pp:sess.pp, ph:sess.ph, nm:sess.bnm, mnme: sess.mnme, pnh:sess.pnh, payn:sess.payb, bnme: sess.bnme, btnd:sess.btnd});
    
    }
  }
} else {
  
  db.query('SELECT * FROM ?? WHERE ?? = ?', [dc,'linc',strr], function (err, ldd, fields) { 
    if(!err==true){
      //throw err
      try {
        var prd=ldd[0].pid;
        var mid=ldd[0].l_opt;
        var ty=ldd[0].ty; 

        sess.strr=strr;
        sess.mid=mid;
        sess.ty=ty;
        
        
    } catch (err) {
       
        console.log(err); 
        //req.session.phnt = false;
         // res.json({msg:'error'})
          res.redirect('/');
         // res.end()
        
    }
   
   
    

if (sess.ty === 'r') {
  

   var inv = 'inv'+id;
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
        if (tyme <= 60 ) {
         var sec = tyme;
        res.render('secure1', { title: 'Dc', ldt:ldt, prc:prc, opt:opt, prnm:prnm, nmv:nmv,qunat:qunat,k:k,nopt:nopt,sec:sec,se:true });

        }
        if (  tyme >= 60 && tyme <= 3600 ) {
          var min = (Math.round(tyme / 60));
        res.render('secure1', { title: 'Dc', ldt:ldt, prc:prc, opt:opt, prnm:prnm, nmv:nmv,qunat:qunat,k:k,nopt:nopt,min:min,mi:true });
        }
        if ( tyme >= 3600 && tyme <= 86400 ) {
          var hrs = Math.round(tyme / 3600);
          res.render('secure1', { title: 'Dc', ldt:ldt, prc:prc, opt:opt, prnm:prnm, nmv:nmv,qunat:qunat,k:k,nopt:nopt,hrs:hrs,hr:true });

         }
        if (tyme >= 86400 && tyme <= 604800 ) {
          var days = Math.round(tyme / 86400);
         res.render('secure1', { title: 'Dc', ldt:ldt, prc:prc, opt:opt, prnm:prnm, nmv:nmv,qunat:qunat,k:k,nopt:nopt,days:days,day:true });

        }
        if (tyme >= 604800 && tyme <= 24192000 ) {
          var weeks = Math.round(tyme / 604800);

          res.render('secure1', { title: 'Dc', ldt:ldt, prc:prc, opt:opt, prnm:prnm, nmv:nmv,qunat:qunat,k:k,nopt:nopt,weeks:weeks,week:true });
 
         }
 ///res.render('secure1', { title: 'Dc', ldt:ldt, prc:prc, opt:opt, prnm:prnm, nmv:nmv,qunat:qunat,k:k,nopt:nopt,tme:tme });
 //res.send({tyme})
  
}) 
} else if(ty==='m')  {
 // var mm = 'dwnld'+id;
 var mm = 'trktble'+sess.mid;
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
        res.render('securem', { title: 'Dc', ldt:ldm, trid:trid, prc:prc, opt:dwn, prnm:prn,sec:sec,se:true });

        }
        if (  tyme >= 60 && tyme <= 3600 ) {
          var min = (Math.round(tyme / 60));
        res.render('securem', { title: 'Dc', ldt:ldm, trid:trid, prc:prc, opt:dwn, prnm:prn,min:min,mi:true });
        }
        if ( tyme >= 3600 && tyme <= 86400 ) {
          var hrs = Math.round(tyme / 3600);
          res.render('securem', { title: 'Dc', ldt:ldm, trid:trid, prc:prc, opt:dwn, prnm:prn,hrs:hrs,hr:true });

         }
        if (tyme >= 86400 && tyme <= 604800 ) {
          var days = Math.round(tyme / 86400);
         res.render('securem', { title: 'Dc', ldt:ldm, trid:trid, prc:prc, opt:dwn, prnm:prn,days:days,day:true });

        }
        if (tyme >= 604800 && tyme <= 24192000 ) {
          var weeks = Math.round(tyme / 604800);

          res.render('securem', { title: 'Dc', ldt:ldm, trid:trid, prc:prc, opt:dwn, prnm:prn,weeks:weeks,week:true });
 
         }
    
  })
  
} 

}
})
  
  
}
});



module.exports = router;

