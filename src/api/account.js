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
            context.error(response, 'account is invalid', 400);
        }
	}

	me (context, request, response) {
        context.success(response, request.user);
	}

	endpoints () {
		return [
			{ url: '/accounts/login', method: 'post', roles: [], response: this.login },
            { url: '/accounts/me', method: 'get', roles: ['admin'], response: this.me }
		];
	}
}

module.exports = new AccountApi(Account.serialize);
