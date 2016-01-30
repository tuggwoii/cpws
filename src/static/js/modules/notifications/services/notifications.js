'use strict';
module.factory('NotificationService', ['$rootScope', function ($rootScope) {
    return {
        loading: function () {
            $rootScope.$broadcast('Loading');
        },
        stopLoading: function () {
            $rootScope.$broadcast('StopLoading');
            $rootScope.$broadcast('Ready');
        }
    };
}]);
