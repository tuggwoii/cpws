'use strict';
module.factory('URLS', function () {
    var base = '/api/v1/';
    return {
        ui: {
            nav: base + 'backend/navigations'
        },
        accounts: {
            login: base + 'accounts/login',
            register: base + 'accounts/register',
            me: base + 'accounts/me',
            logout: base + 'accounts/logout'
        },
        classes: {
            create: base + 'classes',
            getAll: base + 'classes',
            get: base + 'classes/{id}'
        },
        strings: '/resources/strings.json'
    };
});
