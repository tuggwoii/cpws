'use strict';
module.controller('SignInController', ['$scope', 'AccountService', function ($scope, AccountService) {

    $scope.model = { };
    $scope.validate = {
        isValid: true
    };

    $scope.signInClick = function () {
        AccountService.signIn($scope.model)
            .success($scope.onSignInSuccess)
            .error($scope.onSignInError);
    };

    $scope.onSignInSuccess = function (response) {
        if (response.success) {
            location.reload();
        }
        else {
            $scope.validate.isValid = false;
        }
    };

    $scope.onSignInError = function () {
        $scope.validate.isValid = false;
    };

}]);