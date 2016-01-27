var express = require('express');
var UserService = require('../services/user');
var app = express();

module.exports = function (request, response, next) {
	var url = request.url;
	var endpoints = [UserService];
	var isFound = false;
	for(var index = 0; index < endpoints.length; index++) {
		var context = endpoints[index];
		var routes = context.routes();
		for(var routeIndex = 0 ; routeIndex < routes.length; routeIndex++) {
			var route = routes[routeIndex];
			console.log(route.url);
			console.log(url);
			if(url === route.url) {
				isFound = true;
				route.response(request, response, context);
				break;
			}
		}
	}
	if(!isFound) {
		 response.status(404).json({data:[],errors: { message: 'resource not found.' }});
	 }
	/*
	app.get('/account/me', function (request, response, next) {
		response.json(userService.getCurrentUser(request.headers['token']));
	});

	app.post('/account/signin', function (req, res) {
		 userService.signIn(model, function (token) {
			if (token) {
				response.cookie('authenticationToken', token, { maxAge: 900000, httpOnly: true });
				response.json(responseModel.responseSuccess(token));
			}
			else {
				response.json(responseModel.responseError());
			}
		});
	 }); 
	 */
	 
}
