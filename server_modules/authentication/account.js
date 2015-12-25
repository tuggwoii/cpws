'use strict';
var token = require('./token.js');
var authentication = require('./authentication.js');
exports.login = function (user) {
    token.createToken(function (tokenChar) {
        if (tokenChar) {
            authentication.insertAuthenticationUser(tokenChar, user);
        }
    });
};
exports.current = function (token) {
    return authentication.getAuthenticationUser(token);
};