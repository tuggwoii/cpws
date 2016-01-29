'use strict';
module.factory('AccountService', ['$http', 'URLS', function ($http, URLS) {
    return {
        login: function (model) {
            return $http.post(URLS.accounts.login, model);
        },
        me: function () {
            return $http.get(URLS.accounts.me);
        }
    };
}]);
