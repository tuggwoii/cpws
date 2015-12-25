'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var userService = require('./server_modules/service/user-service.js');
var responseModel = require('./server_modules/model/response.js');
app.set('port', (process.env.PORT || 8000));
app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/src', express.static(__dirname + '/src'));
app.use('/app', express.static(__dirname + '/app'));
app.engine('html', require('ejs').renderFile);

app.get('/', function (request, response) {
    response.status(200).render('pages/index.html');
});

app.get('/backend', function (request, response) {
    if (userService.isAuthenticate()) {
        response.status(200).render('pages/dashboard.html');
    }
    else {
        response.status(200).render('pages/login.html');
    }
});

app.get('/account/me', function (request, response) {
    response.json(userService.getCurrentUser(request.headers['token']));
});

app.post('/account/signin', function (request, response) {
    var model = request.body;
    if (model.username && model.password) {
        userService.signIn(model);
        response.json(responseModel.responseSuccess());
    }
    else {
        response.json(responseModel.responseError());
    }
});

app.get('*', function (request, response) {
    response.status(404).render('pages/404.html');
});

app.listen(app.get('port'), function () {
    /* eslint-disable */
    console.log('Node app is running on port', app.get('port'));
    /* eslint-enable */
});
