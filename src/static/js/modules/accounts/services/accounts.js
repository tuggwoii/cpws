'use strict';
module.factory('AccountService', ['$http', 'URLS', function ($http, URLS) {
    return {
        signIn: function (model) {
            return $http.post(URLS.accounts.login, model);
        }
    };
}]);
