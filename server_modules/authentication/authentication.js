'use strict';
var tokenSession = [];
var userSession = [];
exports.insertAuthenticationUser = function (token, user) {
    if (!tokenSession[token]) {
        if (userSession[user.username]) {
            delete tokenSession[userSession[user.username]];
        }
        tokenSession[token] = user;
        userSession[user.username] = token;
        console.log(tokenSession);
        console.log(userSession);
        return true;
    }
    else {
        return false;
    }
};

exports.getAuthenticationUser = function (token) {
    console.log('GET: ' + token);
    if (token) {
        if (authenticationSession[token]) {
            return authenticationSession[token];
        }
    }
    return {};
};