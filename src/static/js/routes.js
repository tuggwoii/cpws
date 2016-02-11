'use strict';
module.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('Dashboard', {
          url: "/",
          templateUrl: "backend/dashboard.html"
      })
      .state('profile', {
          url: "/profile",
          templateUrl: "backend/profile.html",
          controller: function ($scope) {
              $scope.items = ["A", "List", "Of", "Items"];
          }
      })
      .state('pages', {
          url: "/pages",
          templateUrl: "backend/pages.html"
      }).state('class', {
          url: "/class",
          templateUrl: "backend/class.html"
      }).state('class-detail', {
          url: "/class-detail",
          templateUrl: "backend/class-detail.html"
      });
});