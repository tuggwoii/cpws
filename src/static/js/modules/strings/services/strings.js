'use strict';
module.factory('StringService', ['$http', 'URLS', function ($http, URLS) {
    var strings = {};
    return {
        getStrings: function () {
            return $http.get(URLS.strings);
        }
    };
}]);
