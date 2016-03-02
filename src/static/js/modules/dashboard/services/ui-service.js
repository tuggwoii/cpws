'use strict';
module.factory('UIService', ['$http', 'URLS', function ($http, URLS) {
    return {
        getNavigations: function () {
            return $http.get(URLS.ui.nav);
        }
    };
}]);
