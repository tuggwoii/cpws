'use strict';
module.factory('URLS', function () {
    var base = '/api/v1/';
    return {
        accounts: {
            login: base + 'accounts/login',
            me: base + 'accounts/me',
            logout: base + 'accounts/logout'
        },
        classes: {
            create: base + 'classes',
            get: base + 'classes'
        }
    };
});
