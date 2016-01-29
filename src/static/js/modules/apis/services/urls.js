'use strict';
module.factory('URLS', function () {
    var base = '/api/v1/';
    return {
        accounts: {
            login: base + 'accounts/login',
            me: base + 'accounts/me'
        }
    };
});
