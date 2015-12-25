'use strict'
var account = require('../../server_modules/authentication/account.js');
exports.signIn = function (user) {
    account.login(user);
}

exports.getCurrentUser = function (token) {
    return account.current(token);
}

exports.isAuthenticate = function (token) {
    return false;
}