'use strict';
module.controller('ClassDetailController', ['$scope', '$location', 'ClassService', 'NotificationService', function ($scope, $location, ClassService, NotificationService) {

    $scope.model = {
        id: $location['$$search'].name
    };

    $scope.onLoad = function () {
        $scope.loadClasses();
    };

    $scope.loadClasses = function () {
        NotificationService.loading();
        ClassService.get($scope.model.id).success(function (response) {
            $scope.model = response.data;
        }).error(function (response) {
            var error = {};
            if (response.error && response.error.message) {
                error.message = response.error.message
            }
            NotificationService.openDialog(error);
        }).finally(function () {
            NotificationService.stopLoading();
        });
    };

    $scope.onLoad();

}]);
