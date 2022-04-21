const express = require('express');
var mysql = require('mysql');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var bodyParser = require('body-parser');
var db =require('../databse');
var cors=require("cors");
var router = express.Router();
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

// Configure mysql
var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',     
    database: 'netx'
};

var sessionConnection = mysql.createConnection(options);
var sessionStore = new MySQLStore({
    expiration: 10800000,
    createDatabaseTable: true,  //Whether to create a table
    schema: {
        tableName: 'session_tab',   //Table Name
        columnNames: {      //Column Options
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
}, sessionConnection);

//Configure session middleware
//Configuring Middleware


app.use(cors());

var map=req.body;
  var email = map.email;
  var pass = map.password;
  var sess=req.session;





app.post("/log-in", (req, res) => {
    const sess = req.session;
    const { email, password } = req.body
    sess.email = email
    sess.password = pass
   
var phg;
  var cid;
 var sql=db.query('SELECT * FROM customer WHERE email = ?', [email], function (err, data, fields) {
  
  console.log(sql);
 cid =data[0].cust_id;
  var passw =data[0].pwd;
  phg =data[0].gender; // get recievr id

   if (pass === passw ) {



    

    //res.render('cards', { req.session.id });
     // res.redirect( 'log-in');
      res.render('cards', { usrid: cid});
   // res.json(cid);
    } else { 
       
      res.redirect('/');  

    }



   // res.end("success")
});

app.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return console.log(err);
        }
        res.redirect("/")
    });
});

module.exports = router;