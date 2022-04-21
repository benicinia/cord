var express = require('express');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var router = express.Router();
var cons=require('../constants');
var ezp=require('../constants');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var db=require('../databse');
var $           = require('jquery');
var ajax           = require('ajax');  
var app = express();
var ezp=require('../constants');
var usi ='5';

router.get('/', function(req, res, next) {
  var sess=req.session
    if (req.session.isvalid != true) {
        //sessionStore.close();
        res.redirect('/').end();
      }
      var sessionStore = new MySQLStore(cons.options);
      router.use(session({
        key: cons.ses.key,
        secret: cons.ses.secret,
        store: sessionStore,
        resave: cons.ses.resave,
        saveUninitialized: cons.ses.saveUninitialized
      }));
      
      
        var pa6= 'passbook'+req.session.logid;
    
      
    db.query('SELECT * FROM ?? ORDER BY `trans_id` DESC ', [pa6], function (err, data, fields) {
	
    //var sql='SELECT balance FROM passbook7 ';
    var da = [];
    
    
    	
    if (err) throw err;

    


        
        for (var i = 0; i < 12; i++)
        da.push((data[i].balance) );
        var home='analytics';
var title ='Analytics';
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
            
            tyEr ={[ppf]:sess.pmg,p:'3',bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],
            invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],ana:ezp.ana[sess.ln],
            shpk:ezp.shpk[sess.ln],infb:ezp.infb[sess.ln],inlrt:ezp.invlrt[sess.ln],or:ezp.orders[sess.ln],
            task:ezp.task[sess.ln],tran:ezp.transactions[sess.ln],[sess.ln]:true,[bnz]:true, 
           [ppt]:true, [gent]:true, userData: da,
            title: title,[ezp.bnk]:true,}
            res.render(home, tyEr);

           
 //res.send(da);
  }); 
        
});

router.get('/am', function(req, res, next) {
  var sess=req.session
    if (req.session.isvalid != true) {
        sessionStore.close();
        res.redirect('/');
      }
      var sessionStore = new MySQLStore(cons.options);
      router.use(session({
        key: cons.ses.key,
        secret: cons.ses.secret,
        store: sessionStore,
        resave: cons.ses.resave,
        saveUninitialized: cons.ses.saveUninitialized
      }));
      
      
        var pa6= 'passbook'+req.session.logid;
    
      
    db.query('SELECT * FROM ?? ORDER BY `trans_id` DESC ', [pa6], function (err, data, fields) {
  
    //var sql='SELECT balance FROM passbook7 ';
    var da = [];
    
    
      
    if (err) throw err;

    


        
        for (var i = 0; i < 12; i++)
            da.push((data[i].balance) );
            if (sess.bz==true) {
              if (ezp.bnk==='com') {
                res.render('analytics-am', {title: 'Analytics', userData: da, bz:true,com:true });
                
              } else if(ezp.bnk==='ab') {
                res.render('analytics-am', { title: 'Analytics', userData: da,bz:true,ab:true });
              }
            } else if (sess.usr==true) {
              res.redirect('home');
            }
      

 
 //res.send(da);
  }); 
        
});
   




  
  
/* GET home page. */



module.exports = router;

