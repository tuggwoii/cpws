'use strict';
var appModule = angular.module('app', []);
var app = {
    onReady: function () {
        angular.bootstrap(document, ['app']);
    }
};
$(document).ready(function () {
    app.onReady();
});

