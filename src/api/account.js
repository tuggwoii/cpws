'use strict';
var BaseApi = require('./base');
var Account = require('../models/account/account');
class AccountApi extends BaseApi {
	
	login (context, request, response) {
	    var data = request.body;
		context.success(response, data);
	}
	
	endpoints () {
		return [
			{ url: '/accounts/login', method: 'post', authorize: false, response: this.login }
		];
	}
}

module.exports = new AccountApi(Account.serialize);
