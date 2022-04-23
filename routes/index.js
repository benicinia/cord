var express = require('express');
var createError =require('http-errors')
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
var ezp = require('../constants');
const { check, validationResult } = require('express-validator');
const json = require('body-parser/lib/types/json');
//const json = require('body-parser/lib/types/json');
var urlencodedparser = bodyparser.urlencoded({  extended: false});
var MySQLStore = require('express-mysql-session')(session);
var urlencodedparser = bodyparser.urlencoded({  extended: false});
var fs = require('fs');
var schemaFilePath = path.join(__dirname, 'schema.sql');
var app = express();
var sessionConnection = mysql.createConnection(ezp.options);
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

router.use(express.json());
router.use(session({
      key: ezp.ses.key,
      secret: ezp.ses.secret,
      store: sessionStore,
      resave: ezp.ses.resave,
      saveUninitialized: ezp.ses.saveUninitialized
    }));


/* GET home page. */
var sess;
router.get('/', function(req, res, next) {
sess= req.session;
var surl=ezp.surl;
	if (sess.isvalid) {
        
        res.redirect('dashboard');

      	
      }else{ 
            if (ezp.bnk==='ab') {
                  res.render('index', { title: 'Express',surl:surl,ab:true });
            } else if (ezp.bnk==='com') {
                  res.render('index', { title: 'Express',surl:surl,com:true });
            } else if (ezp.bnk==='nb') {
                  res.render('index', { title: 'Express',surl:surl,nb:true });
            
            }
      
      
      }
 
});

  



router.get('/ln/:i/:j', function(req, res, next) {
      var sess=req.session;
      var i=req.params.i
      var j=req.params.j
      if (i==='1') {
        var ln='am';
        sess.ln=ln;
      } else if (i==='0') {
        var ln='en';
        sess.ln=ln;
      }
                var sqlinuq = 'UPDATE ?? SET ?? = ? WHERE ?? = ?'; //update inventory
                                   var paranvq = [
                                    'customer',
                                    
                                   
                                    'lng',
                                    
                                    
                                    ln,
                                    'cust_id',
                                    req.session.logid
                                  ];
                                  db.query(sqlinuq, paranvq, function (err, resunv, fields) {
      
      
                                   
                                  })
                                  if (j==='0') {
                                    res.redirect('../../dashboard')  
                                  } else if (j==='00') {
                                    res.redirect('../../send')  
                                  } else if (j==='01') {
                                    res.redirect('../../home')  
                                  }
                                  
                                  else if (j==='1') {
                                    res.redirect('../../orders')  
                              }     else if (j==='2') {
                                    res.redirect('../../add-bank')     
                              } else if (j==='3') {
                                    res.redirect('../../analytic')     
                              } if (j==='4') {
                                    res.redirect('../../user/blinks')     
                              } if (j==='5') {
                                    res.redirect('../../user/create')     
                              } if (j==='6') {
                                    res.redirect('../../user/inventory')     
                              } if (j==='7') {
                                    res.redirect('../../user/inv')     
                              } 
                                  
              })

  

router.get('/pricing', function(req, res, next) {
  sess= req.session;
  if (ezp.bnk==='ab') {
      res.render('pricing', { title: 'Express',ab:true });
} else if (ezp.bnk==='com') {
      res.render('pricing', { title: 'Express',com:true });
} else if (ezp.bnk==='nb') {
      res.render('pricing', { title: 'Express',nb:true });

}
       
  });
  router.get('/sfp', function(req, res, next) {
     
          res.render('sfp', { title: 'Express',ab:true });
    
           
      });
      router.get('/usfp', function(req, res, next) {
     
            res.render('upsfp', { title: 'Express',ab:true });
      
             
        });
      router.post('/sf', function(req, res, next) {
           
            var srv = [{img:'68567129_032_74d4.jpg'},{img:'44177019_082_c302.jpg'},{img:'19751135_016_8b3e.jpg'},{img:'14206353_079_8cb8.jpg'},{img:'50022558_052_e8ec.jpg'},{img:'44266523_016_93e9.jpg'},{img:'14206353_079_8cb8.jpg'},{img:'75902688_800_a597.jpg'},{img:'68042788_015_4b67.jpg'},{img:'59107858_154_74b1.jpg'},{img:'19751135_016_8b3e.jpg'},{img:'26315034_050_7311.jpg'},{img:'27775919_003_cb23.jpg'}];
                res.render('galler', { title: 'Express',ab:true, srv:srv});
          
                 
            });
             router.get('/sf', function(req, res, next) {
           
            var srv = [{img:'68567129_032_74d4.jpg'},{img:'44177019_082_c302.jpg'},{img:'94343511_089_1efe.jpg'},{img:'14206353_079_8cb8.jpg'},{img:'50022558_052_e8ec.jpg'},{img:'44266523_016_93e9.jpg'},{img:'13143930_012_3af2.jpg'},{img:'75902688_800_a597.jpg'},{img:'68042788_015_4b67.jpg'},{img:'31526235_057_81fe.jpg'},{img:'26315034_080_9629.jpg'},{img:'26315034_050_7311.jpg'},{img:'31526235_059_1c84.jpg'},{img:'38603590_025_e642.jpg'},{img:'45946016_008_f853.jpg'},{img:'48444905_145_f0aa.jpg'},{img:'55409126_015_5928.jpg'},{img:'45946016_009_4dfc.jpg'}];
                res.render('galler', { title: 'Express',ab:true , srv:srv});
          
                 
            });
            router.get('/gf', function(req, res, next) {
           
                  var srv = [{img:'68567129_032_74d4.jpg'},{img:'44177019_082_c302.jpg'},{img:'19751135_016_8b3e.jpg'},{img:'14206353_079_8cb8.jpg'},{img:'50022558_052_e8ec.jpg'},{img:'44266523_016_93e9.jpg'},{img:'13143930_012_3af2.jpg'},{img:'75902688_800_a597.jpg'},{img:'68042788_015_4b67.jpg'},{img:'31526235_057_81fe.jpg'},{img:'26315034_080_9629.jpg'},{img:'26315034_050_7311.jpg'},{img:'31526235_059_1c84.jpg'},{img:'38603590_025_e642.jpg'},{img:'45946016_008_f853.jpg'},{img:'48444905_145_f0aa.jpg'},{img:'55409126_015_5928.jpg'},{img:'45946016_009_4dfc.jpg'}];
                      res.render('galley', { title: 'Express',ab:true , srv:srv});
                
                       
                  });
  router.get('/developers', function(req, res, next) {
      sess= req.session;
      if (sess.isvalid) {
            if (ezp.bnk==='ab') {
                  res.render('developers', { title: 'Express',ab:true });
            } else if (ezp.bnk==='com') {
                  res.render('developers', { title: 'Express',com:true });
            } else if (ezp.bnk==='nb') {
                  res.render('developers', { title: 'Express',nb:true });
            
            } 
      } else if(!sess.isvalid) {
            var err = createError(401, 'Please login to view this page.')
   
  if (ezp.bnk==='ab') {
    res.render('404', { title: 'Express',lgi:err,ab:true });
} else if (ezp.bnk==='com') {
    res.render('404', { title: 'Express',lgi:err,com:true });
} else if (ezp.bnk==='nb') {
    res.render('404', { title: 'Express',lgi:err,nb:true });

}
            
      }
      
            
      });
      router.get('/blog', function(req, res, next) {
            sess= req.session;
            
                  if (ezp.bnk==='ab') {
                        res.render('posts', { title: 'Express',ab:true });
                  } else if (ezp.bnk==='com') {
                        res.render('posts', { title: 'Express',com:true });
                  } else if (ezp.bnk==='nb') {
                        res.render('posts', { title: 'Express',nb:true });
                  
                  } 
            
            
                  
            });
            router.get('/bloga', function(req, res, next) {
                  sess= req.session;
                  
                        if (ezp.bnk==='ab') {
                              res.render('postsa', { title: 'Express',ab:true });
                        } else if (ezp.bnk==='com') {
                              res.render('postsa', { title: 'Express',com:true });
                        } else if (ezp.bnk==='nb') {
                              res.render('postsa', { title: 'Express',nb:true });
                        
                        } 
                  
                  
                        
                  });
  router.get('/store', function(req, res, next) {
    sess= req.session;
     
          res.render('shopingo4', { title: 'pricing' });
    });
    router.get('/admin', function(req, res, next) {
      sess= req.session;
       
            res.render('admin', { title: 'admin-login' });
      });

module.exports = router;

