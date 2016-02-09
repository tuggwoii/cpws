'use strict';
var crypto = require('crypto');
var tokenSession = [];
var userSession = [];
var Account = require('../models/account');

function generateToken () {
    var promise = new Promise(function (resolve, reject) {
        crypto.randomBytes(16, function (err, buf) {
            if (err) reject(err);
            var token = buf.toString('hex');
            resolve(token);
        });
    });
    return promise;
}

exports.getUser = function (token) {
    if (tokenSession[token]) {
        return tokenSession[token];
    }
    else {
        return null;
    }
};

exports.authorizeUser = function (user) {
    var promise = new Promise(function (resolve, reject) {
        generateToken().then(function (token) {
            if (userSession[user.id]) {
                delete tokenSession[userSession[user.id]];
            }
            tokenSession[token] = Account.serializeLogin(user);;
            userSession[user.id] = token;
            resolve(token);
        }).catch(function (err) {
            reject(err);
        });
    });
    return promise;
};

exports.removeUser = function (user) {
    var promise = new Promise(function (resolve, reject) {
        if (userSession[user.email]) {
            var token = userSession[user.email];
            delete tokenSession[userSession[user.email]];
            delete userSession[user.email];
            resolve();
        }
        else {
            reject('no session');
        }
    });
    return promise;
};

exports.isAuthorize = function (request, roles) {
    var token = request.headers['authorization'];
    if (!token) {
        return false;
    }
    var user = tokenSession[token];
    request.user = user;
    if (!user) {
        return false;
    }
    return roles.indexOf(user.role) > -1;
};
