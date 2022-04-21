var express = require('express');

var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var db=require('../databse');



var usi ='5';
app.map({'/users': {get: users.list, delete: users.delete,'/:uid': { get: users.get,
      '/pets': {
        get: pets.list,
        '/:pid': {
          delete: pets.delete
        }
      }
    }
  }
});

router.get('/:submit_val', function(req, res, next) {

  if (req.params.submit_val === 'submit')

    for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
} 
	
   
    var sql2='SELECT * FROM passbook7 where trans_id=25 ';
    
   
    	db.query(sql2, function (err, dat, fields) {
    	
    if (err) throw err;

    

   res.render('analytics', { title: 'User List', userData: data[0]});
  }); 
        
});



  
/* GET home page. */



module.exports = router;

