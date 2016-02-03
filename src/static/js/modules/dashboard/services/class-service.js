'use strict';
module.factory('ClassService', ['$http', 'URLS', function ($http, URLS) {
    var base = '/api/v1/';
    return {
        create: function (data) {
            return $http.post(URLS.classes.create, data);
        },
        getAll: function () {
            return $http.get(URLS.classes.get);
        }
    };
}]);
