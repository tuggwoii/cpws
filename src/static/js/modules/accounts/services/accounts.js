'use strict';
module.factory('AccountService', ['$http', 'URLS', function ($http, URLS) {
    return {
        login: function (model) {
            return $http.post(URLS.accounts.login, model);
        },
        register: function (model) {
            return $http.post(URLS.accounts.register, model);
        },
        me: function () {
            return $http.get(URLS.accounts.me);
        },
        logout: function () {
            return $http.post(URLS.accounts.logout);
        }
    };
}]);
