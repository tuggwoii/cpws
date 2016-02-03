'use strict';
module.controller('ClassController', ['$scope', 'ClassService', 'NotificationService', function ($scope, ClassService, NotificationService) {

	$scope.model = {};
	$scope.classes = [];
	$scope.state = {};

	$scope.onLoad = function () {
		$scope.loadClasses();
	};

	$scope.loadClasses = function () {
		NotificationService.loading();
		ClassService.getAll().success(function (res) {
			console.log(res);
		}).error(function (res) {
			console.log(res);
		}).finally(function () {
			NotificationService.stopLoading();
		});
	};

	$scope.createClass = function (form) {
		angular.forEach(form.$error.required, function (field) {
			field.$setDirty();
		});
		if (form.$valid) {
			NotificationService.loading();
			ClassService.create($scope.model).success(function () {
				$scope.state = {};
			}).error(function (res, status) {
				$scope.state = {};
				if (status === 400) {
					$scope.state.exist = true;
				}
				else {
					$scope.state.error = true;
				}
			}).finally(function () {
				NotificationService.stopLoading();
			});
		}
	}

	$scope.onLoad();

}]);
