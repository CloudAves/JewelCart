/**
 * This app.js describes about the initializing of application.
 * 
 * @Author: Vinod Verma 
 * @Author : Punam Biswal
 * @Version : 1.0.0
 * @Date : 10-04-2015
 * 
 */


// Load Our Modules
var express = require('express');
var bodyParser = require('body-parser');
var sWatchData = require('./routes/sWatchRoute');
var mongoose = require('mongoose');


//added for integration of web application.
var routes = require('./routes');
var user = require('./routes/user');
var path = require('path');

var app = express();


//For webApp Integration dependencies are declared.
var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var multer = require('multer');
var errorHandler = require('errorhandler');

//connect to our database, Ideally you will obtain DB details from a config file.
var dbName='userDB';
var connectionString='mongodb://localhost:27017/'+dbName;
mongoose.connect(connectionString);


//Rest API json parser.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', sWatchData);



//added for App Integration

//Express 3.0 version code style.
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(app.router);
//app.use(express.static(path.join(__dirname, 'public')));

//Express 4.0 version code style.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));
app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.index);
app.get('/users', user.list);



//development only express 3 version
/*if ('development' == app.get('env')) {
app.use(express.errorHandler());
}
*/

// Express 4 version : error handling middleware should be loaded after the loading the routes
if ('development' === app.get('env')) {
  app.use(errorHandler());
}

//Routing of web application.
var register = require('./routes/login');
app.get('/login', register.login);

var sign = require('./routes/signUp');
app.get('/signUp', sign.signUp);

//exported for use.
module.exports = app;
