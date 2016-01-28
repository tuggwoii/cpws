'use strict';
var module = angular.module('app', []);
module.config(function () {

});
var app = {
    onReady: function () {
        angular.bootstrap(document, ['app']);
    }
};
$(document).ready(function () {
    app.onReady();
});
