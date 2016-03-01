'use strict';
module.controller('NavController', ['$scope', '$cookies', 'AccountService', 'NotificationService', 'UIService', function ($scope, $cookies, AccountService, NotificationService, UIService) {

    $scope.onLoad = function () {
        $scope.loadNavigations();
    };

    $scope.loadNavigations = function () {
        UIService.getNavigations().success(function (response) {
            $scope.navs = response.data;
            $scope.setMenuActive();
        });
    }

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

    $scope.setMenuActive = function () {
        console.log('here ' + location.hash);
        angular.forEach($scope.navs, function (item) {
            console.log(item.url.replace('dashboard', ''));
            if (item.url.replace('dashboard','') === '/' + window.location.hash) {
                item.active = true;
            }
            else {
                item.active = false;
            }
        });
    }

    $scope.$watch(function () {
        return location.hash
    }, function (value) {
        $scope.setMenuActive();
    });

    $scope.onLoad();

}]);
