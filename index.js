'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routesAPI = require('./src/routes/api');
var routesView = require('./src/routes/view');
app.set('port', (process.env.PORT || 8000));
app.set('views', __dirname + '/src/static/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use('/libs', express.static(__dirname + '/node_modules'));
app.use('/css', express.static(__dirname + '/src/static/css'));
app.use('/js', express.static(__dirname + '/src/static/js'));
app.use(bodyParser.json());
app.use('/api/v1/', routesAPI);
app.use('/', routesView);
app.get('*', function (request, response) {
    response.status(404).render('pages/404.html');
});
app.listen(app.get('port'), function () {
    /* eslint-disable */
    console.log('App is running on port', app.get('port'));
    /* eslint-enable */
});
