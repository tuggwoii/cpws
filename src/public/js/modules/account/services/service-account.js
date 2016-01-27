appModule.factory('AccountService', ['$http', 'URLS', function ($http, URLS) {
    return {
        signIn: function (model) {
            return $http.post(URLS.login, model);
        }
    };
}]);