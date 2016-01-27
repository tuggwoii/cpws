appModule.factory('URLS', ['$http', function ($http) {
    var baseApi = '/api/v1';
	var login = '/account/login';
    return {
			login: baseApi + login
    };
}]);