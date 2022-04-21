var express = require('express');
var session = require('express-session');
var cons=require('../constants');
var ezp=require('../constants');
var MySQLStore = require('express-mysql-session')(session);
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var db=require('../databse');
var $           = require('jquery');
var ajax           = require('ajax');  
const { toDate, validationResult } = require('express-validator');
var app = express();

var usi ='5';

app.get('/', function(req, res, next) {
    var sess = req.session;
    if (req.session.isvalid == true) {

    } else {
      
        res.redirect('/')
        res.end();}
        var sessionStore = new MySQLStore(cons.options);
        router.use(session({
          key: cons.ses.key,
          secret: cons.ses.secret,
          store: sessionStore,
          resave: cons.ses.resave,
          saveUninitialized: cons.ses.saveUninitialized
        }));
      
        
      
        var pa6= 'lstatt'+sess.logid;
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
      
    db.query('SELECT * FROM ?? WHERE ??= ? ORDER BY `id` ASC ', [pa6,'cweek',utcw], function (err, dast, fields) {
      var sqlco = 'SELECT COUNT(id) FROM ?? WHERE ??= ?';
      var sqlco1 = 'SELECT COUNT(id) FROM ?? WHERE ??= ?';
      var sqlco2 = 'SELECT COUNT(id) FROM ?? WHERE ??= ?';
      var sqlco3 = 'SELECT COUNT(id) FROM ?? WHERE ??= ?';
      var sqlco4 = 'SELECT COUNT(id) FROM ?? WHERE ??= ?';
      var sqlco5 = 'SELECT COUNT(id) FROM ?? WHERE ??= ?';
      var sqlco6 = 'SELECT COUNT(id) FROM ?? WHERE ??= ?';
      var dt =[];
      
        
     
     
       
        db.query(sqlco, [pa6,'cdate','1'], function (err, kino, fields) {
          var count = kino[0] ? kino[0]['COUNT(id)'] : 0;
          if (!err) {
            dt.push(count)
           
          } else if (err) { dt.push(0)}
          
        
         db.query(sqlco1, [pa6,'cdate','2'], function (err, kino1, fields) {
          
          if (!err) {
            var count1 = kino1[0] ? kino1[0]['COUNT(id)'] : 0;
            dt.push(count1)
           
          } else if (err) { dt.push(0)}
          
         
         db.query(sqlco2, [pa6,'cdate',3], function (err, kino2, fields) {
         
          if (!err) {
            var count2 = kino2[0] ? kino2[0]['COUNT(id)'] : 0;
            dt.push(count2)
           
          } else if (err) { dt.push(0)}
        
         db.query(sqlco3, [pa6,'cdate','4'], function (err, kino3, fields) {
         
          if (!err) {
            var count3 = kino3[0] ? kino3[0]['COUNT(id)'] : 0;
            dt.push(count3)
           
          } else if (err) { dt.push(0)}
         
         db.query(sqlco4, [pa6,'cdate','5'], function (err, kino4, fields) {
         
          if (!err) {
            var count4 = kino4[0] ? kino4[0]['COUNT(id)'] : 0;
            dt.push(count4)
           
          } else if (err) { dt.push(0)}
         
         db.query(sqlco5, [pa6,'cdate','6'], function (err, kino5, fields) {
         
          if (!err) {
            var count5 = kino5[0] ? kino5[0]['COUNT(id)'] : 0;
            dt.push(count5)
            
          } else if (err) { dt.push(0)}
        
         db.query(sqlco6, [pa6,'cdate','7'], function (err, kino6, fields) {
          
          if (!err) {
            var count6 = kino6[0] ? kino6[0]['COUNT(id)'] : 0;
            dt.push(count6)
           
          } else if (err) { dt.push(0)}
       
    
	
    //var sql='SELECT balance FROM passbook7 ';
    var da = [];
    
    // var dt =dast.clickdate;
     
     var FORMATS = {
      datetime: 'MMM D, YYYY, h:mm:ss a',
      millisecond: 'h:mm:ss.SSS a',
      second: 'h:mm:ss a',
      minute: 'h:mm a',
      hour: 'hA',
      day: 'MMM D',
      week: 'll',
      month: 'MMM YYYY',
      quarter: '[Q]Q - YYYY',
      year: 'YYYY'
    };var fgf= '2021-08-14 20:59:18';
    var currentDate = new Date('2022-03-16 17:21:09');
    var date = currentDate.getUTCDay();
    
     //const date = new Date.FORMATS.datetime();
     //var month = fgf.toDate();
    
    if (err) throw err;

    


        
       


        
       //for (var i = 0; i < 12; i++)
           //da.push((data[i].balance) );
    	

  //res.render('analytics', { title: 'User List', userData: data });
res.send(dt);
 //res.json(dast);  
  }); })})})})})})})
        
});


   




  
  
/* GET home page. */



module.exports = app;

