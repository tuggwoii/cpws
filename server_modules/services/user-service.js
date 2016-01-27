'use strict'
var crypto = require('crypto');
var tokenSession = [];
var userSession = [];

function getToken (callback) {
    crypto.randomBytes(16, function (ex, buf) {
        var token = buf.toString('hex');
        callback(token)
    });
}

function validateModel (model) {
    if (model && model.username && model.password) {
        return true;
    }
    return false;
}


exports.signIn = function (user, callback) {
    var isValid = validateModel(user);
    if (isValid) {
        getToken(function (token) {
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
    else {
        callback();
    }
}

exports.getCurrentUser = function (token) {
    if (tokenSession[token]) {
        return tokenSession[token];
    }
    else {
        return {};
    }
}

exports.isAuthenticate = function (token) {
    if (tokenSession[token]) {
        return true;
    }
    else {
        return false;
    }
}