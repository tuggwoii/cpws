'use strict';
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8000));
app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/src', express.static(__dirname + '/src'));
app.use('/app', express.static(__dirname + '/app'));
app.engine('html', require('ejs').renderFile);

app.get('/', function (request, response) {
    response.status(200).render('pages/index.html');
});

app.get('*', function (request, response) {
    response.status(404).render('pages/404.html');
});

app.listen(app.get('port'), function () {
    /* eslint-disable */
    console.log('Node app is running on port', app.get('port'));
    /* eslint-enable */
});
