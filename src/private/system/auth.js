'use strict';
var crypto = require('crypto');
var tokenSession = [];
var userSession = [];

function generateToken (callback) {
    crypto.randomBytes(16, function (ex, buf) {
        var token = buf.toString('hex');
        callback(token)
    });
}

exports.getUser = function (token) {
    if (tokenSession[token]) {
        return tokenSession[token];
    }
    else {
        return {};
    }
}

exports.autorizeUser = function (user) {
	generateToken(function (token) {
		if (token) {
			if (userSession[user.username]) {
				delete tokenSession[userSession[user.username]];
			}
			tokenSession[token] = user;
			userSession[user.username] = token;
			console.log(tokenSession);
			console.log(userSession);
			callback(token);
		}
		else {
			callback();
		}
    });
}

exports.isAuthenticate = function (request, response, next) {
    if (tokenSession[token]) {
        return true;
    }
    else {
        return false;
    }
}
