var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var session = require('express-session');
//var isArray = require('isArray');
var $ = require('jquery');
var ajax = require('ajax'); 
var redis = require('redis');
var vhost = require('virtual-host')(express);

var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var mysqli = require('mysqli'); 
var hbs = require('express-hbs');
var cors=require("cors");
var Handlebars= require('handlebars');
var expressValidator = require('express-validator');
var HTMLParser = require('node-html-parser');
var app = express();
var vhost = require('virtual-host')(express);
var urlencodedparser = bodyparser.urlencoded({  extended: false});
var port = process.env.PORT || 3000
app.use(bodyparser.json());
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host            : 'remotemysql.com',
  user            : 'E3Pwg1pVsj',
  password        : 'pszLvjnpeM',
  database        : 'E3Pwg1pVsj'
});


var pool  = mysql.createPool({
  connectionLimit : 10,
 host            : 'remotemysql.com',
  user            : 'E3Pwg1pVsj',
  password        : 'pszLvjnpeM',
  database        : 'E3Pwg1pVsj'
});
//Configure session middleware
var options = {
  host            : 'remotemysql.com',
  user            : 'E3Pwg1pVsj',
  password        : 'pszLvjnpeM',
   port            :  3306,
  database        : 'E3Pwg1pVsj'  //Database Name
};
 
var sessionStore = new MySQLStore(options);

app.use(cookieParser());


app.use(cors());
app.use(session({
  key: 'session_cookie_name',
 secret: 'ssshhhhh',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));


// Render View
app.engine('hbs', hbs.express4({
  partialsDir: [ __dirname +('views/partials'),  __dirname +('views/partials-other')],
  defaultLayout:  __dirname +('views/layout/default.hbs')
}));
/*app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));*/
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.set('partialsDir', __dirname + '/views/partials');
// Serve static resources
app.engine('public', hbs.express4({
  partialsDir: __dirname + '/public'
}));
hbs.registerHelper("x", function(expression, options) {
  var result;

  // you can change the context, or merge it with options.data, options.hash
  var context = this;

  // yup, i use 'with' here to expose the context's properties as block variables
  // you don't need to do {{x 'this.age + 2'}}
  // but you can also do {{x 'age + 2'}}
  // HOWEVER including an UNINITIALIZED var in a expression will return undefined as the result.
  with(context) {
    result = (function() {
      try {
        return eval(expression);
      } catch (e) {
        console.warn('•Expression: {{x \'' + expression + '\'}}\n•JS-Error: ', e, '\n•Context: ', context);
      }
    }).call(context); // to make eval's lexical this=context
  }
  return result;
});

Handlebars.registerHelper({
  eq: (v1, v2) => v1 === v2,
  ne: (v1, v2) => v1 !== v2,
  lt: (v1, v2) => v1 < v2,
  gt: (v1, v2) => v1 > v2,
  lte: (v1, v2) => v1 <= v2,
  gte: (v1, v2) => v1 >= v2,
  and() {
      return Array.prototype.every.call(arguments, Boolean);
  },
  or() {
      return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
  }
});
hbs.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});
Handlebars.registerHelper('checkIf', function (v1,o1,v2,mainOperator,v3,o2,v4,options) {
  var operators = {
       '==': function(a, b){ return a==b},
       '===': function(a, b){ return a===b},
       '!=': function(a, b){ return a!=b},
       '!==': function(a, b){ return a!==b},
       '<': function(a, b){ return a<b},
       '<=': function(a, b){ return a<=b},
       '>': function(a, b){ return a>b},
       '>=': function(a, b){ return a>=b},
       '&&': function(a, b){ return a&&b},
       '||': function(a, b){ return a||b},
    }
  var a1 = operators[o1](v1,v2);
  var a2 = operators[o2](v3,v4);
  var isTrue = operators[mainOperator](a1, a2);
  return isTrue ? options.fn(this) : options.inverse(this);
});
hbs.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});
//app.set('public', __dirname + '/public');
app.use('public',express.static(path.join(__dirname, 'public')));

// Register Async helpers
hbs.registerAsyncHelper('readFile', function(filename, cb) {
  fs.readFile(fp.join(viewsDir, filename), 'utf8', function(err, content) {
    if (err) console.error(err);
    cb(new hbs.SafeString(content));
  });
});
 //app.set('view engine', 'ejs');
 //app.set('views', __dirname + '/views');
 app.use(express.static(path.join(__dirname, 'public')));
app.use('/jquery',express.static(path.join(__dirname+'/node_modules/jquery/dist/')));
app.use('/chart-area.js',express.static(path.join(__dirname, 'public/javascripts/js/demo/chart-area.js')));
var indexRouter = require('./routes/index');
var er = require('./routes/er');
var usersRouter = require('./routes/users');
var msgRouter = require('./routes/msg');
var msgyRouter = require('./routes/msgy');
var loginRouter = require('./routes/dashboard');
var uRouter = require('./routes/home');
var sendRouter = require('./routes/send');
var pyrRouter = require('./routes/pyr');
var pyrtRouter = require('./routes/pyrt');
var bankRouter = require('./routes/add-bank');
var orderRouter = require('./routes/orders');
var ordersRouter = require('./routes/order');
var fundsRouter = require('./routes/addfund');
var cashRouter = require('./routes/send_funds_actionx');
var bRouter = require('./routes/send_funds_actionb');
var authRouter = require('./routes/logon');
var signupRouter = require('./routes/sign-up');
var anaRouter = require('./routes/analytics');
var naRouter = require('./routes/analytic');
var signRouter = require('./routes/signup');
var signupcjRouter = require('./routes/signupcj');
//var signupckRouter = require('./routes/signupck');
var destroyRouter = require('./routes/destroy');
var createuser = require('./routes/create-account');
var secure = require('./routes/secure');
var securex = require('./routes/securex');
var securem = require('./routes/securem');
var checkout = require('./routes/checkout');
var logc = require('./routes/logc');
var logx = require('./routes/logx');
var task = require('./routes/task');
var tap = require('./routes/tap');
var dbam = require('./routes/dashboard_am');
var msignup = require('./routes/msignup');
var admin = require('./routes/admin');
var butt = require('./routes/button');
var tran = require('./routes/tran');
var cbtn = require('./routes/cbtn');
var upin = require('./routes/upin');
var user = require('./routes/user');
var clink = require('./routes/clink');
var token = require('./routes/token');
var q = require('./routes/q');
var uprim = require('./routes/uprim');
var mgup = require('./routes/mgup');
var rplc = require('./routes/rplc');
var stat = require('./routes/stats');
var statt = require('./routes/stat');


var con = require("./routes/constants");















// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/jquery',express.static(path.join(__dirname+'/node_modules/jquery/dist/')));
app.use('/chart-area.js',express.static(path.join(__dirname, 'public/javascripts/js/demo/chart-area.js')));




app.use(function(req, res, next){
  var err = req.session.error;
  var msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = '';
  if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
  if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
  next();
});


//app.set('sesslogId', sess.logid);



app.use('/', indexRouter);
app.use('/er', er);
app.use('/users', usersRouter);
app.use('/stats', stat);
app.use('/stat', statt);
app.use('/msg', msgRouter);
app.use('/msgy', msgyRouter);
app.use('/dashboard', loginRouter);
app.use('/home', uRouter);
app.use('/send', sendRouter);
app.use('/pyr', pyrRouter);
app.use('/pyrt', pyrtRouter);
app.use('/add-bank', bankRouter);
app.use('/orders', orderRouter);
app.use('/order', ordersRouter);
app.use('/addfund', fundsRouter);
app.use('/send_funds_actionx', cashRouter);
app.use('/send_funds_actionb', bRouter);
app.use('/logon', authRouter);
app.use('/sign-up', signupRouter);
app.use('/analytics', anaRouter);
app.use('/analytic', naRouter);
app.use('/signup', signRouter);
app.use('/signupcj', signupcjRouter);
//app.use('/signupck', signupckRouter);
app.use('/destroy', destroyRouter);
app.use('/create-account', createuser);
app.use('/secure', secure);
app.use('/securex', securex);
app.use('/securem', securem);
app.use('/checkout', checkout);
app.use('/logc', logc);
app.use('/logx', logx);
app.use('/task', task);
app.use('/tap', tap);
app.use('/dashboard_am', dbam);
app.use('/msignup', msignup);
app.use('/admin', admin);
app.use('/button', butt);
app.use('/tran', tran);
app.use('/cbtn', cbtn);
app.use('/upin', upin);
app.use('/user', user);
app.use('/clink', clink);
app.use('/token', token);
app.use('/q', q);
app.use('/uprim', uprim);
app.use('/mgup', mgup);
app.use('/api/v2', require('./routes/logx'));
app.use('/api/v1', require('./routes/user'));
app.use('/api3', require('./routes/send_funds_actionb'));
app.use('/api/p2', bRouter);
app.use('/rplc', rplc);
// catch 404 and forward to error handler
app.use(function(req, res, next, da, dat,data, fields) {
  next(createError(404));
});



app.get('*', function(req, res, next) {
  var err = createError(404, 'This page does not exist!')
   
  if (con.bnk==='ab') {
    res.render('404', { title: 'Express',nf:err.status,err:err,ab:true });
} else if (con.bnk==='com') {
    res.render('404', { title: 'Express',nf:err,com:true });
} else if (con.bnk==='nb') {
    res.render('404', { title: 'Express',nf:err,nb:true });

}
//res.send(err.statusCode)
 // next(err);
});

app.use(function(Error, req, res, next) {
  if (Error.code==='ECONNREFUSED') {
    try {
           
      var err = createError(404, req.body.error)
      res.render('pricing', { title: 'Express',nf:err.status,err:err,ab:true });

    } catch (Error) {
     
      res.render('pricing', { title: 'Express',nf:err.status,err:err,ab:true });

 } } //else{res.send(Error);}
//res.send(err.statusCode)
 // next(err);
});
app.listen(port, () => console.log(`Listening on port ${port}`))


module.exports = app;

