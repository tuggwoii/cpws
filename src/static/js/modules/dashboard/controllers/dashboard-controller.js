'use strict';
module.controller('DashboardController', ['$scope', '$cookies', 'AccountService', 'NotificationService', function ($scope, $cookies, AccountService, NotificationService) {
    $scope.state = {};
    $scope.user = {};

    $scope.onLoad = function () {
        $scope.state.isReady = false;
        $scope.requestUser();
    };

    $scope.requestUser = function () {
        NotificationService.loading();
        AccountService.me()
            .success(function (response) {
                $scope.user = response.data;
                NotificationService.stopLoading();
            }).error(function () {
                window.location.href = '/login';
            });
    };


    $scope.$on('Ready', function () {
        $scope.state.isReady = true;
    });

    $scope.onLoad();

}]);
