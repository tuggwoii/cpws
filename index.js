'use strict';
var express = require('express');
var app = express();

//REQUIRE LIBS
var path = require('./config/path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var log = require('.' + path.private + 'services/log');
var db = require('.' + path.private + 'repository/db');

//ROUTES
var routes = require('.' + path.private + 'routes/index');
var apiRoutes = require('.' + path.private + 'routes/api');

//SETTINGS
app.engine('html', require('ejs').renderFile);
app.set('port', (process.env.PORT || 8000));
app.set('views', __dirname + path.public + 'views');
app.set('view engine', 'ejs');

//HANDLER
app.use('/libs', express.static(__dirname + '/node_modules'));
app.use('/js', express.static(__dirname + path.public + 'js'));
app.use('/css', express.static(__dirname + path.public + 'css'));
app.use('/img', express.static(__dirname + path.public + 'img'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/v1', apiRoutes);
app.use('/', routes);

db.sync().then(function (connection) {
	console.log(connection);
	//User.create({username:'tugg.solo@gmail.com', password:'1234'}).then(function (){
		
	//});
	app.listen(app.get('port'), function () {
		log.write('app is running on port ' + app.get('port'));
	});
});

