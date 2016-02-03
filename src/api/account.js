'use strict';
var BaseApi = require('./base');
var Account = require('../models/account');
var authorize = require('../authorize/auth');
var log = require('../helpers/log');

class AccountApi extends BaseApi {

	login (context, request, response) {
        var data = request.body;
        if (Account.isValid(data)) {
            var user = Account.find(data.email);
            authorize.authorizeUser(user).then(function (token) {
                user.token = token;
                context.success(response, user);
            }).catch(function (err) {
                log.file(err.message);
                context.error(response, 'Internal server error', 500);
            });
        }
        else {
            context.error(response, 'Model is invalid', 400);
        }
	}

	logout (context, request, response) {
	    var user = request.user;
	    if (user && user.email) {
	        authorize.removeUser(user).then(function () {
	            response.status(200).json({});
	        }).catch(function () {
	            context.error(response, 'error occurred', 500);
	        });
	    }
	    else {
	        context.error(response, 'no session', 400);
	    }
	}

	me (context, request, response) {
        context.success(response, request.user);
	}

	endpoints () {
		return [
			{ url: '/accounts/login', method: 'post', roles: [], response: this.login },
            { url: '/accounts/me', method: 'get', roles: ['admin'], response: this.me },
            { url: '/accounts/logout', method: 'post', roles: ['admin'], response: this.logout }
		];
	}
}

module.exports = new AccountApi(Account.serialize);
