'use strict';
module.controller('NavController', ['$scope', '$cookies', 'AccountService', 'NotificationService', function ($scope, $cookies, AccountService, NotificationService) {

    $scope.onLoad = function () {

    };

    $scope.logout = function () {
        NotificationService.loading();
        AccountService.logout().success(function () {
            $cookies.remove('Authorization');
            window.location.href = '/login';
        }).error(function () {
            $cookies.remove('Authorization');
            window.location.href = '/login';
        }).finally(function () {
            NotificationService.stopLoading();
        });
    };

    $scope.onLoad();

}]);
