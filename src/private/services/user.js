'use strict'
var authenticate = require('../system/auth');
var User = require('../models/user');
var BaseService = require('./base');

var UserService = function () {
		
};
UserService.prototype = BaseService.prototype;
UserService.prototype.constructor = UserService; 

UserService.prototype.login = function (request, response, context) {
	var user = request.body;
	var isValid = true;
    if (isValid) {
        context.responseData(request, response, {
			object:user
		});
    }
    else {
		context.responseError(request, response,'Invalid model');
    }
};

UserService.prototype.me = function (request, response, context){
	var user = authenticate.getUser();
	if(user) {
		user = new User(user);
		context.responseData(request, response, {
			object:User.serialize(user)
		});
	}
	else {
		context.responseError(request, response,'Unauthorized');
	}
};

UserService.prototype.routes = function () {
	return [
		{ url: '/account/login', response: this.login }
	];
};

var userService  = new UserService
module.exports = userService;
