'use strict';
appModule.controller('SignInController', ['$scope', 'AccountService', function ($scope, AccountService) {

    $scope.model = { };

    $scope.signInClick = function () {
        AccountService.signIn($scope.model)
            .success($scope.onSignInSuccess)
            .error($scope.onSignInError);
    };

    $scope.onSignInSuccess = function (response) {
        console.log(response);
    }

    $scope.onSignInError = function () {
        console.log('Error');
    }

}]);