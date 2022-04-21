var express = require('express');
var hash = require('pbkdf2-password')();
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var db=require('../databse');

var router = express.Router();
var session = require('express-session');
var app = express();


const { prototype } = require('express-session/session/cookie');
const Connection = require('mysql/lib/Connection');
const { TIMESTAMP } = require('mysql/lib/protocol/constants/types');

app.use(express.json());
app.use(bodyparser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Content-Type', 'application/json');

    
    // Pass to next layer of middleware
    next();
});




  var mserr;
  
  
  
  
  



var usi ='5';
const { check, validationResult } = require('express-validator');
app.post('/', function(req, res, next) {
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();
  // do something if hasErrors is true

  const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
    // Build your resulting errors however you want! String, object, whatever - it works!
    //return `${location}[${param}]: ${msg}`;
    return `${param}: [${msg}[${location}`;
  };
  const result = validationResult(req).formatWith(errorFormatter);
  var map=req.body;
  var fname = map.fname;
  var mname= map.mname
  var lname = map.lname
  var dob = map.dob;
  var gen= map.gender;
  var mail =map.mail;
  var phn = map.phn;
  var addr1 =map.addr1;
  var addr2=map.addr2;
  var city = map.city;
  var state=map.state;
  var unme=map.uname;
  var pwd =map.password;
  var pwd2 =map.password2;
  var pin = map.pin;
  var pin2 = map.pin;
  var toc = map.toc;

  
  // Validation setting

  // Error messages
  var mailexists = 'Email address is already in use!';
  var nmerr = "Name must only contain alphabets!";
  var pinerr ='PIN must be numeric and 4 in length!';
  var p2Error = 'Passwords did not match!';
  
  // response containers
  var data = [];  var datab = [];
  var status_form='OK';
    


  if (!result.isEmpty()) {
    // Response will contain something like
    // { errors: [ "body[password]: must be at least 10 chars long" ] }
    
  // check fname
if ((check(fname,'Use alphabets only')
    .not()
    .isAlpha()
    .isLength({max: 30})
    .withMessage({
      message: 'max of 30 chracters',
     
    })
    
    
    
    ) == true) {
     
     } else { 
       status_form = false;
       data.push({fname:{msg:nmerr,status:false}});
       
      }
      
// check lname 
if ((check(mname).isAlpha().isLength({max: 30})) == true) {
     
      } else { 
        status_form = false;
        data.push({mname:{msg:nmerr,status:false}});
       }
// check lname


  


 if ((check(lname).isAlpha()).isLength({max: 30}) == true) {
     
      } else { 
        status_form = false;
        data.push({lname:{msg:nmerr,status:false}});
       }
// check mail


if ((check(mail).isEmail()) == true) {
    var status_form=true;
  
var sql = db.query('SELECT * FROM customer WHERE email = ?', [mail], function (err, data, fields) {
       if (sql == true) {
        cnail =data[0].email;
       
             
    if (mail == cnail ) {
      
     status_form = false;
      data.push({email:{msg:mailexists,status:false}});
      
      
         } }  }  ); 

}  else {data.push({email:{msg:'Invalid email format',status:false}});}


// check pwd
if ((check(pwd).isLength({ min: 7 })
   ) == true) {
     
     } else { 
       status_form = false;
       data.push({pas:{msg:"Password must be atleast 7 characters!",status:false}});
      }
 // check pwd2 
 if (pwd !== pwd2) {
  status_form = false;  
  data.push({pas2:{msg:p2Error,status:false}});
} else {}
// check pin
  if ((check(pin).isNumeric().isLength(4)) == true) {
      } else { 
      status_form = false;
      data.push({pin:{msg:pinerr,status:false}});
    }  

// check pin2
  if ((check(pin2).isNumeric().isLength(4)) == true) {
      } else { 
      status_form = false;
      data.push({pin:{msg:"PIN must only four contain numbers!",status:false}});
    }  

// check phon

  if ((check(phn).isMobilePhone()) !== true) {
    status_form = false;
    data.push({phon:{msg:"Invalid phone number",status:false}});
   
    } 

// check unme
    if ((check(unme).isAlphanumeric().isLength({max: 8})) == true) {
      
     
      } else{status_form = false;
        data.push({phon:{msg:"Invalid phone number",status:false}});}
    

  // check dob
  if ((check(dob).toDate()) !== true) {
    
    status_form = false;
    data.push({dober:{msg:"Wrong date format",status:false}});
  } 
    else {} 
 // check pwd2 
 if (pwd !== pwd2) {
  status_form = false;  
  data.push({pas2:{msg:p2Error,status:false}});
} else {}

// check Addr1
    if ((check(addr1).isAlphanumeric().isLength({max: 30})) == true) {
      
     
      } else{status_form = false;
        data.push({addr1:{msg:"No symbols max charactes 30",status:false}});}
// check Addr2
    if ((check(addr2).isAlphanumeric().isLength({max: 30})) == true) {
      
     
    } else{status_form = false;
      data.push({addr2:{msg:"No symbols max charactes 30",status:false}});}
  
// check city
if ((check(city).isLength({max: 30})) == true) {
    
  
     
} else{status_form = false;
  data.push({city:{msg:"select city",status:false}});}
  // check state
if ((check(state).isLength({max: 30})) == true) {
      
     
} else{status_form = false;
  data.push({state:{msg:"Error",status:false}});}

// check toc 
if (toc !== true) {
  status_form = false;  
  data.push({toc :{msg:"toc error",status:false}});
} else {}
  
    // set status_form
    
  if (status_form !== true) {
      datab.push({ status_form: false, data: data})
    } else {datab.push({ status_form: true, data: data})}

    return res.json({ errors: result.array() });
  }


    res.json(datab);
});
module.exports = app;


