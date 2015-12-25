appModule.factory('URLS', ['$http', function ($http) {
    var signIn = '/account/signin';
    return {
        signIn: function () {
            return signIn;
        }
    };
}]);